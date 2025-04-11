grammar SimpleLang;

prog
    : statementList EOF
    ;

statementList
    : (statement)+
    ;

statement
    : letDeclaration ';'
    | assignment ';'
    | expression ';'
    | block
    | ifStatement
    | whileLoop
    | loopStatement
    | breakStatement ';'
    | continueStatement ';'
    | functionDeclaration
    | returnStatement
    ;

block
    : '{' statementList '}'
    ;

ifStatement
    : 'if' expression block ( 'else' ifStatement | 'else' block )?
    ;

whileLoop
    : 'while' expression block
    ;

loopStatement
    : 'loop' block
    ;

breakStatement
    : 'break'
    ;

continueStatement
    : 'continue'
    ;

functionDeclaration
    : 'fn' IDENTIFIER '(' typedParameterList? ')' returnType? block
    | 'fn' '(' typedParameterList? ')' returnType? block
    ;

typedParameterList
    : typedParameter (',' typedParameter)*
    ;

typedParameter
    : IDENTIFIER ':' typeAnnotation
    ;

typeAnnotation
    : 'i64'
    | 'bool'
    | 'void'
    | 'String'
    | IDENTIFIER { throw new Error("Invalid type specified: " + $IDENTIFIER.text); }
    ;

functionCall
    : IDENTIFIER '(' argumentList? ')'
    ;

argumentList
    : expression (',' expression)*
    ;

returnStatement
    : 'return' expression? ';'
    ;

returnType
    : '->' typeAnnotation
    ;

letDeclaration
    : 'let' mutability? IDENTIFIER typeAnnotation? '=' expression
    ;

mutability
    : 'mut'
    ;

assignment
    : IDENTIFIER '=' expression
    | derefExpression '=' expression
    ;

expression
    : derefExpression
    | borrowExpression
    | logicalOrExpr
    ;

logicalOrExpr
    : logicalAndExpr ('||' logicalAndExpr)*
    ;

logicalAndExpr
    : equalityExpr ('&&' equalityExpr)*
    ;

equalityExpr
    : relationalExpr (('==' | '!=') relationalExpr)*
    ;

relationalExpr
    : additiveExpr (('<' | '<=' | '>' | '>=') additiveExpr)*
    ;

additiveExpr
    : multiplicativeExpr (('+' | '-') multiplicativeExpr)*
    ;

multiplicativeExpr
    : unaryExpr (('*' | '/' | '%') unaryExpr)*
    ;

unaryExpr
    : ('-' | '!') unaryExpr
    | derefExpression
    | borrowExpression
    | primaryExpr
    ;

borrowExpression
    : '&' mutKeyword='mut'? target=IDENTIFIER
    ;

derefExpression
    : '*' target=IDENTIFIER
    ;

// Primary values, function calls, and parenthesis
primaryExpr
    : literal
    | IDENTIFIER
    | '(' expression ')'
    | functionCall
    ;

literal
    : INT
    | BOOL
    | STRING
    ;

INT: [0-9]+;
BOOL: 'true' | 'false';
STRING: '"' (~["\\] | '\\' .)* '"';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;
