// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class SimpleLangLexer extends antlr.Lexer {
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

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

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

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", 
        "T__24", "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "INT", 
        "BOOL", "IDENTIFIER", "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, SimpleLangLexer._ATN, SimpleLangLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "SimpleLang.g4"; }

    public get literalNames(): (string | null)[] { return SimpleLangLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleLangLexer.symbolicNames; }
    public get ruleNames(): string[] { return SimpleLangLexer.ruleNames; }

    public get serializedATN(): number[] { return SimpleLangLexer._serializedATN; }

    public get channelNames(): string[] { return SimpleLangLexer.channelNames; }

    public get modeNames(): string[] { return SimpleLangLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,35,201,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,2,33,7,33,2,34,7,34,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,4,1,
        4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,
        7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,
        9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,
        13,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,
        17,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,22,1,
        22,1,22,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,
        28,1,28,1,29,1,29,1,30,1,30,1,31,4,31,173,8,31,11,31,12,31,174,1,
        32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,186,8,32,1,33,1,
        33,5,33,190,8,33,10,33,12,33,193,9,33,1,34,4,34,196,8,34,11,34,12,
        34,197,1,34,1,34,0,0,35,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,
        19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,
        41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,
        63,32,65,33,67,34,69,35,1,0,4,1,0,48,57,3,0,65,90,95,95,97,122,4,
        0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,204,0,1,1,0,0,0,
        0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
        1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
        1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
        1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,
        1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,
        1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,
        1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,1,71,1,0,0,0,3,73,
        1,0,0,0,5,75,1,0,0,0,7,77,1,0,0,0,9,80,1,0,0,0,11,85,1,0,0,0,13,
        91,1,0,0,0,15,96,1,0,0,0,17,102,1,0,0,0,19,111,1,0,0,0,21,114,1,
        0,0,0,23,116,1,0,0,0,25,118,1,0,0,0,27,120,1,0,0,0,29,127,1,0,0,
        0,31,131,1,0,0,0,33,133,1,0,0,0,35,137,1,0,0,0,37,140,1,0,0,0,39,
        143,1,0,0,0,41,146,1,0,0,0,43,149,1,0,0,0,45,151,1,0,0,0,47,154,
        1,0,0,0,49,156,1,0,0,0,51,159,1,0,0,0,53,161,1,0,0,0,55,163,1,0,
        0,0,57,165,1,0,0,0,59,167,1,0,0,0,61,169,1,0,0,0,63,172,1,0,0,0,
        65,185,1,0,0,0,67,187,1,0,0,0,69,195,1,0,0,0,71,72,5,59,0,0,72,2,
        1,0,0,0,73,74,5,123,0,0,74,4,1,0,0,0,75,76,5,125,0,0,76,6,1,0,0,
        0,77,78,5,105,0,0,78,79,5,102,0,0,79,8,1,0,0,0,80,81,5,101,0,0,81,
        82,5,108,0,0,82,83,5,115,0,0,83,84,5,101,0,0,84,10,1,0,0,0,85,86,
        5,119,0,0,86,87,5,104,0,0,87,88,5,105,0,0,88,89,5,108,0,0,89,90,
        5,101,0,0,90,12,1,0,0,0,91,92,5,108,0,0,92,93,5,111,0,0,93,94,5,
        111,0,0,94,95,5,112,0,0,95,14,1,0,0,0,96,97,5,98,0,0,97,98,5,114,
        0,0,98,99,5,101,0,0,99,100,5,97,0,0,100,101,5,107,0,0,101,16,1,0,
        0,0,102,103,5,99,0,0,103,104,5,111,0,0,104,105,5,110,0,0,105,106,
        5,116,0,0,106,107,5,105,0,0,107,108,5,110,0,0,108,109,5,117,0,0,
        109,110,5,101,0,0,110,18,1,0,0,0,111,112,5,102,0,0,112,113,5,110,
        0,0,113,20,1,0,0,0,114,115,5,40,0,0,115,22,1,0,0,0,116,117,5,41,
        0,0,117,24,1,0,0,0,118,119,5,44,0,0,119,26,1,0,0,0,120,121,5,114,
        0,0,121,122,5,101,0,0,122,123,5,116,0,0,123,124,5,117,0,0,124,125,
        5,114,0,0,125,126,5,110,0,0,126,28,1,0,0,0,127,128,5,108,0,0,128,
        129,5,101,0,0,129,130,5,116,0,0,130,30,1,0,0,0,131,132,5,61,0,0,
        132,32,1,0,0,0,133,134,5,109,0,0,134,135,5,117,0,0,135,136,5,116,
        0,0,136,34,1,0,0,0,137,138,5,124,0,0,138,139,5,124,0,0,139,36,1,
        0,0,0,140,141,5,38,0,0,141,142,5,38,0,0,142,38,1,0,0,0,143,144,5,
        61,0,0,144,145,5,61,0,0,145,40,1,0,0,0,146,147,5,33,0,0,147,148,
        5,61,0,0,148,42,1,0,0,0,149,150,5,60,0,0,150,44,1,0,0,0,151,152,
        5,60,0,0,152,153,5,61,0,0,153,46,1,0,0,0,154,155,5,62,0,0,155,48,
        1,0,0,0,156,157,5,62,0,0,157,158,5,61,0,0,158,50,1,0,0,0,159,160,
        5,43,0,0,160,52,1,0,0,0,161,162,5,45,0,0,162,54,1,0,0,0,163,164,
        5,42,0,0,164,56,1,0,0,0,165,166,5,47,0,0,166,58,1,0,0,0,167,168,
        5,37,0,0,168,60,1,0,0,0,169,170,5,33,0,0,170,62,1,0,0,0,171,173,
        7,0,0,0,172,171,1,0,0,0,173,174,1,0,0,0,174,172,1,0,0,0,174,175,
        1,0,0,0,175,64,1,0,0,0,176,177,5,116,0,0,177,178,5,114,0,0,178,179,
        5,117,0,0,179,186,5,101,0,0,180,181,5,102,0,0,181,182,5,97,0,0,182,
        183,5,108,0,0,183,184,5,115,0,0,184,186,5,101,0,0,185,176,1,0,0,
        0,185,180,1,0,0,0,186,66,1,0,0,0,187,191,7,1,0,0,188,190,7,2,0,0,
        189,188,1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,
        192,68,1,0,0,0,193,191,1,0,0,0,194,196,7,3,0,0,195,194,1,0,0,0,196,
        197,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,199,1,0,0,0,199,
        200,6,34,0,0,200,70,1,0,0,0,5,0,174,185,191,197,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleLangLexer.__ATN) {
            SimpleLangLexer.__ATN = new antlr.ATNDeserializer().deserialize(SimpleLangLexer._serializedATN);
        }

        return SimpleLangLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleLangLexer.literalNames, SimpleLangLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SimpleLangLexer.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleLangLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}