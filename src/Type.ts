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

export class StringType extends Type {
    private static instance: StringType | null = null;
    private constructor() { super(); }

    static getInstance(): StringType {
        return this.instance ?? (this.instance = new StringType());
    }

    toString(): string { return "string"; }
    compare(other: Type): boolean { return other instanceof StringType; }
}

export class ReferenceType extends Type {
    constructor(public readonly inner: Type) {
        super();
    }

    compare(other: Type): boolean {
        return other instanceof ReferenceType && this.inner.compare(other.inner);
    }

    toString(): string {
        return `&${this.inner.toString()}`;
    }

    static of(inner: Type): ReferenceType {
        return new ReferenceType(inner);
    }
}

export class FunctionType implements Type {
    constructor(public paramTypes: Type[], public returnType: Type) {}

    compare(other: Type): boolean {
        if (!(other instanceof FunctionType)) return false;
        if (this.paramTypes.length !== other.paramTypes.length) return false;
        for (let i = 0; i < this.paramTypes.length; i++) {
            if (!this.paramTypes[i].compare(other.paramTypes[i])) return false;
        }
        return this.returnType.compare(other.returnType);
    }

    toString(): string {
        const params = this.paramTypes.map(p => p.toString()).join(", ");
        return `fn(${params}) -> ${this.returnType.toString()}`;
    }
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
export const STRING_TYPE = StringType.getInstance();
export const VOID_TYPE = VoidType.getInstance();

export function stringToType(str: string): Type {
    switch (str) {
        case "i64":
            return NUMBER_TYPE;
        case "bool":
            return BOOLEAN_TYPE;
        case "String":
            return STRING_TYPE;
        case "void":
            return VOID_TYPE;
        default:
            throw new Error(`Unknown type ${str}`);
    }
}
