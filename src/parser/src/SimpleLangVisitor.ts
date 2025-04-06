// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
import { ParameterListContext } from "./SimpleLangParser.js";
import { FunctionCallContext } from "./SimpleLangParser.js";
import { ArgumentListContext } from "./SimpleLangParser.js";
import { ReturnStatementContext } from "./SimpleLangParser.js";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimpleLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SimpleLangVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SimpleLangParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.statementList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementList?: (ctx: StatementListContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.ifStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.whileLoop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileLoop?: (ctx: WhileLoopContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.loopStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopStatement?: (ctx: LoopStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.breakStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStatement?: (ctx: BreakStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.continueStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.functionDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.parameterList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterList?: (ctx: ParameterListContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.argumentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgumentList?: (ctx: ArgumentListContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.letDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetDeclaration?: (ctx: LetDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.mutability`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMutability?: (ctx: MutabilityContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.logicalOrExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalOrExpr?: (ctx: LogicalOrExprContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.logicalAndExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalAndExpr?: (ctx: LogicalAndExprContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.equalityExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEqualityExpr?: (ctx: EqualityExprContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.relationalExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationalExpr?: (ctx: RelationalExprContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.additiveExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditiveExpr?: (ctx: AdditiveExprContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.multiplicativeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryExpr?: (ctx: UnaryExprContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
}

