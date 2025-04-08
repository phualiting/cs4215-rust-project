// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./SimpleLangParser.js";
import { StatementListContext } from "./SimpleLangParser.js";
import { StatementContext } from "./SimpleLangParser.js";
import { BlockContext } from "./SimpleLangParser.js";
import { IfStatementContext } from "./SimpleLangParser.js";
import { WhileLoopContext } from "./SimpleLangParser.js";
import { LoopStatementContext } from "./SimpleLangParser.js";
import { BreakStatementContext } from "./SimpleLangParser.js";
import { ContinueStatementContext } from "./SimpleLangParser.js";
import { FunctionDeclarationContext } from "./SimpleLangParser.js";
import { TypedParameterListContext } from "./SimpleLangParser.js";
import { TypedParameterContext } from "./SimpleLangParser.js";
import { TypeAnnotationContext } from "./SimpleLangParser.js";
import { FunctionCallContext } from "./SimpleLangParser.js";
import { ArgumentListContext } from "./SimpleLangParser.js";
import { ReturnStatementContext } from "./SimpleLangParser.js";
import { ReturnTypeContext } from "./SimpleLangParser.js";
import { LetDeclarationContext } from "./SimpleLangParser.js";
import { MutabilityContext } from "./SimpleLangParser.js";
import { AssignmentContext } from "./SimpleLangParser.js";
import { ExpressionContext } from "./SimpleLangParser.js";
import { LogicalOrExprContext } from "./SimpleLangParser.js";
import { LogicalAndExprContext } from "./SimpleLangParser.js";
import { EqualityExprContext } from "./SimpleLangParser.js";
import { RelationalExprContext } from "./SimpleLangParser.js";
import { AdditiveExprContext } from "./SimpleLangParser.js";
import { MultiplicativeExprContext } from "./SimpleLangParser.js";
import { UnaryExprContext } from "./SimpleLangParser.js";
import { BorrowExpressionContext } from "./SimpleLangParser.js";
import { DerefExpressionContext } from "./SimpleLangParser.js";
import { PrimaryExprContext } from "./SimpleLangParser.js";
import { LiteralContext } from "./SimpleLangParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleLangParser`.
 */
export class SimpleLangListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SimpleLangParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.statementList`.
     * @param ctx the parse tree
     */
    enterStatementList?: (ctx: StatementListContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.statementList`.
     * @param ctx the parse tree
     */
    exitStatementList?: (ctx: StatementListContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.ifStatement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.ifStatement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.whileLoop`.
     * @param ctx the parse tree
     */
    enterWhileLoop?: (ctx: WhileLoopContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.whileLoop`.
     * @param ctx the parse tree
     */
    exitWhileLoop?: (ctx: WhileLoopContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.loopStatement`.
     * @param ctx the parse tree
     */
    enterLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.loopStatement`.
     * @param ctx the parse tree
     */
    exitLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.breakStatement`.
     * @param ctx the parse tree
     */
    enterBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.breakStatement`.
     * @param ctx the parse tree
     */
    exitBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.continueStatement`.
     * @param ctx the parse tree
     */
    enterContinueStatement?: (ctx: ContinueStatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.continueStatement`.
     * @param ctx the parse tree
     */
    exitContinueStatement?: (ctx: ContinueStatementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.typedParameterList`.
     * @param ctx the parse tree
     */
    enterTypedParameterList?: (ctx: TypedParameterListContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.typedParameterList`.
     * @param ctx the parse tree
     */
    exitTypedParameterList?: (ctx: TypedParameterListContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.typedParameter`.
     * @param ctx the parse tree
     */
    enterTypedParameter?: (ctx: TypedParameterContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.typedParameter`.
     * @param ctx the parse tree
     */
    exitTypedParameter?: (ctx: TypedParameterContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.typeAnnotation`.
     * @param ctx the parse tree
     */
    enterTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.typeAnnotation`.
     * @param ctx the parse tree
     */
    exitTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.functionCall`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.functionCall`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.argumentList`.
     * @param ctx the parse tree
     */
    enterArgumentList?: (ctx: ArgumentListContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.argumentList`.
     * @param ctx the parse tree
     */
    exitArgumentList?: (ctx: ArgumentListContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.returnType`.
     * @param ctx the parse tree
     */
    enterReturnType?: (ctx: ReturnTypeContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.returnType`.
     * @param ctx the parse tree
     */
    exitReturnType?: (ctx: ReturnTypeContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.letDeclaration`.
     * @param ctx the parse tree
     */
    enterLetDeclaration?: (ctx: LetDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.letDeclaration`.
     * @param ctx the parse tree
     */
    exitLetDeclaration?: (ctx: LetDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.mutability`.
     * @param ctx the parse tree
     */
    enterMutability?: (ctx: MutabilityContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.mutability`.
     * @param ctx the parse tree
     */
    exitMutability?: (ctx: MutabilityContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.assignment`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.assignment`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.logicalOrExpr`.
     * @param ctx the parse tree
     */
    enterLogicalOrExpr?: (ctx: LogicalOrExprContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.logicalOrExpr`.
     * @param ctx the parse tree
     */
    exitLogicalOrExpr?: (ctx: LogicalOrExprContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.logicalAndExpr`.
     * @param ctx the parse tree
     */
    enterLogicalAndExpr?: (ctx: LogicalAndExprContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.logicalAndExpr`.
     * @param ctx the parse tree
     */
    exitLogicalAndExpr?: (ctx: LogicalAndExprContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.equalityExpr`.
     * @param ctx the parse tree
     */
    enterEqualityExpr?: (ctx: EqualityExprContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.equalityExpr`.
     * @param ctx the parse tree
     */
    exitEqualityExpr?: (ctx: EqualityExprContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.relationalExpr`.
     * @param ctx the parse tree
     */
    enterRelationalExpr?: (ctx: RelationalExprContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.relationalExpr`.
     * @param ctx the parse tree
     */
    exitRelationalExpr?: (ctx: RelationalExprContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.additiveExpr`.
     * @param ctx the parse tree
     */
    enterAdditiveExpr?: (ctx: AdditiveExprContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.additiveExpr`.
     * @param ctx the parse tree
     */
    exitAdditiveExpr?: (ctx: AdditiveExprContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.multiplicativeExpr`.
     * @param ctx the parse tree
     */
    enterMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.multiplicativeExpr`.
     * @param ctx the parse tree
     */
    exitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.unaryExpr`.
     * @param ctx the parse tree
     */
    enterUnaryExpr?: (ctx: UnaryExprContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.unaryExpr`.
     * @param ctx the parse tree
     */
    exitUnaryExpr?: (ctx: UnaryExprContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.borrowExpression`.
     * @param ctx the parse tree
     */
    enterBorrowExpression?: (ctx: BorrowExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.borrowExpression`.
     * @param ctx the parse tree
     */
    exitBorrowExpression?: (ctx: BorrowExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.derefExpression`.
     * @param ctx the parse tree
     */
    enterDerefExpression?: (ctx: DerefExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.derefExpression`.
     * @param ctx the parse tree
     */
    exitDerefExpression?: (ctx: DerefExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

