import { describe, expect, it } from "vitest"
import { isArray, isAsyncFunction, isBoolean, isDate, isFunction, isHtmlElement, isMap, isNull, isNumber, isObject, isPlainObject, isSet, isString, isUndefined } from "../src/is"

const a: any = {}
const ud = undefined
// eslint-disable-next-line antfu/top-level-function
const arrowFunc = () => {}
function func() {
    return true
}
async function asyncFunc() {
    return new Promise(() => {})
}

describe("isUndefined", () => {
    it("isUndefined should return true for undefined", () => {
        expect(isUndefined(ud)).toBe(true)
    })

    it("isUndefined should return false for other values", () => {
        expect(isUndefined(1)).toBe(false)
        expect(isUndefined({})).toBe(false)
        expect(isUndefined({ foo: "bar" })).toBe(false)
        expect(isUndefined([])).toBe(false)
        expect(isUndefined([1])).toBe(false)
        expect(isUndefined(["foo"])).toBe(false)
        expect(isUndefined("")).toBe(false)
        expect(isUndefined("foo")).toBe(false)
        expect(isUndefined(/foo/)).toBe(false)
        expect(isUndefined(/foo/ig)).toBe(false)
        expect(isUndefined(new Date())).toBe(false)
        expect(isUndefined(Symbol())).toBe(false)
        expect(isUndefined(Symbol("foo"))).toBe(false)
        expect(isUndefined(new Error())).toBe(false)
        expect(isUndefined(new Error("foo"))).toBe(false)
        expect(isUndefined(new Uint8Array())).toBe(false)
        expect(isUndefined(new Uint8Array([1, 2, 3]))).toBe(false)
    })
})

describe("isNull", () => {
    it("isNull should return true for null", () => {
        expect(isNull(null)).toBe(true)
    })

    it("isNull should return false for other values", () => {
        expect(isNull(1)).toBe(false)
        expect(isNull({})).toBe(false)
        expect(isNull({ foo: "bar" })).toBe(false)
        expect(isNull([])).toBe(false)
        expect(isNull([1])).toBe(false)
        expect(isNull(["foo"])).toBe(false)
        expect(isNull("")).toBe(false)
        expect(isNull("foo")).toBe(false)
        expect(isNull(/foo/)).toBe(false)
        expect(isNull(/foo/ig)).toBe(false)
        expect(isNull(new Date())).toBe(false)
        expect(isNull(Symbol())).toBe(false)
        expect(isNull(Symbol("foo"))).toBe(false)
        expect(isNull(new Error())).toBe(false)
        expect(isNull(new Error("foo"))).toBe(false)
        expect(isNull(new Uint8Array())).toBe(false)
        expect(isNull(new Uint8Array([1, 2, 3]))).toBe(false)
    })
})

describe("isBoolean", () => {
    it("isBoolean should return true for a boolean", () => {
        expect(isBoolean(true)).toBe(true)
    })

    it("isBoolean should return false for other values", () => {
        expect(isBoolean(ud)).toBe(false)
        expect(isBoolean(1)).toBe(false)
        expect(isBoolean({})).toBe(false)
        expect(isBoolean({ foo: "bar" })).toBe(false)
        expect(isBoolean([])).toBe(false)
        expect(isBoolean([1])).toBe(false)
        expect(isBoolean(["foo"])).toBe(false)
        expect(isBoolean("")).toBe(false)
        expect(isBoolean("foo")).toBe(false)
        expect(isBoolean(/foo/)).toBe(false)
        expect(isBoolean(/foo/ig)).toBe(false)
        expect(isBoolean(new Date())).toBe(false)
        expect(isBoolean(Symbol())).toBe(false)
        expect(isBoolean(Symbol("foo"))).toBe(false)
        expect(isBoolean(new Error())).toBe(false)
        expect(isBoolean(new Error("foo"))).toBe(false)
        expect(isBoolean(new Uint8Array())).toBe(false)
        expect(isBoolean(new Uint8Array([1, 2, 3]))).toBe(false)
    })
})

describe("isNumber", () => {
    it("isNumber should return true for a number", () => {
        expect(isNumber(1)).toBe(true)
    })

    it("isNumber should return false for other values", () => {
        expect(isNumber(ud)).toBe(false)
        expect(isNumber(true)).toBe(false)
        expect(isNumber({})).toBe(false)
        expect(isNumber({ foo: "bar" })).toBe(false)
        expect(isNumber([])).toBe(false)
        expect(isNumber([1])).toBe(false)
        expect(isNumber(["foo"])).toBe(false)
        expect(isNumber("")).toBe(false)
        expect(isNumber("foo")).toBe(false)
        expect(isNumber(/foo/)).toBe(false)
        expect(isNumber(/foo/ig)).toBe(false)
        expect(isNumber(new Date())).toBe(false)
        expect(isNumber(Symbol())).toBe(false)
        expect(isNumber(Symbol("foo"))).toBe(false)
        expect(isNumber(new Error())).toBe(false)
        expect(isNumber(new Error("foo"))).toBe(false)
        expect(isNumber(new Uint8Array())).toBe(false)
        expect(isNumber(new Uint8Array([1, 2, 3]))).toBe(false)
    })
})

describe("isFunction", () => {
    it("isFunction should return true for a function", () => {
        expect(isFunction(func)).toBe(true)
    })

    it("isFunction should return false for other values", () => {
        expect(isFunction(ud)).toBe(false)
        expect(isFunction(true)).toBe(false)
        expect(isFunction({})).toBe(false)
        expect(isFunction({ foo: "bar" })).toBe(false)
        expect(isFunction([])).toBe(false)
        expect(isFunction([1])).toBe(false)
        expect(isFunction(["foo"])).toBe(false)
        expect(isFunction("")).toBe(false)
        expect(isFunction("foo")).toBe(false)
        expect(isFunction(/foo/)).toBe(false)
        expect(isFunction(/foo/ig)).toBe(false)
        expect(isFunction(new Date())).toBe(false)
        expect(isFunction(Symbol())).toBe(false)
        expect(isFunction(Symbol("foo"))).toBe(false)
        expect(isFunction(new Error())).toBe(false)
        expect(isFunction(new Error("foo"))).toBe(false)
        expect(isFunction(new Uint8Array())).toBe(false)
        expect(isFunction(new Uint8Array([1, 2, 3]))).toBe(false)
    })
})

describe("isObject", () => {
    it("isObject should return true for an object", () => {
        expect(isObject(a)).toBe(true)
        expect(isObject([])).toBe(true)
        expect(isObject(/foo/)).toBe(true)
        expect(isObject(new Date())).toBe(true)
        expect(isObject(new Error())).toBe(true)
    })

    it("isObject should return false for other values", () => {
        expect(isObject(ud)).toBe(false)
        expect(isObject(null)).toBe(false)
        expect(isObject(true)).toBe(false)
        expect(isObject(1)).toBe(false)
        expect(isObject("")).toBe(false)
        expect(isObject(Symbol())).toBe(false)
    })
})

describe("isString", () => {
    it("isString should return true for a string", () => {
        expect(isString("string")).toBe(true)
        expect(isString("")).toBe(true)
        // eslint-disable-next-line quotes
        expect(isString('')).toBe(true)
        // eslint-disable-next-line quotes
        expect(isString('foo')).toBe(true)
        expect(isString(`${a}`)).toBe(true)
        expect(isString((() => "foo")())).toBe(true)
    })
    it("isString should return false for other values", () => {
        expect(isString(ud)).toBe(false)
        expect(isString(undefined)).toBe(false)
        expect(isString(null)).toBe(false)
        expect(isString(func)).toBe(false)
        expect(isString(arrowFunc)).toBe(false)
        expect(isString(asyncFunc)).toBe(false)
        expect(isString(0)).toBe(false)
        expect(isString(0.1)).toBe(false)
        expect(isString(.1)).toBe(false)
        expect(isString(.1e3)).toBe(false)
        expect(isString(-.1e3)).toBe(false)
        expect(isString(-.1)).toBe(false)
        expect(isString(-1)).toBe(false)
        expect(isString(/foo/)).toBe(false)
        expect(isString(/foo/i)).toBe(false)
        expect(isString(/foo/ig)).toBe(false)
        expect(isString(Number.NaN)).toBe(false)
        expect(isString([])).toBe(false)
        expect(isString([1])).toBe(false)
        expect(isString([""])).toBe(false)
        expect(isString(["foo"])).toBe(false)
        expect(isString(["", 1])).toBe(false)
        expect(isString({})).toBe(false)
        expect(isString({ foo: "bar" })).toBe(false)
    })
})

describe("isDate", () => {
    it("isDate should return true for a Date object", () => {
        expect(isDate(new Date())).toBe(true)
    })
    it("isDate should return false for other values", () => {
        expect(isDate(ud)).toBe(false)
        expect(isDate(undefined)).toBe(false)
        expect(isDate(null)).toBe(false)
        expect(isDate(func)).toBe(false)
        expect(isDate(arrowFunc)).toBe(false)
        expect(isDate(asyncFunc)).toBe(false)
        expect(isDate("")).toBe(false)
        expect(isDate("2020-01-01")).toBe(false)
        expect(isDate(1234567890)).toBe(false)
        expect(isDate([])).toBe(false)
        expect(isDate({})).toBe(false)
        expect(isDate({ foo: "bar" })).toBe(false)
    })
})

describe("isAsyncFunction", () => {
    it("isAsyncFunction", () => {
        const func0 = () => {}
        const asyncFunc0 = async () => {}
        expect(isAsyncFunction(undefined)).toBe(false)
        expect(isAsyncFunction(func0)).toBe(false)
        expect(isAsyncFunction(asyncFunc0)).toBe(true)
    })
})

describe("isPlainObject", () => {
    it("should return true for a plain object", () => {
        expect(isPlainObject({})).toBe(true)
    })

    it("should return false for a non-plain object", () => {
        expect(isPlainObject(null)).toBe(false)
        expect(isPlainObject([])).toBe(false)
        expect(isPlainObject(123)).toBe(false)
        expect(isPlainObject("abc")).toBe(false)
        expect(isPlainObject(new Date())).toBe(false)
    })

    it("should return false for objects with prototype chain or symbols", () => {
        // eslint-disable-next-line @typescript-eslint/no-extraneous-class
        class CustomClass {}
        const customObj = new CustomClass()
        const objWithPrototype = Object.create({ prop: "value" })
        const objWithSymbol = { [Symbol.toStringTag]: "CustomTag" }

        expect(isPlainObject(customObj)).toBe(false)
        expect(isPlainObject(objWithPrototype)).toBe(false)
        expect(isPlainObject(objWithSymbol)).toBe(false)
    })
})


describe("isArray", () => {
    it("isArray should return true for array", () => {
        expect(isArray([])).toBe(true)
    })

    it("isArray should return false for other values", () => {
        expect(isArray(ud)).toBe(false)
        expect(isArray(a)).toBe(false)
        expect(isArray(1)).toBe(false)
        expect(isArray({})).toBe(false)
        expect(isArray({ foo: "bar" })).toBe(false)
        expect(isArray("")).toBe(false)
        expect(isArray("foo")).toBe(false)
        expect(isArray(/foo/)).toBe(false)
        expect(isArray(/foo/ig)).toBe(false)
        expect(isArray(new Date())).toBe(false)
        expect(isArray(Symbol())).toBe(false)
        expect(isArray(Symbol("foo"))).toBe(false)
        expect(isArray(new Error())).toBe(false)
        expect(isArray(new Error("foo"))).toBe(false)
        expect(isArray(new Uint8Array())).toBe(false)
        expect(isArray(new Uint8Array([1, 2, 3]))).toBe(false)
    })
})

describe("isMap", () => {
    it("isMap should return true for a valid Map object", () => {
        const map = new Map([[1, "one"], [2, "two"]])
        expect(isMap(map)).toBe(true)
    })

    it("isMap should return false for a non-Map object", () => {
        const nonMap = { key: "value" }
        expect(isMap(nonMap)).toBe(false)
    })
})

describe("isSet", () => {
    it("should return true for an empty set", () => {
        expect(isSet(new Set())).toBe(true)
    })

    it("should return true for a non-empty set", () => {
        expect(isSet(new Set([1, 2, 3]))).toBe(true)
    })

    it("should return false for a non-set object", () => {
        expect(isSet({})).toBe(false)
    })
})

describe("isHtmlElement", () => {
    it("should return true for an HTMLElement", () => {
        const div = document.createElement("div")
        expect(isHtmlElement(div)).toBe(true)
    })
})
