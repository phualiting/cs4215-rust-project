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
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly INT = 39;
    public static readonly BOOL = 40;
    public static readonly STRING = 41;
    public static readonly IDENTIFIER = 42;
    public static readonly WS = 43;
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
    public static readonly RULE_typedParameterList = 10;
    public static readonly RULE_typedParameter = 11;
    public static readonly RULE_typeAnnotation = 12;
    public static readonly RULE_functionCall = 13;
    public static readonly RULE_argumentList = 14;
    public static readonly RULE_returnStatement = 15;
    public static readonly RULE_returnType = 16;
    public static readonly RULE_letDeclaration = 17;
    public static readonly RULE_mutability = 18;
    public static readonly RULE_assignment = 19;
    public static readonly RULE_expression = 20;
    public static readonly RULE_logicalOrExpr = 21;
    public static readonly RULE_logicalAndExpr = 22;
    public static readonly RULE_equalityExpr = 23;
    public static readonly RULE_relationalExpr = 24;
    public static readonly RULE_additiveExpr = 25;
    public static readonly RULE_multiplicativeExpr = 26;
    public static readonly RULE_unaryExpr = 27;
    public static readonly RULE_borrowExpression = 28;
    public static readonly RULE_derefExpression = 29;
    public static readonly RULE_primaryExpr = 30;
    public static readonly RULE_literal = 31;

    public static readonly literalNames = [
        null, "';'", "'{'", "'}'", "'if'", "'else'", "'while'", "'loop'", 
        "'break'", "'continue'", "'fn'", "'('", "')'", "','", "':'", "'f64'", 
        "'bool'", "'void'", "'string'", "'return'", "'->'", "'let'", "'='", 
        "'mut'", "'||'", "'&&'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
        "'+'", "'-'", "'*'", "'/'", "'%'", "'!'", "'&'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "INT", "BOOL", "STRING", "IDENTIFIER", 
        "WS"
    ];
    public static readonly ruleNames = [
        "prog", "statementList", "statement", "block", "ifStatement", "whileLoop", 
        "loopStatement", "breakStatement", "continueStatement", "functionDeclaration", 
        "typedParameterList", "typedParameter", "typeAnnotation", "functionCall", 
        "argumentList", "returnStatement", "returnType", "letDeclaration", 
        "mutability", "assignment", "expression", "logicalOrExpr", "logicalAndExpr", 
        "equalityExpr", "relationalExpr", "additiveExpr", "multiplicativeExpr", 
        "unaryExpr", "borrowExpression", "derefExpression", "primaryExpr", 
        "literal",
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
            this.state = 64;
            this.statementList();
            this.state = 65;
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
            this.state = 68;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 67;
                this.statement();
                }
                }
                this.state = 70;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2625492) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1011) !== 0));
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
            this.state = 93;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 72;
                this.letDeclaration();
                this.state = 73;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 75;
                this.assignment();
                this.state = 76;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 78;
                this.expression();
                this.state = 79;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 81;
                this.block();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 82;
                this.ifStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 83;
                this.whileLoop();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 84;
                this.loopStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 85;
                this.breakStatement();
                this.state = 86;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 88;
                this.continueStatement();
                this.state = 89;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 91;
                this.functionDeclaration();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 92;
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
            this.state = 95;
            this.match(SimpleLangParser.T__1);
            this.state = 96;
            this.statementList();
            this.state = 97;
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
            this.state = 99;
            this.match(SimpleLangParser.T__3);
            this.state = 100;
            this.expression();
            this.state = 101;
            this.block();
            this.state = 106;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                this.state = 102;
                this.match(SimpleLangParser.T__4);
                this.state = 103;
                this.ifStatement();
                }
                break;
            case 2:
                {
                this.state = 104;
                this.match(SimpleLangParser.T__4);
                this.state = 105;
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
            this.state = 108;
            this.match(SimpleLangParser.T__5);
            this.state = 109;
            this.expression();
            this.state = 110;
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
            this.state = 112;
            this.match(SimpleLangParser.T__6);
            this.state = 113;
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
            this.state = 115;
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
            this.state = 117;
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
            this.state = 140;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 119;
                this.match(SimpleLangParser.T__9);
                this.state = 120;
                this.match(SimpleLangParser.IDENTIFIER);
                this.state = 121;
                this.match(SimpleLangParser.T__10);
                this.state = 123;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 42) {
                    {
                    this.state = 122;
                    this.typedParameterList();
                    }
                }

                this.state = 125;
                this.match(SimpleLangParser.T__11);
                this.state = 127;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 126;
                    this.returnType();
                    }
                }

                this.state = 129;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 130;
                this.match(SimpleLangParser.T__9);
                this.state = 131;
                this.match(SimpleLangParser.T__10);
                this.state = 133;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 42) {
                    {
                    this.state = 132;
                    this.typedParameterList();
                    }
                }

                this.state = 135;
                this.match(SimpleLangParser.T__11);
                this.state = 137;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 136;
                    this.returnType();
                    }
                }

                this.state = 139;
                this.block();
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
    public typedParameterList(): TypedParameterListContext {
        let localContext = new TypedParameterListContext(this.context, this.state);
        this.enterRule(localContext, 20, SimpleLangParser.RULE_typedParameterList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 142;
            this.typedParameter();
            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13) {
                {
                {
                this.state = 143;
                this.match(SimpleLangParser.T__12);
                this.state = 144;
                this.typedParameter();
                }
                }
                this.state = 149;
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
    public typedParameter(): TypedParameterContext {
        let localContext = new TypedParameterContext(this.context, this.state);
        this.enterRule(localContext, 22, SimpleLangParser.RULE_typedParameter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 150;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 151;
            this.match(SimpleLangParser.T__13);
            this.state = 152;
            this.typeAnnotation();
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
    public typeAnnotation(): TypeAnnotationContext {
        let localContext = new TypeAnnotationContext(this.context, this.state);
        this.enterRule(localContext, 24, SimpleLangParser.RULE_typeAnnotation);
        try {
            this.state = 160;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__14:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 154;
                this.match(SimpleLangParser.T__14);
                }
                break;
            case SimpleLangParser.T__15:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 155;
                this.match(SimpleLangParser.T__15);
                }
                break;
            case SimpleLangParser.T__16:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 156;
                this.match(SimpleLangParser.T__16);
                }
                break;
            case SimpleLangParser.T__17:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 157;
                this.match(SimpleLangParser.T__17);
                }
                break;
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 158;
                localContext._IDENTIFIER = this.match(SimpleLangParser.IDENTIFIER);
                 throw new Error("Invalid type specified: " + (localContext._IDENTIFIER?.text ?? '')); 
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
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 26, SimpleLangParser.RULE_functionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 162;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 163;
            this.match(SimpleLangParser.T__10);
            this.state = 165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 4240441345) !== 0)) {
                {
                this.state = 164;
                this.argumentList();
                }
            }

            this.state = 167;
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
        this.enterRule(localContext, 28, SimpleLangParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 169;
            this.expression();
            this.state = 174;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13) {
                {
                {
                this.state = 170;
                this.match(SimpleLangParser.T__12);
                this.state = 171;
                this.expression();
                }
                }
                this.state = 176;
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
        this.enterRule(localContext, 30, SimpleLangParser.RULE_returnStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 177;
            this.match(SimpleLangParser.T__18);
            this.state = 179;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 4240441345) !== 0)) {
                {
                this.state = 178;
                this.expression();
                }
            }

            this.state = 181;
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
    public returnType(): ReturnTypeContext {
        let localContext = new ReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 32, SimpleLangParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 183;
            this.match(SimpleLangParser.T__19);
            this.state = 184;
            this.typeAnnotation();
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
        this.enterRule(localContext, 34, SimpleLangParser.RULE_letDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 186;
            this.match(SimpleLangParser.T__20);
            this.state = 188;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 187;
                this.mutability();
                }
            }

            this.state = 190;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 192;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & 134217743) !== 0)) {
                {
                this.state = 191;
                this.typeAnnotation();
                }
            }

            this.state = 194;
            this.match(SimpleLangParser.T__21);
            this.state = 195;
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
        this.enterRule(localContext, 36, SimpleLangParser.RULE_mutability);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 197;
            this.match(SimpleLangParser.T__22);
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
        this.enterRule(localContext, 38, SimpleLangParser.RULE_assignment);
        try {
            this.state = 206;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 199;
                this.match(SimpleLangParser.IDENTIFIER);
                this.state = 200;
                this.match(SimpleLangParser.T__21);
                this.state = 201;
                this.expression();
                }
                break;
            case SimpleLangParser.T__33:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 202;
                this.derefExpression();
                this.state = 203;
                this.match(SimpleLangParser.T__21);
                this.state = 204;
                this.expression();
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
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 40, SimpleLangParser.RULE_expression);
        try {
            this.state = 211;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 208;
                this.derefExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 209;
                this.borrowExpression();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 210;
                this.logicalOrExpr();
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
    public logicalOrExpr(): LogicalOrExprContext {
        let localContext = new LogicalOrExprContext(this.context, this.state);
        this.enterRule(localContext, 42, SimpleLangParser.RULE_logicalOrExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 213;
            this.logicalAndExpr();
            this.state = 218;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24) {
                {
                {
                this.state = 214;
                this.match(SimpleLangParser.T__23);
                this.state = 215;
                this.logicalAndExpr();
                }
                }
                this.state = 220;
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
        this.enterRule(localContext, 44, SimpleLangParser.RULE_logicalAndExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 221;
            this.equalityExpr();
            this.state = 226;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25) {
                {
                {
                this.state = 222;
                this.match(SimpleLangParser.T__24);
                this.state = 223;
                this.equalityExpr();
                }
                }
                this.state = 228;
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
        this.enterRule(localContext, 46, SimpleLangParser.RULE_equalityExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 229;
            this.relationalExpr();
            this.state = 234;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26 || _la === 27) {
                {
                {
                this.state = 230;
                _la = this.tokenStream.LA(1);
                if(!(_la === 26 || _la === 27)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 231;
                this.relationalExpr();
                }
                }
                this.state = 236;
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
        this.enterRule(localContext, 48, SimpleLangParser.RULE_relationalExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 237;
            this.additiveExpr();
            this.state = 242;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4026531840) !== 0)) {
                {
                {
                this.state = 238;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4026531840) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 239;
                this.additiveExpr();
                }
                }
                this.state = 244;
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
        this.enterRule(localContext, 50, SimpleLangParser.RULE_additiveExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 245;
            this.multiplicativeExpr();
            this.state = 250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 32 || _la === 33) {
                {
                {
                this.state = 246;
                _la = this.tokenStream.LA(1);
                if(!(_la === 32 || _la === 33)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 247;
                this.multiplicativeExpr();
                }
                }
                this.state = 252;
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
        this.enterRule(localContext, 52, SimpleLangParser.RULE_multiplicativeExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 253;
            this.unaryExpr();
            this.state = 258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 7) !== 0)) {
                {
                {
                this.state = 254;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 7) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 255;
                this.unaryExpr();
                }
                }
                this.state = 260;
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
        this.enterRule(localContext, 54, SimpleLangParser.RULE_unaryExpr);
        let _la: number;
        try {
            this.state = 266;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__32:
            case SimpleLangParser.T__36:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 261;
                _la = this.tokenStream.LA(1);
                if(!(_la === 33 || _la === 37)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 262;
                this.unaryExpr();
                }
                break;
            case SimpleLangParser.T__33:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 263;
                this.derefExpression();
                }
                break;
            case SimpleLangParser.T__37:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 264;
                this.borrowExpression();
                }
                break;
            case SimpleLangParser.T__10:
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
            case SimpleLangParser.STRING:
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 265;
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
    public borrowExpression(): BorrowExpressionContext {
        let localContext = new BorrowExpressionContext(this.context, this.state);
        this.enterRule(localContext, 56, SimpleLangParser.RULE_borrowExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 268;
            this.match(SimpleLangParser.T__37);
            this.state = 270;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 269;
                localContext._mutKeyword = this.match(SimpleLangParser.T__22);
                }
            }

            this.state = 272;
            localContext._target = this.match(SimpleLangParser.IDENTIFIER);
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
    public derefExpression(): DerefExpressionContext {
        let localContext = new DerefExpressionContext(this.context, this.state);
        this.enterRule(localContext, 58, SimpleLangParser.RULE_derefExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 274;
            this.match(SimpleLangParser.T__33);
            this.state = 275;
            localContext._target = this.match(SimpleLangParser.IDENTIFIER);
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
        this.enterRule(localContext, 60, SimpleLangParser.RULE_primaryExpr);
        try {
            this.state = 284;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 277;
                this.literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 278;
                this.match(SimpleLangParser.IDENTIFIER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 279;
                this.match(SimpleLangParser.T__10);
                this.state = 280;
                this.expression();
                this.state = 281;
                this.match(SimpleLangParser.T__11);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 283;
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
        this.enterRule(localContext, 62, SimpleLangParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 286;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 7) !== 0))) {
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
        4,1,43,289,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,1,0,1,0,1,
        1,4,1,69,8,1,11,1,12,1,70,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,94,8,2,1,3,1,3,
        1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,107,8,4,1,5,1,5,1,5,1,5,
        1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,3,9,124,8,9,1,9,1,9,
        3,9,128,8,9,1,9,1,9,1,9,1,9,3,9,134,8,9,1,9,1,9,3,9,138,8,9,1,9,
        3,9,141,8,9,1,10,1,10,1,10,5,10,146,8,10,10,10,12,10,149,9,10,1,
        11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,3,12,161,8,12,1,
        13,1,13,1,13,3,13,166,8,13,1,13,1,13,1,14,1,14,1,14,5,14,173,8,14,
        10,14,12,14,176,9,14,1,15,1,15,3,15,180,8,15,1,15,1,15,1,16,1,16,
        1,16,1,17,1,17,3,17,189,8,17,1,17,1,17,3,17,193,8,17,1,17,1,17,1,
        17,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,207,8,19,1,
        20,1,20,1,20,3,20,212,8,20,1,21,1,21,1,21,5,21,217,8,21,10,21,12,
        21,220,9,21,1,22,1,22,1,22,5,22,225,8,22,10,22,12,22,228,9,22,1,
        23,1,23,1,23,5,23,233,8,23,10,23,12,23,236,9,23,1,24,1,24,1,24,5,
        24,241,8,24,10,24,12,24,244,9,24,1,25,1,25,1,25,5,25,249,8,25,10,
        25,12,25,252,9,25,1,26,1,26,1,26,5,26,257,8,26,10,26,12,26,260,9,
        26,1,27,1,27,1,27,1,27,1,27,3,27,267,8,27,1,28,1,28,3,28,271,8,28,
        1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,
        285,8,30,1,31,1,31,1,31,0,0,32,0,2,4,6,8,10,12,14,16,18,20,22,24,
        26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,0,6,1,0,
        26,27,1,0,28,31,1,0,32,33,1,0,34,36,2,0,33,33,37,37,1,0,39,41,300,
        0,64,1,0,0,0,2,68,1,0,0,0,4,93,1,0,0,0,6,95,1,0,0,0,8,99,1,0,0,0,
        10,108,1,0,0,0,12,112,1,0,0,0,14,115,1,0,0,0,16,117,1,0,0,0,18,140,
        1,0,0,0,20,142,1,0,0,0,22,150,1,0,0,0,24,160,1,0,0,0,26,162,1,0,
        0,0,28,169,1,0,0,0,30,177,1,0,0,0,32,183,1,0,0,0,34,186,1,0,0,0,
        36,197,1,0,0,0,38,206,1,0,0,0,40,211,1,0,0,0,42,213,1,0,0,0,44,221,
        1,0,0,0,46,229,1,0,0,0,48,237,1,0,0,0,50,245,1,0,0,0,52,253,1,0,
        0,0,54,266,1,0,0,0,56,268,1,0,0,0,58,274,1,0,0,0,60,284,1,0,0,0,
        62,286,1,0,0,0,64,65,3,2,1,0,65,66,5,0,0,1,66,1,1,0,0,0,67,69,3,
        4,2,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,
        3,1,0,0,0,72,73,3,34,17,0,73,74,5,1,0,0,74,94,1,0,0,0,75,76,3,38,
        19,0,76,77,5,1,0,0,77,94,1,0,0,0,78,79,3,40,20,0,79,80,5,1,0,0,80,
        94,1,0,0,0,81,94,3,6,3,0,82,94,3,8,4,0,83,94,3,10,5,0,84,94,3,12,
        6,0,85,86,3,14,7,0,86,87,5,1,0,0,87,94,1,0,0,0,88,89,3,16,8,0,89,
        90,5,1,0,0,90,94,1,0,0,0,91,94,3,18,9,0,92,94,3,30,15,0,93,72,1,
        0,0,0,93,75,1,0,0,0,93,78,1,0,0,0,93,81,1,0,0,0,93,82,1,0,0,0,93,
        83,1,0,0,0,93,84,1,0,0,0,93,85,1,0,0,0,93,88,1,0,0,0,93,91,1,0,0,
        0,93,92,1,0,0,0,94,5,1,0,0,0,95,96,5,2,0,0,96,97,3,2,1,0,97,98,5,
        3,0,0,98,7,1,0,0,0,99,100,5,4,0,0,100,101,3,40,20,0,101,106,3,6,
        3,0,102,103,5,5,0,0,103,107,3,8,4,0,104,105,5,5,0,0,105,107,3,6,
        3,0,106,102,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,9,1,0,0,
        0,108,109,5,6,0,0,109,110,3,40,20,0,110,111,3,6,3,0,111,11,1,0,0,
        0,112,113,5,7,0,0,113,114,3,6,3,0,114,13,1,0,0,0,115,116,5,8,0,0,
        116,15,1,0,0,0,117,118,5,9,0,0,118,17,1,0,0,0,119,120,5,10,0,0,120,
        121,5,42,0,0,121,123,5,11,0,0,122,124,3,20,10,0,123,122,1,0,0,0,
        123,124,1,0,0,0,124,125,1,0,0,0,125,127,5,12,0,0,126,128,3,32,16,
        0,127,126,1,0,0,0,127,128,1,0,0,0,128,129,1,0,0,0,129,141,3,6,3,
        0,130,131,5,10,0,0,131,133,5,11,0,0,132,134,3,20,10,0,133,132,1,
        0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,137,5,12,0,0,136,138,3,
        32,16,0,137,136,1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,0,139,141,
        3,6,3,0,140,119,1,0,0,0,140,130,1,0,0,0,141,19,1,0,0,0,142,147,3,
        22,11,0,143,144,5,13,0,0,144,146,3,22,11,0,145,143,1,0,0,0,146,149,
        1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,21,1,0,0,0,149,147,1,
        0,0,0,150,151,5,42,0,0,151,152,5,14,0,0,152,153,3,24,12,0,153,23,
        1,0,0,0,154,161,5,15,0,0,155,161,5,16,0,0,156,161,5,17,0,0,157,161,
        5,18,0,0,158,159,5,42,0,0,159,161,6,12,-1,0,160,154,1,0,0,0,160,
        155,1,0,0,0,160,156,1,0,0,0,160,157,1,0,0,0,160,158,1,0,0,0,161,
        25,1,0,0,0,162,163,5,42,0,0,163,165,5,11,0,0,164,166,3,28,14,0,165,
        164,1,0,0,0,165,166,1,0,0,0,166,167,1,0,0,0,167,168,5,12,0,0,168,
        27,1,0,0,0,169,174,3,40,20,0,170,171,5,13,0,0,171,173,3,40,20,0,
        172,170,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,
        175,29,1,0,0,0,176,174,1,0,0,0,177,179,5,19,0,0,178,180,3,40,20,
        0,179,178,1,0,0,0,179,180,1,0,0,0,180,181,1,0,0,0,181,182,5,1,0,
        0,182,31,1,0,0,0,183,184,5,20,0,0,184,185,3,24,12,0,185,33,1,0,0,
        0,186,188,5,21,0,0,187,189,3,36,18,0,188,187,1,0,0,0,188,189,1,0,
        0,0,189,190,1,0,0,0,190,192,5,42,0,0,191,193,3,24,12,0,192,191,1,
        0,0,0,192,193,1,0,0,0,193,194,1,0,0,0,194,195,5,22,0,0,195,196,3,
        40,20,0,196,35,1,0,0,0,197,198,5,23,0,0,198,37,1,0,0,0,199,200,5,
        42,0,0,200,201,5,22,0,0,201,207,3,40,20,0,202,203,3,58,29,0,203,
        204,5,22,0,0,204,205,3,40,20,0,205,207,1,0,0,0,206,199,1,0,0,0,206,
        202,1,0,0,0,207,39,1,0,0,0,208,212,3,58,29,0,209,212,3,56,28,0,210,
        212,3,42,21,0,211,208,1,0,0,0,211,209,1,0,0,0,211,210,1,0,0,0,212,
        41,1,0,0,0,213,218,3,44,22,0,214,215,5,24,0,0,215,217,3,44,22,0,
        216,214,1,0,0,0,217,220,1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,0,
        219,43,1,0,0,0,220,218,1,0,0,0,221,226,3,46,23,0,222,223,5,25,0,
        0,223,225,3,46,23,0,224,222,1,0,0,0,225,228,1,0,0,0,226,224,1,0,
        0,0,226,227,1,0,0,0,227,45,1,0,0,0,228,226,1,0,0,0,229,234,3,48,
        24,0,230,231,7,0,0,0,231,233,3,48,24,0,232,230,1,0,0,0,233,236,1,
        0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,47,1,0,0,0,236,234,1,0,
        0,0,237,242,3,50,25,0,238,239,7,1,0,0,239,241,3,50,25,0,240,238,
        1,0,0,0,241,244,1,0,0,0,242,240,1,0,0,0,242,243,1,0,0,0,243,49,1,
        0,0,0,244,242,1,0,0,0,245,250,3,52,26,0,246,247,7,2,0,0,247,249,
        3,52,26,0,248,246,1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,250,251,
        1,0,0,0,251,51,1,0,0,0,252,250,1,0,0,0,253,258,3,54,27,0,254,255,
        7,3,0,0,255,257,3,54,27,0,256,254,1,0,0,0,257,260,1,0,0,0,258,256,
        1,0,0,0,258,259,1,0,0,0,259,53,1,0,0,0,260,258,1,0,0,0,261,262,7,
        4,0,0,262,267,3,54,27,0,263,267,3,58,29,0,264,267,3,56,28,0,265,
        267,3,60,30,0,266,261,1,0,0,0,266,263,1,0,0,0,266,264,1,0,0,0,266,
        265,1,0,0,0,267,55,1,0,0,0,268,270,5,38,0,0,269,271,5,23,0,0,270,
        269,1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,273,5,42,0,0,273,
        57,1,0,0,0,274,275,5,34,0,0,275,276,5,42,0,0,276,59,1,0,0,0,277,
        285,3,62,31,0,278,285,5,42,0,0,279,280,5,11,0,0,280,281,3,40,20,
        0,281,282,5,12,0,0,282,285,1,0,0,0,283,285,3,26,13,0,284,277,1,0,
        0,0,284,278,1,0,0,0,284,279,1,0,0,0,284,283,1,0,0,0,285,61,1,0,0,
        0,286,287,7,5,0,0,287,63,1,0,0,0,26,70,93,106,123,127,133,137,140,
        147,160,165,174,179,188,192,206,211,218,226,234,242,250,258,266,
        270,284
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
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public typedParameterList(): TypedParameterListContext | null {
        return this.getRuleContext(0, TypedParameterListContext);
    }
    public returnType(): ReturnTypeContext | null {
        return this.getRuleContext(0, ReturnTypeContext);
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


export class TypedParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typedParameter(): TypedParameterContext[];
    public typedParameter(i: number): TypedParameterContext | null;
    public typedParameter(i?: number): TypedParameterContext[] | TypedParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypedParameterContext);
        }

        return this.getRuleContext(i, TypedParameterContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_typedParameterList;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterTypedParameterList) {
             listener.enterTypedParameterList(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitTypedParameterList) {
             listener.exitTypedParameterList(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitTypedParameterList) {
            return visitor.visitTypedParameterList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypedParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public typeAnnotation(): TypeAnnotationContext {
        return this.getRuleContext(0, TypeAnnotationContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_typedParameter;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterTypedParameter) {
             listener.enterTypedParameter(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitTypedParameter) {
             listener.exitTypedParameter(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitTypedParameter) {
            return visitor.visitTypedParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeAnnotationContext extends antlr.ParserRuleContext {
    public _IDENTIFIER?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_typeAnnotation;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterTypeAnnotation) {
             listener.enterTypeAnnotation(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitTypeAnnotation) {
             listener.exitTypeAnnotation(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitTypeAnnotation) {
            return visitor.visitTypeAnnotation(this);
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


export class ReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeAnnotation(): TypeAnnotationContext {
        return this.getRuleContext(0, TypeAnnotationContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_returnType;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterReturnType) {
             listener.enterReturnType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitReturnType) {
             listener.exitReturnType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this);
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
    public typeAnnotation(): TypeAnnotationContext | null {
        return this.getRuleContext(0, TypeAnnotationContext);
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
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public derefExpression(): DerefExpressionContext | null {
        return this.getRuleContext(0, DerefExpressionContext);
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
    public derefExpression(): DerefExpressionContext | null {
        return this.getRuleContext(0, DerefExpressionContext);
    }
    public borrowExpression(): BorrowExpressionContext | null {
        return this.getRuleContext(0, BorrowExpressionContext);
    }
    public logicalOrExpr(): LogicalOrExprContext | null {
        return this.getRuleContext(0, LogicalOrExprContext);
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
    public derefExpression(): DerefExpressionContext | null {
        return this.getRuleContext(0, DerefExpressionContext);
    }
    public borrowExpression(): BorrowExpressionContext | null {
        return this.getRuleContext(0, BorrowExpressionContext);
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


export class BorrowExpressionContext extends antlr.ParserRuleContext {
    public _mutKeyword?: Token | null;
    public _target?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_borrowExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBorrowExpression) {
             listener.enterBorrowExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBorrowExpression) {
             listener.exitBorrowExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBorrowExpression) {
            return visitor.visitBorrowExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DerefExpressionContext extends antlr.ParserRuleContext {
    public _target?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_derefExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterDerefExpression) {
             listener.enterDerefExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitDerefExpression) {
             listener.exitDerefExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitDerefExpression) {
            return visitor.visitDerefExpression(this);
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
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.STRING, 0);
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
