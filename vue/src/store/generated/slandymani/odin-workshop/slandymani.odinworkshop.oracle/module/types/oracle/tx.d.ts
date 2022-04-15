import { Reader, Writer } from "protobufjs/minimal";
import { RandomNumbersCallData } from "../oracle/random_numbers";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "slandymani.odinworkshop.oracle";
export interface MsgRandomNumbersData {
    creator: string;
    oracleScriptId: number;
    sourceChannel: string;
    calldata: RandomNumbersCallData | undefined;
    askCount: number;
    minCount: number;
    feeLimit: Coin[];
    prepareGas: number;
    executeGas: number;
    clientId: string;
}
export interface MsgRandomNumbersDataResponse {
}
export declare const MsgRandomNumbersData: {
    encode(message: MsgRandomNumbersData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRandomNumbersData;
    fromJSON(object: any): MsgRandomNumbersData;
    toJSON(message: MsgRandomNumbersData): unknown;
    fromPartial(object: DeepPartial<MsgRandomNumbersData>): MsgRandomNumbersData;
};
export declare const MsgRandomNumbersDataResponse: {
    encode(_: MsgRandomNumbersDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRandomNumbersDataResponse;
    fromJSON(_: any): MsgRandomNumbersDataResponse;
    toJSON(_: MsgRandomNumbersDataResponse): unknown;
    fromPartial(_: DeepPartial<MsgRandomNumbersDataResponse>): MsgRandomNumbersDataResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    RandomNumbersData(request: MsgRandomNumbersData): Promise<MsgRandomNumbersDataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RandomNumbersData(request: MsgRandomNumbersData): Promise<MsgRandomNumbersDataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
