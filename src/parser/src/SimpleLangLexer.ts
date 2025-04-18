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
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly INT = 40;
    public static readonly BOOL = 41;
    public static readonly STRING = 42;
    public static readonly IDENTIFIER = 43;
    public static readonly WS = 44;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "';'", "'{'", "'}'", "'if'", "'else'", "'while'", "'loop'", 
        "'break'", "'continue'", "'fn'", "'('", "')'", "','", "':'", "'i64'", 
        "'bool'", "'void'", "'String'", "'return'", "'->'", "'println!'", 
        "'let'", "'='", "'mut'", "'||'", "'&&'", "'=='", "'!='", "'<'", 
        "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'!'", 
        "'&'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, "INT", "BOOL", "STRING", 
        "IDENTIFIER", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", 
        "T__24", "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", 
        "T__32", "T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "INT", 
        "BOOL", "STRING", "IDENTIFIER", "WS",
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
        4,0,44,267,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
        39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,1,0,1,0,1,1,1,1,
        1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,
        1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,
        13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,
        16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,
        18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
        20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,
        24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,
        29,1,29,1,29,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,
        34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,4,39,228,8,39,11,
        39,12,39,229,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,241,
        8,40,1,41,1,41,1,41,1,41,5,41,247,8,41,10,41,12,41,250,9,41,1,41,
        1,41,1,42,1,42,5,42,256,8,42,10,42,12,42,259,9,42,1,43,4,43,262,
        8,43,11,43,12,43,263,1,43,1,43,0,0,44,1,1,3,2,5,3,7,4,9,5,11,6,13,
        7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,
        37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,
        59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,
        81,41,83,42,85,43,87,44,1,0,5,1,0,48,57,2,0,34,34,92,92,3,0,65,90,
        95,95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,272,
        0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
        1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
        1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,
        1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,
        1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,
        1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,
        1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,
        1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,
        1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,1,89,1,0,0,0,3,91,
        1,0,0,0,5,93,1,0,0,0,7,95,1,0,0,0,9,98,1,0,0,0,11,103,1,0,0,0,13,
        109,1,0,0,0,15,114,1,0,0,0,17,120,1,0,0,0,19,129,1,0,0,0,21,132,
        1,0,0,0,23,134,1,0,0,0,25,136,1,0,0,0,27,138,1,0,0,0,29,140,1,0,
        0,0,31,144,1,0,0,0,33,149,1,0,0,0,35,154,1,0,0,0,37,161,1,0,0,0,
        39,168,1,0,0,0,41,171,1,0,0,0,43,180,1,0,0,0,45,184,1,0,0,0,47,186,
        1,0,0,0,49,190,1,0,0,0,51,193,1,0,0,0,53,196,1,0,0,0,55,199,1,0,
        0,0,57,202,1,0,0,0,59,204,1,0,0,0,61,207,1,0,0,0,63,209,1,0,0,0,
        65,212,1,0,0,0,67,214,1,0,0,0,69,216,1,0,0,0,71,218,1,0,0,0,73,220,
        1,0,0,0,75,222,1,0,0,0,77,224,1,0,0,0,79,227,1,0,0,0,81,240,1,0,
        0,0,83,242,1,0,0,0,85,253,1,0,0,0,87,261,1,0,0,0,89,90,5,59,0,0,
        90,2,1,0,0,0,91,92,5,123,0,0,92,4,1,0,0,0,93,94,5,125,0,0,94,6,1,
        0,0,0,95,96,5,105,0,0,96,97,5,102,0,0,97,8,1,0,0,0,98,99,5,101,0,
        0,99,100,5,108,0,0,100,101,5,115,0,0,101,102,5,101,0,0,102,10,1,
        0,0,0,103,104,5,119,0,0,104,105,5,104,0,0,105,106,5,105,0,0,106,
        107,5,108,0,0,107,108,5,101,0,0,108,12,1,0,0,0,109,110,5,108,0,0,
        110,111,5,111,0,0,111,112,5,111,0,0,112,113,5,112,0,0,113,14,1,0,
        0,0,114,115,5,98,0,0,115,116,5,114,0,0,116,117,5,101,0,0,117,118,
        5,97,0,0,118,119,5,107,0,0,119,16,1,0,0,0,120,121,5,99,0,0,121,122,
        5,111,0,0,122,123,5,110,0,0,123,124,5,116,0,0,124,125,5,105,0,0,
        125,126,5,110,0,0,126,127,5,117,0,0,127,128,5,101,0,0,128,18,1,0,
        0,0,129,130,5,102,0,0,130,131,5,110,0,0,131,20,1,0,0,0,132,133,5,
        40,0,0,133,22,1,0,0,0,134,135,5,41,0,0,135,24,1,0,0,0,136,137,5,
        44,0,0,137,26,1,0,0,0,138,139,5,58,0,0,139,28,1,0,0,0,140,141,5,
        105,0,0,141,142,5,54,0,0,142,143,5,52,0,0,143,30,1,0,0,0,144,145,
        5,98,0,0,145,146,5,111,0,0,146,147,5,111,0,0,147,148,5,108,0,0,148,
        32,1,0,0,0,149,150,5,118,0,0,150,151,5,111,0,0,151,152,5,105,0,0,
        152,153,5,100,0,0,153,34,1,0,0,0,154,155,5,83,0,0,155,156,5,116,
        0,0,156,157,5,114,0,0,157,158,5,105,0,0,158,159,5,110,0,0,159,160,
        5,103,0,0,160,36,1,0,0,0,161,162,5,114,0,0,162,163,5,101,0,0,163,
        164,5,116,0,0,164,165,5,117,0,0,165,166,5,114,0,0,166,167,5,110,
        0,0,167,38,1,0,0,0,168,169,5,45,0,0,169,170,5,62,0,0,170,40,1,0,
        0,0,171,172,5,112,0,0,172,173,5,114,0,0,173,174,5,105,0,0,174,175,
        5,110,0,0,175,176,5,116,0,0,176,177,5,108,0,0,177,178,5,110,0,0,
        178,179,5,33,0,0,179,42,1,0,0,0,180,181,5,108,0,0,181,182,5,101,
        0,0,182,183,5,116,0,0,183,44,1,0,0,0,184,185,5,61,0,0,185,46,1,0,
        0,0,186,187,5,109,0,0,187,188,5,117,0,0,188,189,5,116,0,0,189,48,
        1,0,0,0,190,191,5,124,0,0,191,192,5,124,0,0,192,50,1,0,0,0,193,194,
        5,38,0,0,194,195,5,38,0,0,195,52,1,0,0,0,196,197,5,61,0,0,197,198,
        5,61,0,0,198,54,1,0,0,0,199,200,5,33,0,0,200,201,5,61,0,0,201,56,
        1,0,0,0,202,203,5,60,0,0,203,58,1,0,0,0,204,205,5,60,0,0,205,206,
        5,61,0,0,206,60,1,0,0,0,207,208,5,62,0,0,208,62,1,0,0,0,209,210,
        5,62,0,0,210,211,5,61,0,0,211,64,1,0,0,0,212,213,5,43,0,0,213,66,
        1,0,0,0,214,215,5,45,0,0,215,68,1,0,0,0,216,217,5,42,0,0,217,70,
        1,0,0,0,218,219,5,47,0,0,219,72,1,0,0,0,220,221,5,37,0,0,221,74,
        1,0,0,0,222,223,5,33,0,0,223,76,1,0,0,0,224,225,5,38,0,0,225,78,
        1,0,0,0,226,228,7,0,0,0,227,226,1,0,0,0,228,229,1,0,0,0,229,227,
        1,0,0,0,229,230,1,0,0,0,230,80,1,0,0,0,231,232,5,116,0,0,232,233,
        5,114,0,0,233,234,5,117,0,0,234,241,5,101,0,0,235,236,5,102,0,0,
        236,237,5,97,0,0,237,238,5,108,0,0,238,239,5,115,0,0,239,241,5,101,
        0,0,240,231,1,0,0,0,240,235,1,0,0,0,241,82,1,0,0,0,242,248,5,34,
        0,0,243,247,8,1,0,0,244,245,5,92,0,0,245,247,9,0,0,0,246,243,1,0,
        0,0,246,244,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,248,249,1,0,
        0,0,249,251,1,0,0,0,250,248,1,0,0,0,251,252,5,34,0,0,252,84,1,0,
        0,0,253,257,7,2,0,0,254,256,7,3,0,0,255,254,1,0,0,0,256,259,1,0,
        0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,86,1,0,0,0,259,257,1,0,0,
        0,260,262,7,4,0,0,261,260,1,0,0,0,262,263,1,0,0,0,263,261,1,0,0,
        0,263,264,1,0,0,0,264,265,1,0,0,0,265,266,6,43,0,0,266,88,1,0,0,
        0,7,0,229,240,246,248,257,263,1,6,0,0
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