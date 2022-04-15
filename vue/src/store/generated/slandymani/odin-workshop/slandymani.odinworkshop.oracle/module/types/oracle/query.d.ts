import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../oracle/params";
import { RandomNumbersResult } from "../oracle/random_numbers";
export declare const protobufPackage = "slandymani.odinworkshop.oracle";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryRandomNumbersRequest {
    requestId: number;
}
export interface QueryRandomNumbersResponse {
    result: RandomNumbersResult | undefined;
}
export interface QueryLastRandomNumbersIdRequest {
}
export interface QueryLastRandomNumbersIdResponse {
    requestId: number;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryRandomNumbersRequest: {
    encode(message: QueryRandomNumbersRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryRandomNumbersRequest;
    fromJSON(object: any): QueryRandomNumbersRequest;
    toJSON(message: QueryRandomNumbersRequest): unknown;
    fromPartial(object: DeepPartial<QueryRandomNumbersRequest>): QueryRandomNumbersRequest;
};
export declare const QueryRandomNumbersResponse: {
    encode(message: QueryRandomNumbersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryRandomNumbersResponse;
    fromJSON(object: any): QueryRandomNumbersResponse;
    toJSON(message: QueryRandomNumbersResponse): unknown;
    fromPartial(object: DeepPartial<QueryRandomNumbersResponse>): QueryRandomNumbersResponse;
};
export declare const QueryLastRandomNumbersIdRequest: {
    encode(_: QueryLastRandomNumbersIdRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastRandomNumbersIdRequest;
    fromJSON(_: any): QueryLastRandomNumbersIdRequest;
    toJSON(_: QueryLastRandomNumbersIdRequest): unknown;
    fromPartial(_: DeepPartial<QueryLastRandomNumbersIdRequest>): QueryLastRandomNumbersIdRequest;
};
export declare const QueryLastRandomNumbersIdResponse: {
    encode(message: QueryLastRandomNumbersIdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastRandomNumbersIdResponse;
    fromJSON(object: any): QueryLastRandomNumbersIdResponse;
    toJSON(message: QueryLastRandomNumbersIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastRandomNumbersIdResponse>): QueryLastRandomNumbersIdResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** RandomNumbersResult defines a rpc handler method for MsgRandomNumbersData. */
    RandomNumbersResult(request: QueryRandomNumbersRequest): Promise<QueryRandomNumbersResponse>;
    /** LastRandomNumbersId query the last RandomNumbers result id */
    LastRandomNumbersId(request: QueryLastRandomNumbersIdRequest): Promise<QueryLastRandomNumbersIdResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    RandomNumbersResult(request: QueryRandomNumbersRequest): Promise<QueryRandomNumbersResponse>;
    LastRandomNumbersId(request: QueryLastRandomNumbersIdRequest): Promise<QueryLastRandomNumbersIdResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
