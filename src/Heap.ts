const WORD_SIZE = 8;
const SIZE_OFFSET = 5;

export enum Tag {
    False = 0,
    True = 1,
    Number = 2,
    BlockFrame = 3,
    CallFrame = 4,
    Closure = 5,
    Frame = 6,
    Environment = 7,
    Pair = 8,
    Builtin = 9,
    String = 10,
    Unassigned = 11
}

export class Heap {
    private heap: DataView;
    private free: number;

    constructor(sizeBytes: number = 1_000_000) {
        if (sizeBytes % WORD_SIZE !== 0) {
            throw new Error("Heap size must be multiple of 8");
        }
        this.heap = new DataView(new ArrayBuffer(sizeBytes));
        this.free = 0;

        // Canonical values
        this.False = this.allocate(Tag.False, 1);
        this.True = this.allocate(Tag.True, 1);
        this.Unassigned = this.allocate(Tag.Unassigned, 1);
    }

    // Canonical values
    public False: number;
    public True: number;
    public Unassigned: number;

    public isUnassigned(addr: number): boolean {
        return this.getTag(addr) === Tag.Unassigned;
    }

    private allocate(tag: Tag, size: number): number {
        const addr = this.free;
        this.free += size;
        this.setUint8(addr, tag);
        this.setUint16Bits(addr, SIZE_OFFSET, size);
        return addr;
    }

    private setUint8(addr: number, val: number): void {
        this.heap.setUint8(addr * WORD_SIZE, val);
    }

    private setUint8Bits(addr: number, offset: number, val: number): void {
        this.heap.setUint8(addr * WORD_SIZE + offset, val);
    }

    private setUint16Bits(addr: number, offset: number, val: number): void {
        this.heap.setUint16(addr * WORD_SIZE + offset, val);
    }

    private getUint8(addr: number): number {
        return this.heap.getUint8(addr * WORD_SIZE);
    }

    private getUint16Bits(addr: number, offset: number): number {
        return this.heap.getUint16(addr * WORD_SIZE + offset);
    }

    allocateReference(targetAddr: number, isMutable: boolean): number {
        const addr = this.allocate(Tag.Pair, 2);
        this.setWord(addr + 1, targetAddr);          
        this.setWord(addr + 2, isMutable ? 1 : 0);  
        return addr;
    }
    
    getRefTarget(addr: number): number {
        return this.getWord(addr + 1);
    }
    
    isReference(addr: number): boolean {
        return this.getTag(addr) === Tag.Pair; 
    }
    
    getVarAddress(env: number, [frameIdx, valIdx]: [number, number]): number {
        const frame = this.getChild(env, frameIdx);
        return frame + 1 + valIdx;
    }

    public setWord(addr: number, value: number): void {
        this.heap.setFloat64(addr * WORD_SIZE, value);
    }

    public getWord(addr: number): number {
        return this.heap.getFloat64(addr * WORD_SIZE);
    }

    public getTag(addr: number): Tag {
        return this.getUint8(addr);
    }

    public getSize(addr: number): number {
        return this.getUint16Bits(addr, SIZE_OFFSET);
    }

    public getChild(addr: number, i: number): number {
        return this.getWord(addr + 1 + i);
    }

    public setChild(addr: number, i: number, val: number): void {
        this.setWord(addr + 1 + i, val);
    }

    public allocateNumber(n: number): number {
        const addr = this.allocate(Tag.Number, 2);
        this.setWord(addr + 1, n);
        return addr;
    }

    public addressToValue(val: number): any {
        const tag = this.getTag(val);
        switch (tag) {
            case Tag.True: return true;
            case Tag.False: return false;
            case Tag.Number: return this.getWord(val + 1);
            case Tag.Unassigned: return "<unasssigned>";
            default: return `<${Tag[tag]}>`;
        }
    }

    public valueToAddress(val: any): number {
        if (typeof val === 'boolean') return val ? this.True : this.False;
        if (typeof val === 'number') return this.allocateNumber(val);
        if (val === undefined) return this.Unassigned;
        if (val === "<unassigned>") return this.Unassigned;
        throw new Error(`Unsupported value: ${val}`);
    }

    // === Closures ===

    public allocateClosure(arity: number, pc: number, env: number): number {
        const addr = this.allocate(Tag.Closure, 2);
        this.setUint8Bits(addr, 1, arity);
        this.setUint16Bits(addr, 2, pc);
        this.setWord(addr + 1, env);
        return addr;
    }

    public getClosureArity(addr: number): number {
        return this.heap.getUint8(addr * WORD_SIZE + 1);
    }

    public getClosurePC(addr: number): number {
        return this.heap.getUint16(addr * WORD_SIZE + 2);
    }

    public getClosureEnv(addr: number): number {
        return this.getChild(addr, 0);
    }

    // === Block frames ===

    public allocateBlockFrame(env: number): number {
        const addr = this.allocate(Tag.BlockFrame, 2);
        this.setWord(addr + 1, env);
        return addr;
    }

    public getBlockFrameEnv(addr: number): number {
        return this.getChild(addr, 0);
    }

    public isBlockFrame(addr: number): boolean {
        return this.getTag(addr) === Tag.BlockFrame;
    }

    // === Call frames ===

    public allocateCallFrame(env: number, pc: number): number {
        const addr = this.allocate(Tag.CallFrame, 2);
        this.setUint16Bits(addr, 2, pc);
        this.setWord(addr + 1, env);
        return addr;
    }

    public getCallFrameEnv(addr: number): number {
        return this.getChild(addr, 0);
    }

    public getCallFramePC(addr: number): number {
        return this.getUint16Bits(addr, 2);
    }

    public isCallFrame(addr: number): boolean {
        return this.getTag(addr) === Tag.CallFrame;
    }

    // === Environment frames ===

    public allocateFrame(size: number): number {
        return this.allocate(Tag.Frame, size + 1);
    }

    public frameSet(frame: number, i: number, val: number): void {
        this.setChild(frame, i, val);
    }

    public frameGet(frame: number, i: number): number {
        return this.getChild(frame, i);
    }

    // === Environments ===

    public allocateEnvironment(numFrames: number): number {
        return this.allocate(Tag.Environment, numFrames + 1);
    }

    public emptyEnvironment(): number {
        return this.allocateEnvironment(0);
    }

    public getEnvValue(env: number, [frameIdx, valIdx]: [number, number]): number {
        const frame = this.getChild(env, frameIdx);
        return this.getChild(frame, valIdx);
    }

    public setEnvValue(env: number, [frameIdx, valIdx]: [number, number], value: number): void {
        const frame = this.getChild(env, frameIdx);
        this.setChild(frame, valIdx, value);
    }

    public extendEnvironment(env: number, newFrame: number): number {
        const oldSize = this.getSize(env);
        const newEnv = this.allocateEnvironment(oldSize);
        for (let i = 0; i < oldSize - 1; i++) {
            this.setChild(newEnv, i, this.getChild(env, i));
        }
        this.setChild(newEnv, oldSize - 1, newFrame);
        return newEnv;
    }
}
