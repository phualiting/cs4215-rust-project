// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SimpleLangListener } from "./SimpleLangListener.js";
import { SimpleLangVisitor } from "./SimpleLangVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SimpleLangParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly INT = 29;
    public static readonly BOOL = 30;
    public static readonly IDENTIFIER = 31;
    public static readonly WS = 32;
    public static readonly RULE_prog = 0;
    public static readonly RULE_statementList = 1;
    public static readonly RULE_statement = 2;
    public static readonly RULE_block = 3;
    public static readonly RULE_ifStatement = 4;
    public static readonly RULE_whileLoop = 5;
    public static readonly RULE_loopStatement = 6;
    public static readonly RULE_breakStatement = 7;
    public static readonly RULE_continueStatement = 8;
    public static readonly RULE_letDeclaration = 9;
    public static readonly RULE_mutability = 10;
    public static readonly RULE_assignment = 11;
    public static readonly RULE_expression = 12;
    public static readonly RULE_logicalOrExpr = 13;
    public static readonly RULE_logicalAndExpr = 14;
    public static readonly RULE_equalityExpr = 15;
    public static readonly RULE_relationalExpr = 16;
    public static readonly RULE_additiveExpr = 17;
    public static readonly RULE_multiplicativeExpr = 18;
    public static readonly RULE_unaryExpr = 19;
    public static readonly RULE_primaryExpr = 20;
    public static readonly RULE_literal = 21;

    public static readonly literalNames = [
        null, "';'", "'{'", "'}'", "'if'", "'else'", "'while'", "'loop'", 
        "'break'", "'continue'", "'let'", "'='", "'mut'", "'||'", "'&&'", 
        "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", 
        "'/'", "'%'", "'!'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, "INT", "BOOL", "IDENTIFIER", 
        "WS"
    ];
    public static readonly ruleNames = [
        "prog", "statementList", "statement", "block", "ifStatement", "whileLoop", 
        "loopStatement", "breakStatement", "continueStatement", "letDeclaration", 
        "mutability", "assignment", "expression", "logicalOrExpr", "logicalAndExpr", 
        "equalityExpr", "relationalExpr", "additiveExpr", "multiplicativeExpr", 
        "unaryExpr", "primaryExpr", "literal",
    ];

    public get grammarFileName(): string { return "SimpleLang.g4"; }
    public get literalNames(): (string | null)[] { return SimpleLangParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleLangParser.symbolicNames; }
    public get ruleNames(): string[] { return SimpleLangParser.ruleNames; }
    public get serializedATN(): number[] { return SimpleLangParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SimpleLangParser._ATN, SimpleLangParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, SimpleLangParser.RULE_prog);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 44;
            this.statementList();
            this.state = 45;
            this.match(SimpleLangParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statementList(): StatementListContext {
        let localContext = new StatementListContext(this.context, this.state);
        this.enterRule(localContext, 2, SimpleLangParser.RULE_statementList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 48;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 47;
                this.statement();
                }
                }
                this.state = 50;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3963619284) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 4, SimpleLangParser.RULE_statement);
        try {
            this.state = 71;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 52;
                this.letDeclaration();
                this.state = 53;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 55;
                this.assignment();
                this.state = 56;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 58;
                this.expression();
                this.state = 59;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 61;
                this.block();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 62;
                this.ifStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 63;
                this.whileLoop();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 64;
                this.loopStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 65;
                this.breakStatement();
                this.state = 66;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 68;
                this.continueStatement();
                this.state = 69;
                this.match(SimpleLangParser.T__0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 6, SimpleLangParser.RULE_block);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 73;
            this.match(SimpleLangParser.T__1);
            this.state = 74;
            this.statementList();
            this.state = 75;
            this.match(SimpleLangParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, SimpleLangParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 77;
            this.match(SimpleLangParser.T__3);
            this.state = 78;
            this.expression();
            this.state = 79;
            this.block();
            this.state = 84;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                this.state = 80;
                this.match(SimpleLangParser.T__4);
                this.state = 81;
                this.ifStatement();
                }
                break;
            case 2:
                {
                this.state = 82;
                this.match(SimpleLangParser.T__4);
                this.state = 83;
                this.block();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileLoop(): WhileLoopContext {
        let localContext = new WhileLoopContext(this.context, this.state);
        this.enterRule(localContext, 10, SimpleLangParser.RULE_whileLoop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 86;
            this.match(SimpleLangParser.T__5);
            this.state = 87;
            this.expression();
            this.state = 88;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopStatement(): LoopStatementContext {
        let localContext = new LoopStatementContext(this.context, this.state);
        this.enterRule(localContext, 12, SimpleLangParser.RULE_loopStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 90;
            this.match(SimpleLangParser.T__6);
            this.state = 91;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public breakStatement(): BreakStatementContext {
        let localContext = new BreakStatementContext(this.context, this.state);
        this.enterRule(localContext, 14, SimpleLangParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 93;
            this.match(SimpleLangParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public continueStatement(): ContinueStatementContext {
        let localContext = new ContinueStatementContext(this.context, this.state);
        this.enterRule(localContext, 16, SimpleLangParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 95;
            this.match(SimpleLangParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letDeclaration(): LetDeclarationContext {
        let localContext = new LetDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 18, SimpleLangParser.RULE_letDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 97;
            this.match(SimpleLangParser.T__9);
            this.state = 99;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 98;
                this.mutability();
                }
            }

            this.state = 101;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 102;
            this.match(SimpleLangParser.T__10);
            this.state = 103;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mutability(): MutabilityContext {
        let localContext = new MutabilityContext(this.context, this.state);
        this.enterRule(localContext, 20, SimpleLangParser.RULE_mutability);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 105;
            this.match(SimpleLangParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignment(): AssignmentContext {
        let localContext = new AssignmentContext(this.context, this.state);
        this.enterRule(localContext, 22, SimpleLangParser.RULE_assignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 107;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 108;
            this.match(SimpleLangParser.T__10);
            this.state = 109;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 24, SimpleLangParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 111;
            this.logicalOrExpr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logicalOrExpr(): LogicalOrExprContext {
        let localContext = new LogicalOrExprContext(this.context, this.state);
        this.enterRule(localContext, 26, SimpleLangParser.RULE_logicalOrExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 113;
            this.logicalAndExpr();
            this.state = 118;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13) {
                {
                {
                this.state = 114;
                this.match(SimpleLangParser.T__12);
                this.state = 115;
                this.logicalAndExpr();
                }
                }
                this.state = 120;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logicalAndExpr(): LogicalAndExprContext {
        let localContext = new LogicalAndExprContext(this.context, this.state);
        this.enterRule(localContext, 28, SimpleLangParser.RULE_logicalAndExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 121;
            this.equalityExpr();
            this.state = 126;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 14) {
                {
                {
                this.state = 122;
                this.match(SimpleLangParser.T__13);
                this.state = 123;
                this.equalityExpr();
                }
                }
                this.state = 128;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public equalityExpr(): EqualityExprContext {
        let localContext = new EqualityExprContext(this.context, this.state);
        this.enterRule(localContext, 30, SimpleLangParser.RULE_equalityExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 129;
            this.relationalExpr();
            this.state = 134;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 15 || _la === 16) {
                {
                {
                this.state = 130;
                _la = this.tokenStream.LA(1);
                if(!(_la === 15 || _la === 16)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 131;
                this.relationalExpr();
                }
                }
                this.state = 136;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relationalExpr(): RelationalExprContext {
        let localContext = new RelationalExprContext(this.context, this.state);
        this.enterRule(localContext, 32, SimpleLangParser.RULE_relationalExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 137;
            this.additiveExpr();
            this.state = 142;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1966080) !== 0)) {
                {
                {
                this.state = 138;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1966080) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 139;
                this.additiveExpr();
                }
                }
                this.state = 144;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public additiveExpr(): AdditiveExprContext {
        let localContext = new AdditiveExprContext(this.context, this.state);
        this.enterRule(localContext, 34, SimpleLangParser.RULE_additiveExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 145;
            this.multiplicativeExpr();
            this.state = 150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 21 || _la === 22) {
                {
                {
                this.state = 146;
                _la = this.tokenStream.LA(1);
                if(!(_la === 21 || _la === 22)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 147;
                this.multiplicativeExpr();
                }
                }
                this.state = 152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiplicativeExpr(): MultiplicativeExprContext {
        let localContext = new MultiplicativeExprContext(this.context, this.state);
        this.enterRule(localContext, 36, SimpleLangParser.RULE_multiplicativeExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 153;
            this.unaryExpr();
            this.state = 158;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 58720256) !== 0)) {
                {
                {
                this.state = 154;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 58720256) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 155;
                this.unaryExpr();
                }
                }
                this.state = 160;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unaryExpr(): UnaryExprContext {
        let localContext = new UnaryExprContext(this.context, this.state);
        this.enterRule(localContext, 38, SimpleLangParser.RULE_unaryExpr);
        let _la: number;
        try {
            this.state = 164;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__21:
            case SimpleLangParser.T__25:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 161;
                _la = this.tokenStream.LA(1);
                if(!(_la === 22 || _la === 26)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 162;
                this.unaryExpr();
                }
                break;
            case SimpleLangParser.T__26:
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 163;
                this.primaryExpr();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primaryExpr(): PrimaryExprContext {
        let localContext = new PrimaryExprContext(this.context, this.state);
        this.enterRule(localContext, 40, SimpleLangParser.RULE_primaryExpr);
        try {
            this.state = 172;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 166;
                this.literal();
                }
                break;
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 167;
                this.match(SimpleLangParser.IDENTIFIER);
                }
                break;
            case SimpleLangParser.T__26:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 168;
                this.match(SimpleLangParser.T__26);
                this.state = 169;
                this.expression();
                this.state = 170;
                this.match(SimpleLangParser.T__27);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 42, SimpleLangParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            _la = this.tokenStream.LA(1);
            if(!(_la === 29 || _la === 30)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,32,177,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,1,0,1,0,1,0,1,1,4,1,49,8,1,11,1,12,1,50,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,3,2,72,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,85,
        8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,3,9,100,
        8,9,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,13,
        1,13,1,13,5,13,117,8,13,10,13,12,13,120,9,13,1,14,1,14,1,14,5,14,
        125,8,14,10,14,12,14,128,9,14,1,15,1,15,1,15,5,15,133,8,15,10,15,
        12,15,136,9,15,1,16,1,16,1,16,5,16,141,8,16,10,16,12,16,144,9,16,
        1,17,1,17,1,17,5,17,149,8,17,10,17,12,17,152,9,17,1,18,1,18,1,18,
        5,18,157,8,18,10,18,12,18,160,9,18,1,19,1,19,1,19,3,19,165,8,19,
        1,20,1,20,1,20,1,20,1,20,1,20,3,20,173,8,20,1,21,1,21,1,21,0,0,22,
        0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,0,6,
        1,0,15,16,1,0,17,20,1,0,21,22,1,0,23,25,2,0,22,22,26,26,1,0,29,30,
        175,0,44,1,0,0,0,2,48,1,0,0,0,4,71,1,0,0,0,6,73,1,0,0,0,8,77,1,0,
        0,0,10,86,1,0,0,0,12,90,1,0,0,0,14,93,1,0,0,0,16,95,1,0,0,0,18,97,
        1,0,0,0,20,105,1,0,0,0,22,107,1,0,0,0,24,111,1,0,0,0,26,113,1,0,
        0,0,28,121,1,0,0,0,30,129,1,0,0,0,32,137,1,0,0,0,34,145,1,0,0,0,
        36,153,1,0,0,0,38,164,1,0,0,0,40,172,1,0,0,0,42,174,1,0,0,0,44,45,
        3,2,1,0,45,46,5,0,0,1,46,1,1,0,0,0,47,49,3,4,2,0,48,47,1,0,0,0,49,
        50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,3,1,0,0,0,52,53,3,18,9,
        0,53,54,5,1,0,0,54,72,1,0,0,0,55,56,3,22,11,0,56,57,5,1,0,0,57,72,
        1,0,0,0,58,59,3,24,12,0,59,60,5,1,0,0,60,72,1,0,0,0,61,72,3,6,3,
        0,62,72,3,8,4,0,63,72,3,10,5,0,64,72,3,12,6,0,65,66,3,14,7,0,66,
        67,5,1,0,0,67,72,1,0,0,0,68,69,3,16,8,0,69,70,5,1,0,0,70,72,1,0,
        0,0,71,52,1,0,0,0,71,55,1,0,0,0,71,58,1,0,0,0,71,61,1,0,0,0,71,62,
        1,0,0,0,71,63,1,0,0,0,71,64,1,0,0,0,71,65,1,0,0,0,71,68,1,0,0,0,
        72,5,1,0,0,0,73,74,5,2,0,0,74,75,3,2,1,0,75,76,5,3,0,0,76,7,1,0,
        0,0,77,78,5,4,0,0,78,79,3,24,12,0,79,84,3,6,3,0,80,81,5,5,0,0,81,
        85,3,8,4,0,82,83,5,5,0,0,83,85,3,6,3,0,84,80,1,0,0,0,84,82,1,0,0,
        0,84,85,1,0,0,0,85,9,1,0,0,0,86,87,5,6,0,0,87,88,3,24,12,0,88,89,
        3,6,3,0,89,11,1,0,0,0,90,91,5,7,0,0,91,92,3,6,3,0,92,13,1,0,0,0,
        93,94,5,8,0,0,94,15,1,0,0,0,95,96,5,9,0,0,96,17,1,0,0,0,97,99,5,
        10,0,0,98,100,3,20,10,0,99,98,1,0,0,0,99,100,1,0,0,0,100,101,1,0,
        0,0,101,102,5,31,0,0,102,103,5,11,0,0,103,104,3,24,12,0,104,19,1,
        0,0,0,105,106,5,12,0,0,106,21,1,0,0,0,107,108,5,31,0,0,108,109,5,
        11,0,0,109,110,3,24,12,0,110,23,1,0,0,0,111,112,3,26,13,0,112,25,
        1,0,0,0,113,118,3,28,14,0,114,115,5,13,0,0,115,117,3,28,14,0,116,
        114,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,
        27,1,0,0,0,120,118,1,0,0,0,121,126,3,30,15,0,122,123,5,14,0,0,123,
        125,3,30,15,0,124,122,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,
        127,1,0,0,0,127,29,1,0,0,0,128,126,1,0,0,0,129,134,3,32,16,0,130,
        131,7,0,0,0,131,133,3,32,16,0,132,130,1,0,0,0,133,136,1,0,0,0,134,
        132,1,0,0,0,134,135,1,0,0,0,135,31,1,0,0,0,136,134,1,0,0,0,137,142,
        3,34,17,0,138,139,7,1,0,0,139,141,3,34,17,0,140,138,1,0,0,0,141,
        144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,33,1,0,0,0,144,142,
        1,0,0,0,145,150,3,36,18,0,146,147,7,2,0,0,147,149,3,36,18,0,148,
        146,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,
        35,1,0,0,0,152,150,1,0,0,0,153,158,3,38,19,0,154,155,7,3,0,0,155,
        157,3,38,19,0,156,154,1,0,0,0,157,160,1,0,0,0,158,156,1,0,0,0,158,
        159,1,0,0,0,159,37,1,0,0,0,160,158,1,0,0,0,161,162,7,4,0,0,162,165,
        3,38,19,0,163,165,3,40,20,0,164,161,1,0,0,0,164,163,1,0,0,0,165,
        39,1,0,0,0,166,173,3,42,21,0,167,173,5,31,0,0,168,169,5,27,0,0,169,
        170,3,24,12,0,170,171,5,28,0,0,171,173,1,0,0,0,172,166,1,0,0,0,172,
        167,1,0,0,0,172,168,1,0,0,0,173,41,1,0,0,0,174,175,7,5,0,0,175,43,
        1,0,0,0,12,50,71,84,99,118,126,134,142,150,158,164,172
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleLangParser.__ATN) {
            SimpleLangParser.__ATN = new antlr.ATNDeserializer().deserialize(SimpleLangParser._serializedATN);
        }

        return SimpleLangParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleLangParser.literalNames, SimpleLangParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SimpleLangParser.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleLangParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statementList(): StatementListContext {
        return this.getRuleContext(0, StatementListContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_prog;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_statementList;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterStatementList) {
             listener.enterStatementList(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitStatementList) {
             listener.exitStatementList(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public letDeclaration(): LetDeclarationContext | null {
        return this.getRuleContext(0, LetDeclarationContext);
    }
    public assignment(): AssignmentContext | null {
        return this.getRuleContext(0, AssignmentContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public whileLoop(): WhileLoopContext | null {
        return this.getRuleContext(0, WhileLoopContext);
    }
    public loopStatement(): LoopStatementContext | null {
        return this.getRuleContext(0, LoopStatementContext);
    }
    public breakStatement(): BreakStatementContext | null {
        return this.getRuleContext(0, BreakStatementContext);
    }
    public continueStatement(): ContinueStatementContext | null {
        return this.getRuleContext(0, ContinueStatementContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_statement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statementList(): StatementListContext {
        return this.getRuleContext(0, StatementListContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_block;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext[];
    public block(i: number): BlockContext | null;
    public block(i?: number): BlockContext[] | BlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }

        return this.getRuleContext(i, BlockContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_ifStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterIfStatement) {
             listener.enterIfStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitIfStatement) {
             listener.exitIfStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileLoopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_whileLoop;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterWhileLoop) {
             listener.enterWhileLoop(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitWhileLoop) {
             listener.exitWhileLoop(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitWhileLoop) {
            return visitor.visitWhileLoop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_loopStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLoopStatement) {
             listener.enterLoopStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLoopStatement) {
             listener.exitLoopStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLoopStatement) {
            return visitor.visitLoopStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BreakStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_breakStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBreakStatement) {
             listener.enterBreakStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBreakStatement) {
             listener.exitBreakStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContinueStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_continueStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterContinueStatement) {
             listener.enterContinueStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitContinueStatement) {
             listener.exitContinueStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public mutability(): MutabilityContext | null {
        return this.getRuleContext(0, MutabilityContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_letDeclaration;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLetDeclaration) {
             listener.enterLetDeclaration(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLetDeclaration) {
             listener.exitLetDeclaration(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLetDeclaration) {
            return visitor.visitLetDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MutabilityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_mutability;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterMutability) {
             listener.enterMutability(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitMutability) {
             listener.exitMutability(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitMutability) {
            return visitor.visitMutability(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_assignment;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterAssignment) {
             listener.enterAssignment(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitAssignment) {
             listener.exitAssignment(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicalOrExpr(): LogicalOrExprContext {
        return this.getRuleContext(0, LogicalOrExprContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicalOrExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicalAndExpr(): LogicalAndExprContext[];
    public logicalAndExpr(i: number): LogicalAndExprContext | null;
    public logicalAndExpr(i?: number): LogicalAndExprContext[] | LogicalAndExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalAndExprContext);
        }

        return this.getRuleContext(i, LogicalAndExprContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_logicalOrExpr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLogicalOrExpr) {
             listener.enterLogicalOrExpr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLogicalOrExpr) {
             listener.exitLogicalOrExpr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLogicalOrExpr) {
            return visitor.visitLogicalOrExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicalAndExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public equalityExpr(): EqualityExprContext[];
    public equalityExpr(i: number): EqualityExprContext | null;
    public equalityExpr(i?: number): EqualityExprContext[] | EqualityExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EqualityExprContext);
        }

        return this.getRuleContext(i, EqualityExprContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_logicalAndExpr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLogicalAndExpr) {
             listener.enterLogicalAndExpr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLogicalAndExpr) {
             listener.exitLogicalAndExpr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLogicalAndExpr) {
            return visitor.visitLogicalAndExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EqualityExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relationalExpr(): RelationalExprContext[];
    public relationalExpr(i: number): RelationalExprContext | null;
    public relationalExpr(i?: number): RelationalExprContext[] | RelationalExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationalExprContext);
        }

        return this.getRuleContext(i, RelationalExprContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_equalityExpr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterEqualityExpr) {
             listener.enterEqualityExpr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitEqualityExpr) {
             listener.exitEqualityExpr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitEqualityExpr) {
            return visitor.visitEqualityExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationalExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public additiveExpr(): AdditiveExprContext[];
    public additiveExpr(i: number): AdditiveExprContext | null;
    public additiveExpr(i?: number): AdditiveExprContext[] | AdditiveExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveExprContext);
        }

        return this.getRuleContext(i, AdditiveExprContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_relationalExpr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterRelationalExpr) {
             listener.enterRelationalExpr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitRelationalExpr) {
             listener.exitRelationalExpr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitRelationalExpr) {
            return visitor.visitRelationalExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AdditiveExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiplicativeExpr(): MultiplicativeExprContext[];
    public multiplicativeExpr(i: number): MultiplicativeExprContext | null;
    public multiplicativeExpr(i?: number): MultiplicativeExprContext[] | MultiplicativeExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExprContext);
        }

        return this.getRuleContext(i, MultiplicativeExprContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_additiveExpr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterAdditiveExpr) {
             listener.enterAdditiveExpr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitAdditiveExpr) {
             listener.exitAdditiveExpr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitAdditiveExpr) {
            return visitor.visitAdditiveExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiplicativeExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unaryExpr(): UnaryExprContext[];
    public unaryExpr(i: number): UnaryExprContext | null;
    public unaryExpr(i?: number): UnaryExprContext[] | UnaryExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UnaryExprContext);
        }

        return this.getRuleContext(i, UnaryExprContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_multiplicativeExpr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterMultiplicativeExpr) {
             listener.enterMultiplicativeExpr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitMultiplicativeExpr) {
             listener.exitMultiplicativeExpr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitMultiplicativeExpr) {
            return visitor.visitMultiplicativeExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnaryExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unaryExpr(): UnaryExprContext | null {
        return this.getRuleContext(0, UnaryExprContext);
    }
    public primaryExpr(): PrimaryExprContext | null {
        return this.getRuleContext(0, PrimaryExprContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_unaryExpr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterUnaryExpr) {
             listener.enterUnaryExpr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitUnaryExpr) {
             listener.exitUnaryExpr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitUnaryExpr) {
            return visitor.visitUnaryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_primaryExpr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterPrimaryExpr) {
             listener.enterPrimaryExpr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitPrimaryExpr) {
             listener.exitPrimaryExpr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitPrimaryExpr) {
            return visitor.visitPrimaryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.BOOL, 0);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_literal;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
