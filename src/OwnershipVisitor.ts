import { AbstractParseTreeVisitor } from 'antlr4ng';
import { SimpleLangVisitor } from './parser/src/SimpleLangVisitor';
import { LetDeclarationContext, AssignmentContext, BorrowExpressionContext } from './parser/src/SimpleLangParser';
import { NumberType, Type } from './Type';

class OwnershipVisitor extends AbstractParseTreeVisitor<void> implements SimpleLangVisitor<void> {
    private varStateMap: Map<string, { mutable: boolean, moved: boolean, borrowKind: string, immBorrowCount: number }> = new Map();

    getVarType(varName: string): Type {
        const varState = this.getVarState(varName);
        if (varState) {
            return NumberType.getInstance();
        }
        throw new Error(`Variable ${varName} not declared.`);
    }

    getVarState(varName: string) {
        return this.varStateMap.get(varName);
    }

    visitChildren(ctx: any): void {
        return super.visitChildren(ctx);
    }

    visitLetDeclaration(ctx: LetDeclarationContext): void {
        const varName = ctx.IDENTIFIER().getText();
        const isMutable = ctx.mutability() !== null;
    
        const expr = ctx.expression();
        let borrowKind: 'none' | 'mut' | 'imm' = 'none';
    
        if (expr.borrowExpression()) {
            const isMut = expr.borrowExpression()._mutKeyword !== undefined;
            borrowKind = isMut ? 'mut' : 'imm';
        }
    
        this.visit(expr);
    
        this.varStateMap.set(varName, {
            mutable: isMutable,
            moved: false,
            borrowKind,
            immBorrowCount: borrowKind === 'imm' ? 1 : 0
        });
    }

    visitAssignment(ctx: AssignmentContext): void {
        if (ctx.IDENTIFIER()) {
            const varName = ctx.IDENTIFIER().getText();
            const varState = this.getVarState(varName);

            if (!varState) {
                throw new Error(`Variable ${varName} not declared.`);
            }

            if (!varState.mutable) {
                throw new Error(`Cannot assign to immutable variable ${varName}`);
            }

            if (varState.borrowKind !== 'none') {
                throw new Error(`Cannot assign to ${varName} as it is currently borrowed.`);
            }

            this.visit(ctx.expression());
        } else if (ctx.derefExpression()) {
            const varName = ctx.derefExpression()._target.text;
            const varState = this.getVarState(varName);
    
            if (!varState) {
                throw new Error(`Variable ${varName} not declared.`);
            }
    
            if (varState.borrowKind !== 'mut') {
                throw new Error(`Cannot assign through ${varName} because it is not a mutable reference.`);
            }
    
            this.visit(ctx.expression());
        }
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): void {
        const varName = ctx._target.text;
        const varState = this.getVarState(varName);

        if (!varState) {
            throw new Error(`Variable ${varName} not declared.`);
        }

        const isMutableBorrow = ctx._mutKeyword !== undefined;

        if (isMutableBorrow && varState.borrowKind !== 'none') {
            throw new Error(`Cannot borrow ${varName} mutably because it is already borrowed.`);
        }

        if (isMutableBorrow) {
            varState.borrowKind = 'mut';
        } else {
            if (varState.borrowKind === 'mut') {
                throw new Error(`Cannot borrow ${varName} immutably because it is mutably borrowed.`);
            }
            varState.borrowKind = 'imm';
            varState.immBorrowCount++;
        }
    }
}

export default OwnershipVisitor;
