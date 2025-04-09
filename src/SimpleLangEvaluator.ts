import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import { Instruction } from "./RustLangInstructionTypes";
import { Heap } from "./Heap";
import TypeCheckerVisitor from "./TypeCheckerVisitor";
import OwnershipVisitor from "./OwnershipVisitor";
import { SimpleLangParser } from "./parser/src/SimpleLangParser";
import CompilerVisitor from "./CompilerVisitor";

export class SimpleLangEvaluator extends BasicEvaluator {
    private instrs: Instruction[];
    private OS: number[];
    private RTS: number[];
    private heap: Heap;
    private env: number;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.instrs = [];
        this.OS = [];
        this.RTS = [];
        this.heap = new Heap();
        
        const globalFrame = this.heap.allocateFrame(100);
        for (let i = 0; i < 100; i++) {
            this.heap.setChild(globalFrame, i, this.heap.Unassigned);
        }
        this.env = this.heap.extendEnvironment(this.heap.emptyEnvironment(), globalFrame);
    }

    async evaluateChunk(chunk: string): Promise<void> {
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new SimpleLangLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new SimpleLangParser(tokenStream);
            
            // Parse the input
            const tree = parser.prog();
            const typeChecker = new TypeCheckerVisitor();
            typeChecker.visit(tree);
            const ownershipChecker = new OwnershipVisitor();
            ownershipChecker.visit(tree);
            
            // Evaluate the parsed tree
            const compiler = new CompilerVisitor();
            compiler.visit(tree);
            this.instrs = compiler.getInstructions();
            const result = this.run()
            
            // Send the result to the REPL
            this.conductor.sendOutput(`${result}`);
        }  catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }

    private run(): number | boolean {
        let pc = 0;

        while (pc < this.instrs.length) {
            const instr = this.instrs[pc];

            switch (instr.tag) {
                case 'LDC':
                    this.OS.push(this.heap.valueToAddress(instr.val));
                    pc++;
                    break;

                case 'BINOP': {
                    const bAddr = this.OS.pop();
                    const aAddr = this.OS.pop();
                    const b = this.heap.addressToValue(bAddr);
                    const a = this.heap.addressToValue(aAddr);
                    const binop = instr as { tag: 'BINOP'; op: string };
                
                    if (a === undefined || b === undefined) {
                        throw new Error('Stack underflow');
                    }
                
                    let result: number | boolean;

                    // Handle equality operators for any types
                    if (binop.op === '==' || binop.op === '!=') {
                        result = (binop.op === '==') ? a === b : a !== b;
                    }
                
                    // Handle number operations
                    else if (typeof a === 'number' && typeof b === 'number') {
                        switch (binop.op) {
                            case '+': result = a + b; break;
                            case '-': result = a - b; break;
                            case '*': result = a * b; break;
                            case '/': result = a / b; break;
                            case '%': result = a % b; break;
                            case '<': result = a < b; break;
                            case '<=': result = a <= b; break;
                            case '>': result = a > b; break;
                            case '>=': result = a >= b; break;
                            default:
                                throw new Error(`Invalid numeric operator: ${binop.op}`);
                        }
                    }
                
                    // Handle boolean logic
                    else if (typeof a === 'boolean' && typeof b === 'boolean') {
                        switch (binop.op) {
                            case '&&': result = a && b; break;
                            case '||': result = a || b; break;
                            default:
                                throw new Error(`Invalid boolean operator: ${binop.op}`);
                        }
                    }
                
                    // If types don't match known cases
                    else {
                        throw new Error(`Unsupported operand types for operator '${binop.op}': ${typeof a} and ${typeof b}`);
                    }
                
                    this.OS.push(this.heap.valueToAddress(result));
                    pc++;
                    break;
                }

                case 'UNOP': {
                    const vAddr = this.OS.pop();
                    const v = this.heap.addressToValue(vAddr);
                    const unop = instr as { tag: 'UNOP'; op: '-' | '!'};
                    switch (unop.op) {
                        case '-': this.OS.push(this.heap.valueToAddress(-v)); break;
                        case '!': this.OS.push(this.heap.valueToAddress(v === false ? true : false)); break;
                        default: throw new Error(`Unknown unary operator: ${unop.op}`);
                    }
                    pc++;
                    break;
                }

                case 'ASSIGN': {
                    const val = this.OS.pop();
                    const [frameIdx, valueIdx] = instr.pos;
                    this.heap.setEnvValue(this.env, [frameIdx, valueIdx], val);
                    pc++;
                    break;
                }
    
                case 'LD': {
                    const [frameIdx, valueIdx] = instr.pos;
                    const val = this.heap.getEnvValue(this.env, [frameIdx, valueIdx]);
                    if (this.heap.isUnassigned(val)) {
                        throw new Error("Access of unassigned variable")
                    }
                    this.OS.push(val);
                    pc++;
                    break;
                }

                case 'POP': {
                    this.OS.pop();
                    pc++;
                    break;
                }

                case 'ENTER_SCOPE': {
                    const blockFrame = this.heap.allocateBlockFrame(this.env);
                    this.RTS.push(blockFrame);
                    const frame = this.heap.allocateFrame(instr.num);
                    for (let i = 0; i < instr.num; i++) {
                        this.heap.frameSet(frame, i, this.heap.Unassigned);
                    }
                    this.env = this.heap.extendEnvironment(this.env, frame);
                    pc++;
                    break;
                }

                case 'EXIT_SCOPE': {
                    const blockFrame = this.RTS.pop();
                    if (blockFrame === undefined || !this.heap.isBlockFrame(blockFrame)) {
                        throw new Error("EXIT_SCOPE: Expected block frame on RTS");
                    }
                    this.env = this.heap.getBlockFrameEnv(blockFrame);
                    pc++;
                    break;
                }

                case 'JOF': {
                    const cond = this.OS.pop()!;
                    if (!this.heap.addressToValue(cond)) {
                        pc = instr.addr;
                    } else {
                        pc++;
                    }
                    break;
                }

                case 'GOTO': {
                    pc = instr.addr;
                    break;
                }

                case 'LDF': {
                    const closure = this.heap.allocateClosure(instr.arity, instr.addr, this.env);
                    this.OS.push(closure);
                    pc++;
                    break;
                }

                case 'CALL': {
                    const arity = instr.arity;
                    const fun = this.OS[this.OS.length - arity - 1];

                    const frame = this.heap.allocateFrame(arity);
                    for (let i = arity -1; i >= 0; i--){
                        this.heap.frameSet(frame, i , this.OS.pop()) 
                    } 
                
                    this.OS.pop();
                    const newEnv = this.heap.extendEnvironment(this.heap.getClosureEnv(fun), frame);
                    pc = pc + 1; 
                    this.RTS.push(this.heap.allocateCallFrame(this.env, pc));
                    this.env = newEnv;
                    pc = this.heap.getClosurePC(fun);
                    break;
                }

                case 'RESET': {
                    let frame;
                    do {
                        frame = this.RTS.pop();
                        if (!frame) throw new Error("RESET with empty RTS");
                    } while (!this.heap.isCallFrame(frame));
                
                    pc = this.heap.getCallFramePC(frame);
                    this.env = this.heap.getCallFrameEnv(frame);
                    break;
                }
                
                case 'BORROW': {
                    const [frameIdx, valueIdx] = instr.pos;
                    const varAddr = this.heap.getVarAddress(this.env, [frameIdx, valueIdx]);
                    const refAddr = this.heap.allocateReference(varAddr, instr.mut);
                    this.OS.push(refAddr);
                    pc++;
                    break;
                }

                case 'DEREF': {
                    const refAddr = this.OS.pop();
                    
                    if (!this.heap.isReference(refAddr)) {
                        throw new Error("Cannot dereference a non-reference");
                    }
                
                    const targetAddr = this.heap.getRefTarget(refAddr);
                    const value = this.heap.getWord(targetAddr);
                    this.OS.push(value);
                    pc++;
                    break;
                }

                case 'DEREF_ASSIGN': {
                    const value = this.OS.pop();
                    const ref = this.OS.pop();
                
                    if (!this.heap.isReference(ref)) {
                        throw new Error("Attempted to assign to a non-reference");
                    }
                
                    const targetAddr = this.heap.getRefTarget(ref);
                    this.heap.setWord(targetAddr, value);
                
                    this.OS.push(value);
                    pc++;
                    break;
                }

                case 'DONE':
                    return this.heap.addressToValue(this.OS[this.OS.length - 1]);
            }
        }

        throw new Error("Program terminated without DONE");
    }
}
