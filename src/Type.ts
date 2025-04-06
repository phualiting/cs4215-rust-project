export abstract class Type {
    abstract toString(): string;
    abstract compare(other: Type): boolean;
}

export class NumberType extends Type {
    private static instance: NumberType | null = null;
    private constructor() { super(); }

    static getInstance(): NumberType {
        return this.instance ?? (this.instance = new NumberType());
    }

    toString(): string { return "number"; }
    compare(other: Type): boolean { return other instanceof NumberType; }
}

export class BooleanType extends Type {
    private static instance: BooleanType | null = null;
    private constructor() { super(); }

    static getInstance(): BooleanType {
        return this.instance ?? (this.instance = new BooleanType());
    }

    toString(): string { return "boolean"; }
    compare(other: Type): boolean { return other instanceof BooleanType; }
}
  
export class VoidType extends Type {
    private static instance: VoidType | null = null;
    private constructor() { super(); }

    static getInstance(): VoidType {
        return this.instance ?? (this.instance = new VoidType());
    }

    toString(): string { return "()"; }
    compare(other: Type): boolean { return other instanceof VoidType; }
}

export const NUMBER_TYPE = NumberType.getInstance();
export const BOOLEAN_TYPE = BooleanType.getInstance();
export const VOID_TYPE = VoidType.getInstance();

export function stringToType(str: string): Type {
    switch (str) {
        case "f64":
            return NUMBER_TYPE;
        case "bool":
            return BOOLEAN_TYPE;
        case "void":
            return VOID_TYPE;
        default:
            throw new Error(`Unknown type ${str}`);
    }
}
