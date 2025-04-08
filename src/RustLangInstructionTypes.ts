export type Instruction =
    | { tag: 'LDC'; val: number | boolean }
    | { tag: 'BINOP'; op: '+' | '-' | '*' | '/' | '%' | '==' | '!=' | '<' | '<=' | '>' | '>=' | '&&' | '||' }
    | { tag: 'UNOP'; op: '-' | '!' }
    | { tag: 'ASSIGN'; pos: [number, number] }
    | { tag: 'LD'; pos: [number, number] }
    | { tag: 'POP' }
    | { tag: 'ENTER_SCOPE'; num: number }
    | { tag: 'EXIT_SCOPE' }
    | { tag: 'JOF'; addr: number }
    | { tag: 'GOTO'; addr: number }
    | { tag: 'BREAK' }
    | { tag: 'LDF'; arity: number; addr: number }
    | { tag: 'CALL'; arity: number }
    | { tag: 'RESET' } 
    | { tag: 'BORROW'; pos: [number, number]; mut: boolean }
    | { tag: 'DEREF'}
    | { tag: 'DEREF_ASSIGN' }
    | { tag: 'DONE' };
