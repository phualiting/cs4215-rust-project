import { AbstractParseTreeVisitor } from 'antlr4ng';
import { SimpleLangVisitor } from './parser/src/SimpleLangVisitor';

import { AdditiveExprContext, EqualityExprContext, ExpressionContext, LiteralContext, LogicalAndExprContext, LogicalOrExprContext, MultiplicativeExprContext, PrimaryExprContext, RelationalExprContext, UnaryExprContext } from './parser/src/SimpleLangParser';

import { Type, NumberType, BooleanType } from './Type';


class TypeCheckerVisitor extends AbstractParseTreeVisitor<Type> implements SimpleLangVisitor<Type> {
    visitChildren(ctx: any): Type {
        return super.visitChildren(ctx);
    }
    
    visitExpression(ctx: ExpressionContext): Type {
        return this.visit(ctx.logicalOrExpr());
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
        } else {
            return this.visit(ctx.primaryExpr());
        }
    }

    visitPrimaryExpr(ctx: PrimaryExprContext): Type {
        if (ctx.literal()) {
            return this.visit(ctx.literal());
        } else if (ctx.expression()) {
            return this.visit(ctx.expression());
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
