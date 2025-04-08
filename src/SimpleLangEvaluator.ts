import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import { AdditiveExprContext, AssignmentContext, BlockContext, EqualityExprContext, ExpressionContext, FunctionCallContext, FunctionDeclarationContext, IfStatementContext, LetDeclarationContext, LiteralContext, LogicalAndExprContext, LogicalOrExprContext, LoopStatementContext, MultiplicativeExprContext, PrimaryExprContext, ProgContext, RelationalExprContext, ReturnStatementContext, SimpleLangParser, StatementContext, StatementListContext, UnaryExprContext, WhileLoopContext } from './parser/src/SimpleLangParser';
import { SimpleLangVisitor } from './parser/src/SimpleLangVisitor';
import { Instruction } from "./RustLangInstructionTypes";
import { Heap } from "./Heap";
import TypeCheckerVisitor from "./TypeCheckerVisitor";
import OwnershipVisitor from "./OwnershipVisitor";
import { BorrowExpressionContext, DerefExpressionContext } from './parser/src/SimpleLangParser';

class SimpleLangEvaluatorVisitor extends AbstractParseTreeVisitor<void> implements SimpleLangVisitor<void> {
    private instructions: Instruction[];
    private wc: number;
    private compileEnv: string[][] = [[]];
    private mutabilityMap: Map<string, boolean> = new Map();
    private loopStack: { breakPatch: number[], continueAddr: number }[] = [];

    constructor() {
        super();
        this.instructions = [];
        this.wc = 0;
    }

    public getInstructions(): Instruction[] {
        return this.instructions;
    }

    private emit(instr: Instruction): void {
        this.instructions[this.wc++] = instr;
    }

    // === Compile-time environment helpers ===
    private compile_time_environment_position(env: string[][], x: string): [number, number] {
        let frame_index = env.length;
        while (--frame_index >= 0) {
            const index = this.value_index(env[frame_index], x);
            if (index !== -1) return [frame_index, index];
        }
        throw new Error(`ReferenceError: '${x}' is not defined`);
    }

    private value_index(frame: string[], x: string): number {
        for (let i = 0; i < frame.length; i++) {
            if (frame[i] === x) return i;
        }
        return -1;
    }

    private extend_compile_env(newSymbols: string[]): void {
        this.compileEnv = [...this.compileEnv, newSymbols];
    }

    private scanStatementList(ctx: StatementListContext): string[] {
        const locals: string[] = [];
    
        for (const stmt of ctx.statement()) {
            if (stmt.letDeclaration()) {
                const name = stmt.letDeclaration().IDENTIFIER().getText();
    
                try {
                    this.compile_time_environment_position(this.compileEnv, name);
                    continue;
                } catch {
                    locals.push(name);
                }
            }
        }
    
        return locals;
    }

    // Visit a parse tree produced by SimpleLangParser#prog
    visitProg(ctx: ProgContext): void {
        this.visit(ctx.statementList());
        this.emit({ tag: 'DONE' });
    }

    visitStatementList(ctx: StatementListContext): void {
        const stmts = ctx.statement();
        for (let i = 0; i < stmts.length; i++) {
            this.visit(stmts[i]);
            if (i !== stmts.length - 1) {
                this.emit({ tag: 'POP' });
            }
        }
    }
    
    visitStatement(ctx: StatementContext): void {
        if (ctx.expression()) {
            this.visit(ctx.expression());
        } else if (ctx.letDeclaration()) {
            this.visit(ctx.letDeclaration());
        } else if (ctx.assignment()) {
            this.visit(ctx.assignment());
        } else if (ctx.block()) {
            this.visit(ctx.block());
        } else if (ctx.ifStatement()) {
            this.visit(ctx.ifStatement());
        } else if (ctx.whileLoop()) {
            this.visitWhileLoop(ctx.whileLoop());
        } else if (ctx.loopStatement()) {
            this.visitLoopStatement(ctx.loopStatement());
        } else if (ctx.breakStatement()) {
            this.visitBreakStatement();
        } else if (ctx.continueStatement()) {
            this.visitContinueStatement();
        } else if (ctx.functionDeclaration()) {
            this.visitFunctionDeclaration(ctx.functionDeclaration());
        } else if (ctx.returnStatement()) {
            this.visitReturnStatement(ctx.returnStatement());
        }
    }

    visitBlock(ctx: BlockContext): void {
        const locals = this.scanStatementList(ctx.statementList());
        this.emit({ tag: 'ENTER_SCOPE', num: locals.length });
        this.extend_compile_env(locals);
        this.visit(ctx.statementList());
        this.compileEnv.pop();
        this.emit({ tag: 'EXIT_SCOPE' });
    }

    visitIfStatement(ctx: IfStatementContext): void {
        this.visit(ctx.expression());

        const jof = this.wc++;
        this.instructions[jof] = { tag: 'JOF', addr: -1 };

        this.visit(ctx.block(0));

        const goto = this.wc++;
        this.instructions[goto] = { tag: 'GOTO', addr: -1 };

        this.instructions[jof].addr = this.wc;

        if (ctx.ifStatement()) {
            this.visitIfStatement(ctx.ifStatement());
        } else if (ctx.block(1)) {
            this.visit(ctx.block(1));
        } else {
            this.emit({ tag: 'LDC', val: false });
        }

        this.instructions[goto].addr = this.wc;
    }

    visitWhileLoop(ctx: WhileLoopContext): void {
        const loopStart = this.wc;
        const loopInfo = { breakPatch: [] as number[], continueAddr: loopStart };
        this.loopStack.push(loopInfo);
    
        this.visit(ctx.expression());
    
        const jofIndex = this.wc++;
        this.instructions[jofIndex] = { tag: 'JOF', addr: -1 };
    
        this.visit(ctx.block());
    
        this.emit({ tag: 'POP' });
        this.emit({ tag: 'GOTO', addr: loopStart });
    
        const breakTarget = this.wc;
        this.instructions[jofIndex].addr = breakTarget;
    
        for (const patch of loopInfo.breakPatch) {
            this.instructions[patch] = { tag: 'GOTO', addr: breakTarget };
        }
    
        this.loopStack.pop();
        this.emit({ tag: 'LDC', val: false });
    }

    visitLoopStatement(ctx: LoopStatementContext): void {
        const loopStart = this.wc;
        const loopInfo = { breakPatch: [] as number[], continueAddr: loopStart };
        this.loopStack.push(loopInfo);
    
        this.visit(ctx.block());
    
        this.emit({ tag: 'POP' });
        this.emit({ tag: 'GOTO', addr: loopStart });
    
        const breakTarget = this.wc;
        for (const patch of loopInfo.breakPatch) {
            this.instructions[patch] = { tag: 'GOTO', addr: breakTarget };
        }
    
        this.loopStack.pop();
        this.emit({ tag: 'LDC', val: false });
    }

    visitBreakStatement(): void {
        const loopInfo = this.loopStack[this.loopStack.length - 1];
        loopInfo.breakPatch.push(this.wc);
        this.emit({ tag: 'BREAK' }); // placeholder
    }

    visitContinueStatement(): void {
        const loopInfo = this.loopStack[this.loopStack.length - 1];
        this.emit({ tag: 'GOTO', addr: loopInfo.continueAddr });
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext): void {
        const name = ctx.IDENTIFIER().getText();
        const params = ctx.parameterList()?.IDENTIFIER().map(id => id.getText()) || [];
        const body = ctx.block();
    
        this.compileEnv[this.compileEnv.length - 1].push(name);
        this.mutabilityMap.set(name, false);
    
        const startPC = this.wc + 2;
        this.emit({ tag: 'LDF', arity: params.length, addr: startPC });
    
        const gotoIndex = this.wc++;
        this.instructions[gotoIndex] = { tag: 'GOTO', addr: -1 };
        this.extend_compile_env(params);
        this.visit(body);
        this.compileEnv.pop();
        this.emit({ tag: 'RESET' });
        this.instructions[gotoIndex].addr = this.wc;
        this.emit({
            tag: 'ASSIGN',
            pos: this.compile_time_environment_position(this.compileEnv, name)
        });
    }

    visitFunctionCall(ctx: FunctionCallContext): void {
        const name = ctx.IDENTIFIER().getText();
        const args = ctx.argumentList()?.expression() || [];
        this.emit({ tag: 'LD', pos: this.compile_time_environment_position(this.compileEnv, name) });
        for (const arg of args) {
            this.visit(arg);
        }
        this.emit({ tag: 'CALL', arity: args.length });
    }

    visitReturnStatement(ctx: ReturnStatementContext): void {
        if (ctx.expression()) {
            this.visit(ctx.expression());
        } else {
            this.emit({ tag: 'LDC', val: undefined });
        }
        this.emit({ tag: 'RESET' });
    }
    
    visitLetDeclaration(ctx: LetDeclarationContext): void {
        const name = ctx.IDENTIFIER().getText();
        const isMutable = ctx.mutability() !== null;
        this.compileEnv[this.compileEnv.length - 1].push(name);
        this.mutabilityMap.set(name, isMutable);

        this.visit(ctx.expression());
        this.emit({ tag: 'ASSIGN', pos: this.compile_time_environment_position(this.compileEnv, name) });
    }

    visitAssignment(ctx: AssignmentContext): void {
        if (ctx.IDENTIFIER()) {
            const name = ctx.IDENTIFIER().getText();
            if (!this.mutabilityMap.get(name)) {
                throw new Error(`Cannot assign to immutable variable '${name}'`);
            }
            this.visit(ctx.expression());
            this.emit({ tag: 'ASSIGN', pos: this.compile_time_environment_position(this.compileEnv, name) });
        } else if (ctx.derefExpression()) {
            const derefExpr = ctx.derefExpression();
            const targetName = derefExpr._target.text;
        
            this.emit({ tag: 'LD', pos: this.compile_time_environment_position(this.compileEnv, targetName) });
        
            this.visit(ctx.expression());
        
            this.emit({ tag: 'DEREF_ASSIGN' });
        }
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): void {
        const varName = ctx._target.text;
        const isMut = ctx._mutKeyword !== undefined;
        const pos = this.compile_time_environment_position(this.compileEnv, varName);
        
        this.emit({ tag: 'BORROW', pos, mut: isMut });
        
    }
    
    visitDerefExpression(ctx: DerefExpressionContext): void {
        const name = ctx._target.text;
        const pos = this.compile_time_environment_position(this.compileEnv, name);
        this.emit({ tag: 'LD', pos });
        this.emit({ tag: 'DEREF' });
    }

    // Visit a parse tree produced by SimpleLangParser#expression
    visitExpression(ctx: ExpressionContext): void {
        if (ctx.derefExpression()) {
            return this.visitDerefExpression(ctx.derefExpression());
        } else if (ctx.borrowExpression()) {
            return this.visitBorrowExpression(ctx.borrowExpression());
        } else {
            return this.visit(ctx.logicalOrExpr());
        }
    }

    visitLogicalOrExpr(ctx: LogicalOrExprContext): void {
        this.visit(ctx.logicalAndExpr(0));
        for (let i = 1; i < ctx.logicalAndExpr().length; i++) {
            this.visit(ctx.logicalAndExpr(i));
            this.emit({ tag: 'BINOP', op: '||' });
        }
    }
    
    visitLogicalAndExpr(ctx: LogicalAndExprContext): void {
        this.visit(ctx.equalityExpr(0));
        for (let i = 1; i < ctx.equalityExpr().length; i++) {
            this.visit(ctx.equalityExpr(i));
            this.emit({ tag: 'BINOP', op: '&&' });
        }
    }
    
    visitEqualityExpr(ctx: EqualityExprContext): void {
        this.visit(ctx.relationalExpr(0));
        for (let i = 1; i < ctx.relationalExpr().length; i++) {
            const op = ctx.getChild(2 * i - 1).getText(); // '==' or '!='
            this.visit(ctx.relationalExpr(i));
            this.emit({ tag: 'BINOP', op: op as '==' | '!=' });
        }
    }
    
    visitRelationalExpr(ctx: RelationalExprContext): void {
        this.visit(ctx.additiveExpr(0));
        for (let i = 1; i < ctx.additiveExpr().length; i++) {
            const op = ctx.getChild(2 * i - 1).getText(); // <, <=, >, >=
            this.visit(ctx.additiveExpr(i));
            this.emit({ tag: 'BINOP', op: op as '<' | '<=' | '>' | '>=' });
        }
    }

    visitAdditiveExpr(ctx: AdditiveExprContext): void {
        this.visit(ctx.multiplicativeExpr(0));
        for (let i = 1; i < ctx.multiplicativeExpr().length; i++) {
            const right = ctx.multiplicativeExpr(i);
            const op = ctx.getChild(2 * i - 1).getText(); // Operator is between operands
            this.visit(right);
            this.emit({ tag: 'BINOP', op: op as '+' | '-' });
        }
    }

    visitMultiplicativeExpr(ctx: MultiplicativeExprContext): void {
        this.visit(ctx.unaryExpr(0));
        for (let i = 1; i < ctx.unaryExpr().length; i++) {
            const right = ctx.unaryExpr(i);
            const op = ctx.getChild(2 * i - 1).getText(); // Operator is between operands
            this.visit(right);
            this.emit({ tag: 'BINOP', op: op as '*' | '/' | '%' });
        }
    }

    visitUnaryExpr(ctx: UnaryExprContext): void {
        if (ctx.unaryExpr()) {
            const op = ctx.getChild(0).getText(); // '-' or '!'
            this.visit(ctx.unaryExpr());
            this.emit({ tag: 'UNOP', op: op as '-' | '!' });
        } else if (ctx.borrowExpression()) {
            this.visit(ctx.borrowExpression());
        } else if (ctx.derefExpression()) {
            this.visit(ctx.derefExpression());
        } else {
            this.visit(ctx.primaryExpr());
        }
    }

    visitPrimaryExpr(ctx: PrimaryExprContext): void {
        if (ctx.literal()) {
            this.visit(ctx.literal());
        } else if (ctx.IDENTIFIER()) {
            const name = ctx.IDENTIFIER().getText();
            this.emit({ tag: 'LD', pos: this.compile_time_environment_position(this.compileEnv, name) });
        } else if (ctx.expression()) {
            this.visit(ctx.expression());
        } else if (ctx.functionCall()) {
            this.visitFunctionCall(ctx.functionCall());
        }
    }

    visitLiteral(ctx: LiteralContext): void {
        if (ctx.INT()) {
            const val = parseInt(ctx.INT().getText());
            this.emit({ tag: 'LDC', val });
        } else if (ctx.BOOL()) {
            const val = ctx.BOOL().getText() === 'true';
            this.emit({ tag: 'LDC', val });
        }
    }
}

export class SimpleLangEvaluator extends BasicEvaluator {
    private visitor: SimpleLangEvaluatorVisitor;
    private instrs: Instruction[];
    private OS: number[];
    private RTS: number[];
    private heap: Heap;
    private env: number;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.visitor = new SimpleLangEvaluatorVisitor();
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
            this.visitor.visit(tree);
            this.instrs = this.visitor.getInstructions();
            const result = this.run()
            
            // Send the result to the REPL
            this.conductor.sendOutput(`Result of expression: ${result}`);
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
            this.conductor.sendOutput(`${instr.tag}`)

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
                        case '!': this.OS.push(this.heap.valueToAddress(v === 0 ? 1 : 0)); break;
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
