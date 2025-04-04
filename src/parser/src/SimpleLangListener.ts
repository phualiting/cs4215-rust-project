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

