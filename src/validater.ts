import type { Primitive } from "./types"

export function validateParamType(param: any, expectType: Primitive) {
    if (typeof param !== expectType) throw new TypeError("Parameter type incorrect.")
}
