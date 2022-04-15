/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "slandymani.odinworkshop.oracle";
const baseRandomNumbersCallData = { length: 0 };
export const RandomNumbersCallData = {
    encode(message, writer = Writer.create()) {
        if (message.length !== 0) {
            writer.uint32(8).int64(message.length);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRandomNumbersCallData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRandomNumbersCallData };
        if (object.length !== undefined && object.length !== null) {
            message.length = Number(object.length);
        }
        else {
            message.length = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.length !== undefined && (obj.length = message.length);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRandomNumbersCallData };
        if (object.length !== undefined && object.length !== null) {
            message.length = object.length;
        }
        else {
            message.length = 0;
        }
        return message;
    },
};
const baseRandomNumbersResult = { numbers: 0 };
export const RandomNumbersResult = {
    encode(message, writer = Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.numbers) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRandomNumbersResult };
        message.numbers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.numbers.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.numbers.push(longToNumber(reader.int64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRandomNumbersResult };
        message.numbers = [];
        if (object.numbers !== undefined && object.numbers !== null) {
            for (const e of object.numbers) {
                message.numbers.push(Number(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.numbers) {
            obj.numbers = message.numbers.map((e) => e);
        }
        else {
            obj.numbers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRandomNumbersResult };
        message.numbers = [];
        if (object.numbers !== undefined && object.numbers !== null) {
            for (const e of object.numbers) {
                message.numbers.push(e);
            }
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
