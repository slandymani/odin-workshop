/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "slandymani.odinworkshop.oracle";

export interface RandomNumbersCallData {
  length: number;
}

export interface RandomNumbersResult {
  numbers: number[];
}

const baseRandomNumbersCallData: object = { length: 0 };

export const RandomNumbersCallData = {
  encode(
    message: RandomNumbersCallData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.length !== 0) {
      writer.uint32(8).int64(message.length);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RandomNumbersCallData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRandomNumbersCallData } as RandomNumbersCallData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RandomNumbersCallData {
    const message = { ...baseRandomNumbersCallData } as RandomNumbersCallData;
    if (object.length !== undefined && object.length !== null) {
      message.length = Number(object.length);
    } else {
      message.length = 0;
    }
    return message;
  },

  toJSON(message: RandomNumbersCallData): unknown {
    const obj: any = {};
    message.length !== undefined && (obj.length = message.length);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RandomNumbersCallData>
  ): RandomNumbersCallData {
    const message = { ...baseRandomNumbersCallData } as RandomNumbersCallData;
    if (object.length !== undefined && object.length !== null) {
      message.length = object.length;
    } else {
      message.length = 0;
    }
    return message;
  },
};

const baseRandomNumbersResult: object = { numbers: 0 };

export const RandomNumbersResult = {
  encode(
    message: RandomNumbersResult,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.numbers) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RandomNumbersResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRandomNumbersResult } as RandomNumbersResult;
    message.numbers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.numbers.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.numbers.push(longToNumber(reader.int64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RandomNumbersResult {
    const message = { ...baseRandomNumbersResult } as RandomNumbersResult;
    message.numbers = [];
    if (object.numbers !== undefined && object.numbers !== null) {
      for (const e of object.numbers) {
        message.numbers.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: RandomNumbersResult): unknown {
    const obj: any = {};
    if (message.numbers) {
      obj.numbers = message.numbers.map((e) => e);
    } else {
      obj.numbers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RandomNumbersResult>): RandomNumbersResult {
    const message = { ...baseRandomNumbersResult } as RandomNumbersResult;
    message.numbers = [];
    if (object.numbers !== undefined && object.numbers !== null) {
      for (const e of object.numbers) {
        message.numbers.push(e);
      }
    }
    return message;
  },
};

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
