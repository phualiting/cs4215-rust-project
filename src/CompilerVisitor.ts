import { AbstractParseTreeVisitor } from "antlr4ng";
import { Instruction } from "./RustLangInstructionTypes";
import { AdditiveExprContext, AssignmentContext, BlockContext, BorrowExpressionContext, DerefExpressionContext, EqualityExprContext, ExpressionContext, FunctionCallContext, FunctionDeclarationContext, IfStatementContext, LetDeclarationContext, LiteralContext, LogicalAndExprContext, LogicalOrExprContext, LoopStatementContext, MultiplicativeExprContext, PrimaryExprContext, ProgContext, RelationalExprContext, ReturnStatementContext, StatementContext, StatementListContext, UnaryExprContext, WhileLoopContext } from "./parser/src/SimpleLangParser";
import { SimpleLangVisitor } from "./parser/src/SimpleLangVisitor";

class CompilerVisitor extends AbstractParseTreeVisitor<void> implements SimpleLangVisitor<void> {
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
        const paramCtxs = ctx.typedParameterList()?.typedParameter() || [];
        const paramNames = paramCtxs.map(p => p.IDENTIFIER().getText());
        const arity = paramNames.length;
        const body = ctx.block();
    
        this.compileEnv[this.compileEnv.length - 1].push(name);
        this.mutabilityMap.set(name, false);
    
        const startPC = this.wc + 2;
        this.emit({ tag: 'LDF', arity, addr: startPC });
    
        const gotoIndex = this.wc++;
        this.instructions[gotoIndex] = { tag: 'GOTO', addr: -1 };
    
        this.extend_compile_env(paramNames);
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
        } else if (ctx.STRING()) {
            const str = ctx.STRING().getText().slice(1, -1);
            this.emit({ tag: 'LDC', val: str });
        }
    }
}

export default CompilerVisitor;
