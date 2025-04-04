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

letDeclaration
    : 'let' mutability? IDENTIFIER '=' expression
    ;

mutability
    : 'mut'
    ;

assignment
    : IDENTIFIER '=' expression
    ;

expression
    : logicalOrExpr
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
    | primaryExpr
    ;

// Primary values, function calls, and parenthesis
primaryExpr
    : literal
    | IDENTIFIER
    | '(' expression ')'
    ;

literal
    : INT
    | BOOL
    ;

INT: [0-9]+;
BOOL: 'true' | 'false';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;
