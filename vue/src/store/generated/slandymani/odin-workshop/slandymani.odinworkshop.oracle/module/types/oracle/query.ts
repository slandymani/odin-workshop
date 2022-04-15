/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../oracle/params";
import { RandomNumbersResult } from "../oracle/random_numbers";

export const protobufPackage = "slandymani.odinworkshop.oracle";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

export interface QueryLastRandomNumbersIdRequest {}

export interface QueryLastRandomNumbersIdResponse {
  requestId: number;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryRandomNumbersRequest: object = { requestId: 0 };

export const QueryRandomNumbersRequest = {
  encode(
    message: QueryRandomNumbersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRandomNumbersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRandomNumbersRequest,
    } as QueryRandomNumbersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRandomNumbersRequest {
    const message = {
      ...baseQueryRandomNumbersRequest,
    } as QueryRandomNumbersRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = Number(object.requestId);
    } else {
      message.requestId = 0;
    }
    return message;
  },

  toJSON(message: QueryRandomNumbersRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRandomNumbersRequest>
  ): QueryRandomNumbersRequest {
    const message = {
      ...baseQueryRandomNumbersRequest,
    } as QueryRandomNumbersRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = 0;
    }
    return message;
  },
};

const baseQueryRandomNumbersResponse: object = {};

export const QueryRandomNumbersResponse = {
  encode(
    message: QueryRandomNumbersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.result !== undefined) {
      RandomNumbersResult.encode(
        message.result,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRandomNumbersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRandomNumbersResponse,
    } as QueryRandomNumbersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = RandomNumbersResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRandomNumbersResponse {
    const message = {
      ...baseQueryRandomNumbersResponse,
    } as QueryRandomNumbersResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = RandomNumbersResult.fromJSON(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },

  toJSON(message: QueryRandomNumbersResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = message.result
        ? RandomNumbersResult.toJSON(message.result)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRandomNumbersResponse>
  ): QueryRandomNumbersResponse {
    const message = {
      ...baseQueryRandomNumbersResponse,
    } as QueryRandomNumbersResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = RandomNumbersResult.fromPartial(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },
};

const baseQueryLastRandomNumbersIdRequest: object = {};

export const QueryLastRandomNumbersIdRequest = {
  encode(
    _: QueryLastRandomNumbersIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastRandomNumbersIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastRandomNumbersIdRequest,
    } as QueryLastRandomNumbersIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryLastRandomNumbersIdRequest {
    const message = {
      ...baseQueryLastRandomNumbersIdRequest,
    } as QueryLastRandomNumbersIdRequest;
    return message;
  },

  toJSON(_: QueryLastRandomNumbersIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryLastRandomNumbersIdRequest>
  ): QueryLastRandomNumbersIdRequest {
    const message = {
      ...baseQueryLastRandomNumbersIdRequest,
    } as QueryLastRandomNumbersIdRequest;
    return message;
  },
};

const baseQueryLastRandomNumbersIdResponse: object = { requestId: 0 };

export const QueryLastRandomNumbersIdResponse = {
  encode(
    message: QueryLastRandomNumbersIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastRandomNumbersIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastRandomNumbersIdResponse,
    } as QueryLastRandomNumbersIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastRandomNumbersIdResponse {
    const message = {
      ...baseQueryLastRandomNumbersIdResponse,
    } as QueryLastRandomNumbersIdResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = Number(object.requestId);
    } else {
      message.requestId = 0;
    }
    return message;
  },

  toJSON(message: QueryLastRandomNumbersIdResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastRandomNumbersIdResponse>
  ): QueryLastRandomNumbersIdResponse {
    const message = {
      ...baseQueryLastRandomNumbersIdResponse,
    } as QueryLastRandomNumbersIdResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = 0;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** RandomNumbersResult defines a rpc handler method for MsgRandomNumbersData. */
  RandomNumbersResult(
    request: QueryRandomNumbersRequest
  ): Promise<QueryRandomNumbersResponse>;
  /** LastRandomNumbersId query the last RandomNumbers result id */
  LastRandomNumbersId(
    request: QueryLastRandomNumbersIdRequest
  ): Promise<QueryLastRandomNumbersIdResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "slandymani.odinworkshop.oracle.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  RandomNumbersResult(
    request: QueryRandomNumbersRequest
  ): Promise<QueryRandomNumbersResponse> {
    const data = QueryRandomNumbersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "slandymani.odinworkshop.oracle.Query",
      "RandomNumbersResult",
      data
    );
    return promise.then((data) =>
      QueryRandomNumbersResponse.decode(new Reader(data))
    );
  }

  LastRandomNumbersId(
    request: QueryLastRandomNumbersIdRequest
  ): Promise<QueryLastRandomNumbersIdResponse> {
    const data = QueryLastRandomNumbersIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "slandymani.odinworkshop.oracle.Query",
      "LastRandomNumbersId",
      data
    );
    return promise.then((data) =>
      QueryLastRandomNumbersIdResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
