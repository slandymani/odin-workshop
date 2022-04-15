import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "slandymani.odinworkshop.oracle";
export interface RandomNumbersCallData {
    length: number;
}
export interface RandomNumbersResult {
    numbers: number[];
}
export declare const RandomNumbersCallData: {
    encode(message: RandomNumbersCallData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RandomNumbersCallData;
    fromJSON(object: any): RandomNumbersCallData;
    toJSON(message: RandomNumbersCallData): unknown;
    fromPartial(object: DeepPartial<RandomNumbersCallData>): RandomNumbersCallData;
};
export declare const RandomNumbersResult: {
    encode(message: RandomNumbersResult, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RandomNumbersResult;
    fromJSON(object: any): RandomNumbersResult;
    toJSON(message: RandomNumbersResult): unknown;
    fromPartial(object: DeepPartial<RandomNumbersResult>): RandomNumbersResult;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
