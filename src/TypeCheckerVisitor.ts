import { AbstractParseTreeVisitor } from 'antlr4ng';
import { SimpleLangVisitor } from './parser/src/SimpleLangVisitor';
import { AdditiveExprContext, AssignmentContext, BlockContext, BorrowExpressionContext, DerefExpressionContext, EqualityExprContext, ExpressionContext, FunctionCallContext, FunctionDeclarationContext, IfStatementContext, LetDeclarationContext, LiteralContext, LogicalAndExprContext, LogicalOrExprContext, MultiplicativeExprContext, PrimaryExprContext, RelationalExprContext, ReturnStatementContext, StatementListContext, UnaryExprContext, WhileLoopContext } from './parser/src/SimpleLangParser';
import { Type, NumberType, BooleanType, ReferenceType, VoidType, FunctionType } from './Type';


class TypeCheckerVisitor extends AbstractParseTreeVisitor<Type> implements SimpleLangVisitor<Type> {
    private typeEnv: Map<string, Type>[] = [new Map()];

    visitChildren(ctx: any): Type {
        return super.visitChildren(ctx);
    }

    private lookupVarType(name: string): Type {
        for (let i = this.typeEnv.length - 1; i >= 0; i--) {
            const env = this.typeEnv[i];
            if (env.has(name)) return env.get(name)!;
        }
        throw new Error(`Undefined variable: ${name}`);
    }
    
    private defineVarType(name: string, type: Type): void {
        this.typeEnv[this.typeEnv.length - 1].set(name, type);
    }

    visitStatementList(ctx: StatementListContext): Type {
        for (const stmt of ctx.statement()) {
            this.visit(stmt);
        }
        return VoidType.getInstance();
    }
    
    visitBlock(ctx: BlockContext): Type {
        this.typeEnv.push(new Map());
        const result = this.visit(ctx.statementList());
        this.typeEnv.pop();
        return result;
    }
    
    visitIfStatement(ctx: IfStatementContext): Type {
        const condType = this.visit(ctx.expression());
        if (!condType.compare(BooleanType.getInstance())) {
            throw new Error('Condition of if must be a boolean');
        }
    
        this.visit(ctx.block(0));
        if (ctx.block(1)) {
            this.visit(ctx.block(1));
        } else if (ctx.ifStatement()) {
            this.visit(ctx.ifStatement());
        }
    
        return VoidType.getInstance();
    }
    
    visitWhileLoop(ctx: WhileLoopContext): Type {
        const condType = this.visit(ctx.expression());
        if (!condType.compare(BooleanType.getInstance())) {
            throw new Error('Condition of while loop must be a boolean');
        }
    
        this.visit(ctx.block());
        return VoidType.getInstance();
    }
    
    visitFunctionDeclaration(ctx: FunctionDeclarationContext): Type {
        const name = ctx.IDENTIFIER().getText();
        const paramNames = ctx.parameterList()?.IDENTIFIER().map(id => id.getText()) || [];
        const paramTypes = Array(paramNames.length).fill(NumberType.getInstance());
    
        const funcType = new FunctionType(paramTypes, VoidType.getInstance());
        this.defineVarType(name, funcType);
    
        this.typeEnv.push(new Map());
        for (let i = 0; i < paramNames.length; i++) {
            this.defineVarType(paramNames[i], paramTypes[i]);
        }
    
        const statements = ctx.block().statementList().statement();
        let returnType: Type = VoidType.getInstance();
    
        for (let i = 0; i < statements.length; i++) {
            const stmt = statements[i];
            if (stmt.returnStatement()) {
                returnType = this.visitReturnStatement(stmt.returnStatement());
            } else if (i === statements.length - 1 && stmt.expression()) {
                returnType = this.visit(stmt.expression());
            } else {
                this.visit(stmt);
            }
        }
    
        this.typeEnv.pop();
        funcType.returnType = returnType;
        return VoidType.getInstance();
    }
    
    visitFunctionCall(ctx: FunctionCallContext): Type {
        const name = ctx.IDENTIFIER().getText();
        const funcType = this.lookupVarType(name);
    
        if (!(funcType instanceof FunctionType)) {
            throw new Error(`${name} is not a function`);
        }
    
        const args = ctx.argumentList()?.expression() || [];
    
        if (args.length !== funcType.paramTypes.length) {
            throw new Error(`Function ${name} expects ${funcType.paramTypes.length} arguments, got ${args.length}`);
        }
    
        for (let i = 0; i < args.length; i++) {
            const argType = this.visit(args[i]);
            const expectedType = funcType.paramTypes[i];
            if (!argType.compare(expectedType)) {
                throw new Error(`Argument ${i + 1} of function ${name} has type mismatch`);
            }
        }
        return funcType.returnType;
    }
    
    visitReturnStatement(ctx: ReturnStatementContext): Type {
        if (ctx.expression()) {
            return this.visit(ctx.expression());
        }
        return VoidType.getInstance();
    }
    
    visitExpression(ctx: ExpressionContext): Type {
        if (ctx.borrowExpression()) {
            return this.visitBorrowExpression(ctx.borrowExpression());
        } else if (ctx.derefExpression()) {
            return this.visitDerefExpression(ctx.derefExpression());
        } else {
            return this.visit(ctx.logicalOrExpr());
        }
    }

    visitLogicalOrExpr(ctx: LogicalOrExprContext): Type {
        const leftType = this.visit(ctx.logicalAndExpr(0));
        if (ctx.logicalAndExpr().length === 1) {
            return leftType;
        }
        for (let i = 1; i < ctx.logicalAndExpr().length; i++) {
            const rightType = this.visit(ctx.logicalAndExpr(i));
            if (!leftType.compare(BooleanType.getInstance()) || !rightType.compare(BooleanType.getInstance())) {
                throw new Error("Logical OR operator '||' expects operands of type 'boolean'");
            }
        }
        return BooleanType.getInstance();
    }

    visitLogicalAndExpr(ctx: LogicalAndExprContext): Type {
        const leftType = this.visit(ctx.equalityExpr(0));
        if (ctx.equalityExpr().length === 1) {
            return leftType;
        }
        for (let i = 1; i < ctx.equalityExpr().length; i++) {
            const rightType = this.visit(ctx.equalityExpr(i));
            if (!leftType.compare(BooleanType.getInstance()) || !rightType.compare(BooleanType.getInstance())) {
                throw new Error("Logical AND operator '&&' expects operands of type 'boolean'");
            }
        }
        return BooleanType.getInstance();
    }

    visitEqualityExpr(ctx: EqualityExprContext): Type {
        const leftType = this.visit(ctx.relationalExpr(0));
        if (ctx.relationalExpr().length === 1) {
            return leftType;
        }
        for (let i = 1; i < ctx.relationalExpr().length; i++) {
            this.visit(ctx.relationalExpr(1));
        }
        return BooleanType.getInstance();
    }

    visitRelationalExpr(ctx: RelationalExprContext): Type {
        const leftType = this.visit(ctx.additiveExpr(0));
        if (ctx.additiveExpr().length === 1) {
            return leftType;
        }
        for (let i = 1; i < ctx.additiveExpr().length; i++) {
            const rightType = this.visit(ctx.additiveExpr(i));
            if (!leftType.compare(NumberType.getInstance()) || !rightType.compare(NumberType.getInstance())) {
                throw new Error(`Relational operator '<' or '<=' or '>' or '>=' expects operands of type 'number'`);
            }
        }
        return BooleanType.getInstance();
    }

    visitAdditiveExpr(ctx: AdditiveExprContext): Type {
        const leftType = this.visit(ctx.multiplicativeExpr(0));
        if (ctx.multiplicativeExpr().length === 1) {
            return leftType;
        }
        for (let i = 1; i < ctx.multiplicativeExpr().length; i++) {
            const rightType = this.visit(ctx.multiplicativeExpr(i));
            if (!leftType.compare(NumberType.getInstance()) || !rightType.compare(NumberType.getInstance())) {
                throw new Error("Additive operator '+' or '-' expects operands of type 'number'");
            }
        }
        return NumberType.getInstance();
    }

    visitMultiplicativeExpr(ctx: MultiplicativeExprContext): Type {
        const leftType = this.visit(ctx.unaryExpr(0));
        if (ctx.unaryExpr().length === 1) {
            return leftType;
        }
        for (let i = 1; i < ctx.unaryExpr().length; i++) {
            const rightType = this.visit(ctx.unaryExpr(i));
            if (!leftType.compare(NumberType.getInstance()) || !rightType.compare(NumberType.getInstance())) {
                throw new Error("Multiplicative operator '*' or '/' or '%' expects operands of type 'number'");
            }
        }
        return NumberType.getInstance();
    }

    visitUnaryExpr(ctx: UnaryExprContext): Type {
        if (ctx.unaryExpr()) {
            const exprType = this.visit(ctx.unaryExpr());
            const op = ctx.getChild(0).getText();
            if (op === '-') {
                if (!exprType.compare(NumberType.getInstance())) {
                    throw new Error("Unary operator '-' expects a 'number' operand");
                }
            } else if (op === '!') {
                if (!exprType.compare(BooleanType.getInstance())) {
                    throw new Error("Unary operator '!' expects a 'boolean' operand");
                }
            }
            return exprType;
        } else if (ctx.borrowExpression()) {
            return this.visitBorrowExpression(ctx.borrowExpression());
        } else if (ctx.derefExpression()) {
            return this.visitDerefExpression(ctx.derefExpression());
        } else {
            return this.visit(ctx.primaryExpr());
        }
    }

    visitLetDeclaration(ctx: LetDeclarationContext): Type {
        const name = ctx.IDENTIFIER().getText();
        const exprType = this.visit(ctx.expression());
        this.defineVarType(name, exprType);
        return exprType;
    }

    visitAssignment(ctx: AssignmentContext): Type {
        if (ctx.IDENTIFIER()) {
            const name = ctx.IDENTIFIER().getText();
            const exprType = this.visit(ctx.expression());
            const declaredType = this.lookupVarType(name);

            if (!declaredType.compare(exprType)) {
                throw new Error(`Type mismatch in assignment to '${name}': expected ${declaredType}, got ${exprType}`);
            }

            return exprType;
        }  else if (ctx.derefExpression()) {
            const varName = ctx.derefExpression()._target.text;
            const refType = this.lookupVarType(varName);
            if (!(refType instanceof ReferenceType)) {
                throw new Error(`Cannot assign through non-reference '${varName}'`);
            }
            const rhsType = this.visit(ctx.expression());
            if (!refType.inner.compare(rhsType)) {
                throw new Error(`Type mismatch: expected ${refType.inner}, got ${rhsType}`);
            }
            return rhsType;
        }
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): Type {
        const varName = ctx._target.text;
        const targetType = this.lookupVarType(varName);
        return ReferenceType.of(targetType);
    }

    visitDerefExpression(ctx: DerefExpressionContext): Type {
        const varName = ctx._target.text;
        const refType = this.lookupVarType(varName);

        if (!(refType instanceof ReferenceType)) {
            throw new Error(`Cannot dereference non-reference variable '${varName}'`);
        }

        return refType.inner;
    }

    visitPrimaryExpr(ctx: PrimaryExprContext): Type {
        if (ctx.literal()) {
            return this.visit(ctx.literal());
        } else if (ctx.expression()) {
            return this.visit(ctx.expression());
        } else if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        } else if (ctx.IDENTIFIER()) {
            return this.lookupVarType(ctx.IDENTIFIER().getText());
        }
    }

    visitLiteral(ctx: LiteralContext): Type {
        if (ctx.INT()) {
            return NumberType.getInstance();
        } else if (ctx.BOOL()) {
            return BooleanType.getInstance();
        }
        throw new Error(`Unknown literal type`);
    }
}

export default TypeCheckerVisitor;
