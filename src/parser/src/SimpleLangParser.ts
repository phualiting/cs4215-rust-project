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
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly INT = 32;
    public static readonly BOOL = 33;
    public static readonly IDENTIFIER = 34;
    public static readonly WS = 35;
    public static readonly RULE_prog = 0;
    public static readonly RULE_statementList = 1;
    public static readonly RULE_statement = 2;
    public static readonly RULE_block = 3;
    public static readonly RULE_ifStatement = 4;
    public static readonly RULE_whileLoop = 5;
    public static readonly RULE_loopStatement = 6;
    public static readonly RULE_breakStatement = 7;
    public static readonly RULE_continueStatement = 8;
    public static readonly RULE_functionDeclaration = 9;
    public static readonly RULE_parameterList = 10;
    public static readonly RULE_functionCall = 11;
    public static readonly RULE_argumentList = 12;
    public static readonly RULE_returnStatement = 13;
    public static readonly RULE_letDeclaration = 14;
    public static readonly RULE_mutability = 15;
    public static readonly RULE_assignment = 16;
    public static readonly RULE_expression = 17;
    public static readonly RULE_logicalOrExpr = 18;
    public static readonly RULE_logicalAndExpr = 19;
    public static readonly RULE_equalityExpr = 20;
    public static readonly RULE_relationalExpr = 21;
    public static readonly RULE_additiveExpr = 22;
    public static readonly RULE_multiplicativeExpr = 23;
    public static readonly RULE_unaryExpr = 24;
    public static readonly RULE_primaryExpr = 25;
    public static readonly RULE_literal = 26;

    public static readonly literalNames = [
        null, "';'", "'{'", "'}'", "'if'", "'else'", "'while'", "'loop'", 
        "'break'", "'continue'", "'fn'", "'('", "')'", "','", "'return'", 
        "'let'", "'='", "'mut'", "'||'", "'&&'", "'=='", "'!='", "'<'", 
        "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'!'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "INT", 
        "BOOL", "IDENTIFIER", "WS"
    ];
    public static readonly ruleNames = [
        "prog", "statementList", "statement", "block", "ifStatement", "whileLoop", 
        "loopStatement", "breakStatement", "continueStatement", "functionDeclaration", 
        "parameterList", "functionCall", "argumentList", "returnStatement", 
        "letDeclaration", "mutability", "assignment", "expression", "logicalOrExpr", 
        "logicalAndExpr", "equalityExpr", "relationalExpr", "additiveExpr", 
        "multiplicativeExpr", "unaryExpr", "primaryExpr", "literal",
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
            this.state = 54;
            this.statementList();
            this.state = 55;
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
            this.state = 58;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 57;
                this.statement();
                }
                }
                this.state = 60;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2281754580) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 7) !== 0));
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
            this.state = 83;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 62;
                this.letDeclaration();
                this.state = 63;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 65;
                this.assignment();
                this.state = 66;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 68;
                this.expression();
                this.state = 69;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 71;
                this.block();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 72;
                this.ifStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 73;
                this.whileLoop();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 74;
                this.loopStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 75;
                this.breakStatement();
                this.state = 76;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 78;
                this.continueStatement();
                this.state = 79;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 81;
                this.functionDeclaration();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 82;
                this.returnStatement();
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
            this.state = 85;
            this.match(SimpleLangParser.T__1);
            this.state = 86;
            this.statementList();
            this.state = 87;
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
            this.state = 89;
            this.match(SimpleLangParser.T__3);
            this.state = 90;
            this.expression();
            this.state = 91;
            this.block();
            this.state = 96;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                this.state = 92;
                this.match(SimpleLangParser.T__4);
                this.state = 93;
                this.ifStatement();
                }
                break;
            case 2:
                {
                this.state = 94;
                this.match(SimpleLangParser.T__4);
                this.state = 95;
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
            this.state = 98;
            this.match(SimpleLangParser.T__5);
            this.state = 99;
            this.expression();
            this.state = 100;
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
            this.state = 102;
            this.match(SimpleLangParser.T__6);
            this.state = 103;
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
            this.state = 105;
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
            this.state = 107;
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
    public functionDeclaration(): FunctionDeclarationContext {
        let localContext = new FunctionDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 18, SimpleLangParser.RULE_functionDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 109;
            this.match(SimpleLangParser.T__9);
            this.state = 110;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 111;
            this.match(SimpleLangParser.T__10);
            this.state = 113;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 112;
                this.parameterList();
                }
            }

            this.state = 115;
            this.match(SimpleLangParser.T__11);
            this.state = 116;
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
    public parameterList(): ParameterListContext {
        let localContext = new ParameterListContext(this.context, this.state);
        this.enterRule(localContext, 20, SimpleLangParser.RULE_parameterList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 118;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 123;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13) {
                {
                {
                this.state = 119;
                this.match(SimpleLangParser.T__12);
                this.state = 120;
                this.match(SimpleLangParser.IDENTIFIER);
                }
                }
                this.state = 125;
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
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 22, SimpleLangParser.RULE_functionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 126;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 127;
            this.match(SimpleLangParser.T__10);
            this.state = 129;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 15794177) !== 0)) {
                {
                this.state = 128;
                this.argumentList();
                }
            }

            this.state = 131;
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
    public argumentList(): ArgumentListContext {
        let localContext = new ArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 24, SimpleLangParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 133;
            this.expression();
            this.state = 138;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13) {
                {
                {
                this.state = 134;
                this.match(SimpleLangParser.T__12);
                this.state = 135;
                this.expression();
                }
                }
                this.state = 140;
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
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 26, SimpleLangParser.RULE_returnStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 141;
            this.match(SimpleLangParser.T__13);
            this.state = 143;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 15794177) !== 0)) {
                {
                this.state = 142;
                this.expression();
                }
            }

            this.state = 145;
            this.match(SimpleLangParser.T__0);
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
        this.enterRule(localContext, 28, SimpleLangParser.RULE_letDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 147;
            this.match(SimpleLangParser.T__14);
            this.state = 149;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 148;
                this.mutability();
                }
            }

            this.state = 151;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 152;
            this.match(SimpleLangParser.T__15);
            this.state = 153;
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
        this.enterRule(localContext, 30, SimpleLangParser.RULE_mutability);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 155;
            this.match(SimpleLangParser.T__16);
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
        this.enterRule(localContext, 32, SimpleLangParser.RULE_assignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 157;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 158;
            this.match(SimpleLangParser.T__15);
            this.state = 159;
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
        this.enterRule(localContext, 34, SimpleLangParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 161;
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
        this.enterRule(localContext, 36, SimpleLangParser.RULE_logicalOrExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 163;
            this.logicalAndExpr();
            this.state = 168;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 18) {
                {
                {
                this.state = 164;
                this.match(SimpleLangParser.T__17);
                this.state = 165;
                this.logicalAndExpr();
                }
                }
                this.state = 170;
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
        this.enterRule(localContext, 38, SimpleLangParser.RULE_logicalAndExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 171;
            this.equalityExpr();
            this.state = 176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 19) {
                {
                {
                this.state = 172;
                this.match(SimpleLangParser.T__18);
                this.state = 173;
                this.equalityExpr();
                }
                }
                this.state = 178;
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
        this.enterRule(localContext, 40, SimpleLangParser.RULE_equalityExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 179;
            this.relationalExpr();
            this.state = 184;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20 || _la === 21) {
                {
                {
                this.state = 180;
                _la = this.tokenStream.LA(1);
                if(!(_la === 20 || _la === 21)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 181;
                this.relationalExpr();
                }
                }
                this.state = 186;
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
        this.enterRule(localContext, 42, SimpleLangParser.RULE_relationalExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 187;
            this.additiveExpr();
            this.state = 192;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0)) {
                {
                {
                this.state = 188;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 189;
                this.additiveExpr();
                }
                }
                this.state = 194;
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
        this.enterRule(localContext, 44, SimpleLangParser.RULE_additiveExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 195;
            this.multiplicativeExpr();
            this.state = 200;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26 || _la === 27) {
                {
                {
                this.state = 196;
                _la = this.tokenStream.LA(1);
                if(!(_la === 26 || _la === 27)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 197;
                this.multiplicativeExpr();
                }
                }
                this.state = 202;
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
        this.enterRule(localContext, 46, SimpleLangParser.RULE_multiplicativeExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 203;
            this.unaryExpr();
            this.state = 208;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1879048192) !== 0)) {
                {
                {
                this.state = 204;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1879048192) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 205;
                this.unaryExpr();
                }
                }
                this.state = 210;
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
        this.enterRule(localContext, 48, SimpleLangParser.RULE_unaryExpr);
        let _la: number;
        try {
            this.state = 214;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__26:
            case SimpleLangParser.T__30:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 211;
                _la = this.tokenStream.LA(1);
                if(!(_la === 27 || _la === 31)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 212;
                this.unaryExpr();
                }
                break;
            case SimpleLangParser.T__10:
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 213;
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
        this.enterRule(localContext, 50, SimpleLangParser.RULE_primaryExpr);
        try {
            this.state = 223;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 216;
                this.literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 217;
                this.match(SimpleLangParser.IDENTIFIER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 218;
                this.match(SimpleLangParser.T__10);
                this.state = 219;
                this.expression();
                this.state = 220;
                this.match(SimpleLangParser.T__11);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 222;
                this.functionCall();
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
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 52, SimpleLangParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 225;
            _la = this.tokenStream.LA(1);
            if(!(_la === 32 || _la === 33)) {
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
        4,1,35,228,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        1,0,1,0,1,0,1,1,4,1,59,8,1,11,1,12,1,60,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,
        84,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,97,8,4,1,
        5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,3,9,114,
        8,9,1,9,1,9,1,9,1,10,1,10,1,10,5,10,122,8,10,10,10,12,10,125,9,10,
        1,11,1,11,1,11,3,11,130,8,11,1,11,1,11,1,12,1,12,1,12,5,12,137,8,
        12,10,12,12,12,140,9,12,1,13,1,13,3,13,144,8,13,1,13,1,13,1,14,1,
        14,3,14,150,8,14,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,
        16,1,17,1,17,1,18,1,18,1,18,5,18,167,8,18,10,18,12,18,170,9,18,1,
        19,1,19,1,19,5,19,175,8,19,10,19,12,19,178,9,19,1,20,1,20,1,20,5,
        20,183,8,20,10,20,12,20,186,9,20,1,21,1,21,1,21,5,21,191,8,21,10,
        21,12,21,194,9,21,1,22,1,22,1,22,5,22,199,8,22,10,22,12,22,202,9,
        22,1,23,1,23,1,23,5,23,207,8,23,10,23,12,23,210,9,23,1,24,1,24,1,
        24,3,24,215,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,224,8,25,
        1,26,1,26,1,26,0,0,27,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
        32,34,36,38,40,42,44,46,48,50,52,0,6,1,0,20,21,1,0,22,25,1,0,26,
        27,1,0,28,30,2,0,27,27,31,31,1,0,32,33,229,0,54,1,0,0,0,2,58,1,0,
        0,0,4,83,1,0,0,0,6,85,1,0,0,0,8,89,1,0,0,0,10,98,1,0,0,0,12,102,
        1,0,0,0,14,105,1,0,0,0,16,107,1,0,0,0,18,109,1,0,0,0,20,118,1,0,
        0,0,22,126,1,0,0,0,24,133,1,0,0,0,26,141,1,0,0,0,28,147,1,0,0,0,
        30,155,1,0,0,0,32,157,1,0,0,0,34,161,1,0,0,0,36,163,1,0,0,0,38,171,
        1,0,0,0,40,179,1,0,0,0,42,187,1,0,0,0,44,195,1,0,0,0,46,203,1,0,
        0,0,48,214,1,0,0,0,50,223,1,0,0,0,52,225,1,0,0,0,54,55,3,2,1,0,55,
        56,5,0,0,1,56,1,1,0,0,0,57,59,3,4,2,0,58,57,1,0,0,0,59,60,1,0,0,
        0,60,58,1,0,0,0,60,61,1,0,0,0,61,3,1,0,0,0,62,63,3,28,14,0,63,64,
        5,1,0,0,64,84,1,0,0,0,65,66,3,32,16,0,66,67,5,1,0,0,67,84,1,0,0,
        0,68,69,3,34,17,0,69,70,5,1,0,0,70,84,1,0,0,0,71,84,3,6,3,0,72,84,
        3,8,4,0,73,84,3,10,5,0,74,84,3,12,6,0,75,76,3,14,7,0,76,77,5,1,0,
        0,77,84,1,0,0,0,78,79,3,16,8,0,79,80,5,1,0,0,80,84,1,0,0,0,81,84,
        3,18,9,0,82,84,3,26,13,0,83,62,1,0,0,0,83,65,1,0,0,0,83,68,1,0,0,
        0,83,71,1,0,0,0,83,72,1,0,0,0,83,73,1,0,0,0,83,74,1,0,0,0,83,75,
        1,0,0,0,83,78,1,0,0,0,83,81,1,0,0,0,83,82,1,0,0,0,84,5,1,0,0,0,85,
        86,5,2,0,0,86,87,3,2,1,0,87,88,5,3,0,0,88,7,1,0,0,0,89,90,5,4,0,
        0,90,91,3,34,17,0,91,96,3,6,3,0,92,93,5,5,0,0,93,97,3,8,4,0,94,95,
        5,5,0,0,95,97,3,6,3,0,96,92,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,
        97,9,1,0,0,0,98,99,5,6,0,0,99,100,3,34,17,0,100,101,3,6,3,0,101,
        11,1,0,0,0,102,103,5,7,0,0,103,104,3,6,3,0,104,13,1,0,0,0,105,106,
        5,8,0,0,106,15,1,0,0,0,107,108,5,9,0,0,108,17,1,0,0,0,109,110,5,
        10,0,0,110,111,5,34,0,0,111,113,5,11,0,0,112,114,3,20,10,0,113,112,
        1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,0,115,116,5,12,0,0,116,117,
        3,6,3,0,117,19,1,0,0,0,118,123,5,34,0,0,119,120,5,13,0,0,120,122,
        5,34,0,0,121,119,1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,
        1,0,0,0,124,21,1,0,0,0,125,123,1,0,0,0,126,127,5,34,0,0,127,129,
        5,11,0,0,128,130,3,24,12,0,129,128,1,0,0,0,129,130,1,0,0,0,130,131,
        1,0,0,0,131,132,5,12,0,0,132,23,1,0,0,0,133,138,3,34,17,0,134,135,
        5,13,0,0,135,137,3,34,17,0,136,134,1,0,0,0,137,140,1,0,0,0,138,136,
        1,0,0,0,138,139,1,0,0,0,139,25,1,0,0,0,140,138,1,0,0,0,141,143,5,
        14,0,0,142,144,3,34,17,0,143,142,1,0,0,0,143,144,1,0,0,0,144,145,
        1,0,0,0,145,146,5,1,0,0,146,27,1,0,0,0,147,149,5,15,0,0,148,150,
        3,30,15,0,149,148,1,0,0,0,149,150,1,0,0,0,150,151,1,0,0,0,151,152,
        5,34,0,0,152,153,5,16,0,0,153,154,3,34,17,0,154,29,1,0,0,0,155,156,
        5,17,0,0,156,31,1,0,0,0,157,158,5,34,0,0,158,159,5,16,0,0,159,160,
        3,34,17,0,160,33,1,0,0,0,161,162,3,36,18,0,162,35,1,0,0,0,163,168,
        3,38,19,0,164,165,5,18,0,0,165,167,3,38,19,0,166,164,1,0,0,0,167,
        170,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,37,1,0,0,0,170,168,
        1,0,0,0,171,176,3,40,20,0,172,173,5,19,0,0,173,175,3,40,20,0,174,
        172,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,
        39,1,0,0,0,178,176,1,0,0,0,179,184,3,42,21,0,180,181,7,0,0,0,181,
        183,3,42,21,0,182,180,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,184,
        185,1,0,0,0,185,41,1,0,0,0,186,184,1,0,0,0,187,192,3,44,22,0,188,
        189,7,1,0,0,189,191,3,44,22,0,190,188,1,0,0,0,191,194,1,0,0,0,192,
        190,1,0,0,0,192,193,1,0,0,0,193,43,1,0,0,0,194,192,1,0,0,0,195,200,
        3,46,23,0,196,197,7,2,0,0,197,199,3,46,23,0,198,196,1,0,0,0,199,
        202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,45,1,0,0,0,202,200,
        1,0,0,0,203,208,3,48,24,0,204,205,7,3,0,0,205,207,3,48,24,0,206,
        204,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,
        47,1,0,0,0,210,208,1,0,0,0,211,212,7,4,0,0,212,215,3,48,24,0,213,
        215,3,50,25,0,214,211,1,0,0,0,214,213,1,0,0,0,215,49,1,0,0,0,216,
        224,3,52,26,0,217,224,5,34,0,0,218,219,5,11,0,0,219,220,3,34,17,
        0,220,221,5,12,0,0,221,224,1,0,0,0,222,224,3,22,11,0,223,216,1,0,
        0,0,223,217,1,0,0,0,223,218,1,0,0,0,223,222,1,0,0,0,224,51,1,0,0,
        0,225,226,7,5,0,0,226,53,1,0,0,0,17,60,83,96,113,123,129,138,143,
        149,168,176,184,192,200,208,214,223
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
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public returnStatement(): ReturnStatementContext | null {
        return this.getRuleContext(0, ReturnStatementContext);
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


export class FunctionDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_functionDeclaration;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunctionDeclaration) {
             listener.enterFunctionDeclaration(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionDeclaration) {
             listener.exitFunctionDeclaration(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SimpleLangParser.IDENTIFIER);
    	} else {
    		return this.getToken(SimpleLangParser.IDENTIFIER, i);
    	}
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_parameterList;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterParameterList) {
             listener.enterParameterList(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitParameterList) {
             listener.exitParameterList(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_functionCall;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_argumentList;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterArgumentList) {
             listener.enterArgumentList(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitArgumentList) {
             listener.exitArgumentList(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_returnStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterReturnStatement) {
             listener.enterReturnStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitReturnStatement) {
             listener.exitReturnStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
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
    public functionCall(): FunctionCallContext | null {
        return this.getRuleContext(0, FunctionCallContext);
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
