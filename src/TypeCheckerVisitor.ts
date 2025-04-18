import { AbstractParseTreeVisitor } from 'antlr4ng';
import { SimpleLangVisitor } from './parser/src/SimpleLangVisitor';
import { AdditiveExprContext, AssignmentContext, BlockContext, BorrowExpressionContext, DerefExpressionContext, EqualityExprContext, ExpressionContext, FunctionCallContext, FunctionDeclarationContext, IfStatementContext, LetDeclarationContext, LiteralContext, LogicalAndExprContext, LogicalOrExprContext, LoopStatementContext, MultiplicativeExprContext, PrimaryExprContext, PrintlnStatementContext, RelationalExprContext, ReturnStatementContext, StatementContext, StatementListContext, UnaryExprContext, WhileLoopContext } from './parser/src/SimpleLangParser';
import { Type, NumberType, BooleanType, ReferenceType, VoidType, FunctionType, stringToType, StringType } from './Type';

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
        let result = VoidType.getInstance();
        const statements = ctx.statement();
        for (let i = 0; i < statements.length; i++) {
            const stmt = statements[i];
            const stmtType = this.visit(stmt);

            if (!stmtType.compare(VoidType.getInstance()) && result.compare(VoidType.getInstance())) {
                result = stmtType;
            } else if (!stmtType.compare(VoidType.getInstance()) && !stmtType.compare(result)) {
                throw new Error(`Mismatched return types`);
            }
        }
        return result;
    }

    visitBlock(ctx: BlockContext): Type {
        this.typeEnv.push(new Map());
        const result = this.visit(ctx.statementList());
        this.typeEnv.pop();
        return result;
    }

    visitStatement(ctx: StatementContext): Type {
        if (ctx.letDeclaration()) {
            return this.visitLetDeclaration(ctx.letDeclaration());
        } else if (ctx.assignment()) {
            return this.visitAssignment(ctx.assignment());
        } else if (ctx.expression()) {
            this.visitExpression(ctx.expression());
            return VoidType.getInstance();
        } else if (ctx.block()) {
            return this.visitBlock(ctx.block());
        } else if (ctx.ifStatement()) {
            return this.visitIfStatement(ctx.ifStatement());
        } else if (ctx.whileLoop()) {
            return this.visitWhileLoop(ctx.whileLoop());
        } else if (ctx.loopStatement()) {
            return this.visitLoopStatement(ctx.loopStatement());
        } else if (ctx.returnStatement()) {
            return this.visitReturnStatement(ctx.returnStatement());
        } else if (ctx.printlnStatement()) {
            return this.visitPrintlnStatement(ctx.printlnStatement());
        } else if (ctx.breakStatement() || ctx.continueStatement()) {
            return VoidType.getInstance();
        } else if (ctx.functionDeclaration()) {
            return this.visitFunctionDeclaration(ctx.functionDeclaration());
        }
    
        return VoidType.getInstance();
    }
    
    visitIfStatement(ctx: IfStatementContext): Type {
        const condType = this.visit(ctx.expression());
        if (!condType.compare(BooleanType.getInstance())) {
            throw new Error("Condition of if must be a boolean");
        }
    
        const ifType = this.visit(ctx.block(0));
    
        let elseType: Type = VoidType.getInstance();
    
        if (ctx.block(1)) {
            elseType = this.visit(ctx.block(1));
        } else if (ctx.ifStatement()) {
            elseType = this.visit(ctx.ifStatement());
        }
    
        if ((ctx.block(1) || ctx.ifStatement()) && !ifType.compare(elseType)) {
            throw new Error(
                `Types of if branches do not match: if branch is ${ifType.toString()}, else branch is ${elseType.toString()}`
            );
        }
    
        return ifType;
    }
    
    visitWhileLoop(ctx: WhileLoopContext): Type {
        const condType = this.visit(ctx.expression());
        if (!condType.compare(BooleanType.getInstance())) {
            throw new Error('Condition of while loop must be a boolean');
        }
    
        return this.visit(ctx.block());
    }

    visitLoopStatement(ctx: LoopStatementContext): Type {
        return this.visit(ctx.block());
    }
    
    visitFunctionDeclaration(ctx: FunctionDeclarationContext): Type {
        const ident = ctx.IDENTIFIER();
        if (!ident) {
            throw new Error("Function declaration is missing a name");
        }
        const name = ident.getText();
        
        const paramList = ctx.typedParameterList();
        const paramNames: string[] = [];
        const paramTypes: Type[] = [];
        if (paramList) {
            const paramCtxs = paramList.typedParameter();

            for (const p of paramCtxs) {
                const ident = p.IDENTIFIER?.();
                const typeAnn = p.typeAnnotation?.();
            
                if (!ident || !typeAnn) {
                    throw new Error(`Missing parameter name or type annotation in function '${name}'`);
                }
            
                paramNames.push(ident.getText());
                paramTypes.push(stringToType(typeAnn.getText()));
            }
        }
    
        const returnType = ctx.returnType()
            ? stringToType(ctx.returnType().typeAnnotation().getText())
            : VoidType.getInstance();
    
        const funcType = new FunctionType(paramTypes, returnType);
        this.defineVarType(name, funcType);
    
        this.typeEnv.push(new Map());
        for (let i = 0; i < paramNames.length; i++) {
            this.defineVarType(paramNames[i], paramTypes[i]);
        }
    
        const inferredReturnType = this.visit(ctx.block());
    
        this.typeEnv.pop();
    
        if (!inferredReturnType.compare(returnType)) {
            throw new Error(`Function ${name} return type mismatch: expected ${returnType}, got ${inferredReturnType}`);
        }
    
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

    visitPrintlnStatement(ctx: PrintlnStatementContext): Type {
        const expressions = ctx.expression();
    
        for (let i = 0; i < expressions.length; ++i) {
            this.visit(expressions[i]);
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
        let leftType = this.visit(ctx.multiplicativeExpr(0));
    
        for (let i = 1; i < ctx.multiplicativeExpr().length; i++) {
            const rightType = this.visit(ctx.multiplicativeExpr(i));
            const op = ctx.getChild(2 * i - 1).getText();
    
            if (op === '+') {
                if (
                    leftType instanceof NumberType && rightType instanceof NumberType
                ) {
                    leftType = NumberType.getInstance();
                } else if (
                    leftType instanceof StringType && rightType instanceof StringType
                ) {
                    leftType = StringType.getInstance();
                } else {
                    throw new Error(`Unsupported operand types for '+': ${leftType} and ${rightType}`);
                }
            } else if (op === '-') {
                if (
                    leftType instanceof NumberType && rightType instanceof NumberType
                ) {
                    leftType = NumberType.getInstance();
                } else {
                    throw new Error(`Unsupported operand types for '-': ${leftType} and ${rightType}`);
                }
            }
        }
    
        return leftType;
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
    
        if (ctx.typeAnnotation()) {
            const annotatedType = stringToType(ctx.typeAnnotation().getText());
            if (!annotatedType.compare(exprType)) {
                throw new Error(`Type mismatch in declaration of '${name}': expected ${annotatedType}, got ${exprType}`);
            }
        }
    
        this.defineVarType(name, exprType);
        return VoidType.getInstance();
    }

    visitAssignment(ctx: AssignmentContext): Type {
        if (ctx.IDENTIFIER()) {
            const name = ctx.IDENTIFIER().getText();
            const exprType = this.visit(ctx.expression());
            const declaredType = this.lookupVarType(name);

            if (!declaredType.compare(exprType)) {
                throw new Error(`Type mismatch in assignment to '${name}': expected ${declaredType}, got ${exprType}`);
            }

            return VoidType.getInstance();
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
            return VoidType.getInstance();
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
        } else if (ctx.STRING()) {
            return StringType.getInstance();
        }
        throw new Error(`Unknown literal type`);
    }
}

export default TypeCheckerVisitor;
