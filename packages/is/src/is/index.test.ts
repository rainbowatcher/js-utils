import { describe, expect, it } from "vitest"
import {
    isArray, isAsyncFunction, isBoolean, isDate, isFunction,
    isHtmlElement, isMap, isNull, isNumber, isObject,
    isPlainObject, isSet, isString, isUndefined,
} from "."

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
        expect(isUndefined(ud)).toBeTruthy()
    })

    it("isUndefined should return false for other values", () => {
        expect(isUndefined(1)).toBeFalsy()
        expect(isUndefined({})).toBeFalsy()
        expect(isUndefined({ foo: "bar" })).toBeFalsy()
        expect(isUndefined([])).toBeFalsy()
        expect(isUndefined([1])).toBeFalsy()
        expect(isUndefined(["foo"])).toBeFalsy()
        expect(isUndefined("")).toBeFalsy()
        expect(isUndefined("foo")).toBeFalsy()
        expect(isUndefined(/foo/)).toBeFalsy()
        expect(isUndefined(/foo/gi)).toBeFalsy()
        expect(isUndefined(new Date())).toBeFalsy()
        expect(isUndefined(Symbol())).toBeFalsy()
        expect(isUndefined(Symbol("foo"))).toBeFalsy()

        expect(isUndefined(new Error())).toBeFalsy()
        expect(isUndefined(new Error("foo"))).toBeFalsy()
        expect(isUndefined(new Uint8Array())).toBeFalsy()
        expect(isUndefined(new Uint8Array([1, 2, 3]))).toBeFalsy()
    })
})

describe("isNull", () => {
    it("isNull should return true for null", () => {
        expect(isNull(null)).toBeTruthy()
    })

    it("isNull should return false for other values", () => {
        expect(isNull(1)).toBeFalsy()
        expect(isNull({})).toBeFalsy()
        expect(isNull({ foo: "bar" })).toBeFalsy()
        expect(isNull([])).toBeFalsy()
        expect(isNull([1])).toBeFalsy()
        expect(isNull(["foo"])).toBeFalsy()
        expect(isNull("")).toBeFalsy()
        expect(isNull("foo")).toBeFalsy()
        expect(isNull(/foo/)).toBeFalsy()
        expect(isNull(/foo/gi)).toBeFalsy()
        expect(isNull(new Date())).toBeFalsy()
        expect(isNull(Symbol())).toBeFalsy()
        expect(isNull(Symbol("foo"))).toBeFalsy()

        expect(isNull(new Error())).toBeFalsy()
        expect(isNull(new Error("foo"))).toBeFalsy()
        expect(isNull(new Uint8Array())).toBeFalsy()
        expect(isNull(new Uint8Array([1, 2, 3]))).toBeFalsy()
    })
})

describe("isBoolean", () => {
    it("isBoolean should return true for a boolean", () => {
        expect(isBoolean(true)).toBeTruthy()
    })

    it("isBoolean should return false for other values", () => {
        expect(isBoolean(ud)).toBeFalsy()
        expect(isBoolean(1)).toBeFalsy()
        expect(isBoolean({})).toBeFalsy()
        expect(isBoolean({ foo: "bar" })).toBeFalsy()
        expect(isBoolean([])).toBeFalsy()
        expect(isBoolean([1])).toBeFalsy()
        expect(isBoolean(["foo"])).toBeFalsy()
        expect(isBoolean("")).toBeFalsy()
        expect(isBoolean("foo")).toBeFalsy()
        expect(isBoolean(/foo/)).toBeFalsy()
        expect(isBoolean(/foo/gi)).toBeFalsy()
        expect(isBoolean(new Date())).toBeFalsy()
        expect(isBoolean(Symbol())).toBeFalsy()
        expect(isBoolean(Symbol("foo"))).toBeFalsy()

        expect(isBoolean(new Error())).toBeFalsy()
        expect(isBoolean(new Error("foo"))).toBeFalsy()
        expect(isBoolean(new Uint8Array())).toBeFalsy()
        expect(isBoolean(new Uint8Array([1, 2, 3]))).toBeFalsy()
    })
})

describe("isNumber", () => {
    it("isNumber should return true for a number", () => {
        expect(isNumber(1)).toBeTruthy()
    })

    it("isNumber should return false for other values", () => {
        expect(isNumber(ud)).toBeFalsy()
        expect(isNumber(true)).toBeFalsy()
        expect(isNumber({})).toBeFalsy()
        expect(isNumber({ foo: "bar" })).toBeFalsy()
        expect(isNumber([])).toBeFalsy()
        expect(isNumber([1])).toBeFalsy()
        expect(isNumber(["foo"])).toBeFalsy()
        expect(isNumber("")).toBeFalsy()
        expect(isNumber("foo")).toBeFalsy()
        expect(isNumber(/foo/)).toBeFalsy()
        expect(isNumber(/foo/gi)).toBeFalsy()
        expect(isNumber(new Date())).toBeFalsy()
        expect(isNumber(Symbol())).toBeFalsy()
        expect(isNumber(Symbol("foo"))).toBeFalsy()

        expect(isNumber(new Error())).toBeFalsy()
        expect(isNumber(new Error("foo"))).toBeFalsy()
        expect(isNumber(new Uint8Array())).toBeFalsy()
        expect(isNumber(new Uint8Array([1, 2, 3]))).toBeFalsy()
    })
})

describe("isFunction", () => {
    it("isFunction should return true for a function", () => {
        expect(isFunction(func)).toBeTruthy()
    })

    it("isFunction should return false for other values", () => {
        expect(isFunction(ud)).toBeFalsy()
        expect(isFunction(true)).toBeFalsy()
        expect(isFunction({})).toBeFalsy()
        expect(isFunction({ foo: "bar" })).toBeFalsy()
        expect(isFunction([])).toBeFalsy()
        expect(isFunction([1])).toBeFalsy()
        expect(isFunction(["foo"])).toBeFalsy()
        expect(isFunction("")).toBeFalsy()
        expect(isFunction("foo")).toBeFalsy()
        expect(isFunction(/foo/)).toBeFalsy()
        expect(isFunction(/foo/gi)).toBeFalsy()
        expect(isFunction(new Date())).toBeFalsy()
        expect(isFunction(Symbol())).toBeFalsy()
        expect(isFunction(Symbol("foo"))).toBeFalsy()

        expect(isFunction(new Error())).toBeFalsy()
        expect(isFunction(new Error("foo"))).toBeFalsy()
        expect(isFunction(new Uint8Array())).toBeFalsy()
        expect(isFunction(new Uint8Array([1, 2, 3]))).toBeFalsy()
    })
})

describe("isObject", () => {
    it("isObject should return true for an object", () => {
        expect(isObject(a)).toBeTruthy()
        expect(isObject([])).toBeTruthy()
        expect(isObject(/foo/)).toBeTruthy()
        expect(isObject(new Date())).toBeTruthy()

        expect(isObject(new Error())).toBeTruthy()
    })

    it("isObject should return false for other values", () => {
        expect(isObject(ud)).toBeFalsy()
        expect(isObject(null)).toBeFalsy()
        expect(isObject(true)).toBeFalsy()
        expect(isObject(1)).toBeFalsy()
        expect(isObject("")).toBeFalsy()
        expect(isObject(Symbol())).toBeFalsy()
    })
})

describe("isString", () => {
    it("isString should return true for a string", () => {
        expect(isString("string")).toBeTruthy()
        expect(isString("")).toBeTruthy()
        // eslint-disable-next-line style-ts/quotes
        expect(isString('')).toBeTruthy()
        // eslint-disable-next-line style-ts/quotes
        expect(isString('foo')).toBeTruthy()
        expect(isString(`${a}`)).toBeTruthy()
        expect(isString((() => "foo")())).toBeTruthy()
    })
    it("isString should return false for other values", () => {
        expect(isString(ud)).toBeFalsy()

        expect(isString(undefined)).toBeFalsy()
        expect(isString(null)).toBeFalsy()
        expect(isString(func)).toBeFalsy()
        expect(isString(arrowFunc)).toBeFalsy()
        expect(isString(asyncFunc)).toBeFalsy()
        expect(isString(0)).toBeFalsy()
        expect(isString(0.1)).toBeFalsy()
        expect(isString(0.1)).toBeFalsy()
        expect(isString(0.1e3)).toBeFalsy()
        expect(isString(-0.1e3)).toBeFalsy()
        expect(isString(-0.1)).toBeFalsy()
        expect(isString(-1)).toBeFalsy()
        expect(isString(/foo/)).toBeFalsy()
        expect(isString(/foo/i)).toBeFalsy()
        expect(isString(/foo/gi)).toBeFalsy()
        expect(isString(Number.NaN)).toBeFalsy()
        expect(isString([])).toBeFalsy()
        expect(isString([1])).toBeFalsy()
        expect(isString([""])).toBeFalsy()
        expect(isString(["foo"])).toBeFalsy()
        expect(isString(["", 1])).toBeFalsy()
        expect(isString({})).toBeFalsy()
        expect(isString({ foo: "bar" })).toBeFalsy()
    })
})

describe("isDate", () => {
    it("isDate should return true for a Date object", () => {
        expect(isDate(new Date())).toBeTruthy()
    })
    it("isDate should return false for other values", () => {
        expect(isDate(ud)).toBeFalsy()

        expect(isDate(undefined)).toBeFalsy()
        expect(isDate(null)).toBeFalsy()
        expect(isDate(func)).toBeFalsy()
        expect(isDate(arrowFunc)).toBeFalsy()
        expect(isDate(asyncFunc)).toBeFalsy()
        expect(isDate("")).toBeFalsy()
        expect(isDate("2020-01-01")).toBeFalsy()
        expect(isDate(1_234_567_890)).toBeFalsy()
        expect(isDate([])).toBeFalsy()
        expect(isDate({})).toBeFalsy()
        expect(isDate({ foo: "bar" })).toBeFalsy()
    })
})

describe("isAsyncFunction", () => {
    it("isAsyncFunction", () => {
        const func0 = () => {}
        const asyncFunc0 = async () => {}

        expect(isAsyncFunction(undefined)).toBeFalsy()
        expect(isAsyncFunction(func0)).toBeFalsy()
        expect(isAsyncFunction(asyncFunc0)).toBeTruthy()
    })
})

describe("isPlainObject", () => {
    it("should return true for a plain object", () => {
        expect(isPlainObject({})).toBeTruthy()
    })

    it("should return false for a non-plain object", () => {
        expect(isPlainObject(null)).toBeFalsy()
        expect(isPlainObject([])).toBeFalsy()
        expect(isPlainObject(123)).toBeFalsy()
        expect(isPlainObject("abc")).toBeFalsy()
        expect(isPlainObject(new Date())).toBeFalsy()
    })

    it("should return false for objects with prototype chain or symbols", () => {
        // eslint-disable-next-line ts/no-extraneous-class
        class CustomClass {}
        const customObj = new CustomClass()
        const objWithPrototype = Object.create({ prop: "value" })
        const objWithSymbol = { [Symbol.toStringTag]: "CustomTag" }

        expect(isPlainObject(customObj)).toBeFalsy()
        expect(isPlainObject(objWithPrototype)).toBeFalsy()
        expect(isPlainObject(objWithSymbol)).toBeFalsy()
    })
})


describe("isArray", () => {
    it("isArray should return true for array", () => {
        expect(isArray([])).toBeTruthy()
    })

    it("isArray should return false for other values", () => {
        expect(isArray(ud)).toBeFalsy()
        expect(isArray(a)).toBeFalsy()
        expect(isArray(1)).toBeFalsy()
        expect(isArray({})).toBeFalsy()
        expect(isArray({ foo: "bar" })).toBeFalsy()
        expect(isArray("")).toBeFalsy()
        expect(isArray("foo")).toBeFalsy()
        expect(isArray(/foo/)).toBeFalsy()
        expect(isArray(/foo/gi)).toBeFalsy()
        expect(isArray(new Date())).toBeFalsy()
        expect(isArray(Symbol())).toBeFalsy()
        expect(isArray(Symbol("foo"))).toBeFalsy()

        expect(isArray(new Error())).toBeFalsy()
        expect(isArray(new Error("foo"))).toBeFalsy()
        expect(isArray(new Uint8Array())).toBeFalsy()
        expect(isArray(new Uint8Array([1, 2, 3]))).toBeFalsy()
    })
})

describe("isMap", () => {
    it("isMap should return true for a valid Map object", () => {
        const map = new Map([[1, "one"], [2, "two"]])
        expect(isMap(map)).toBeTruthy()
    })

    it("isMap should return false for a non-Map object", () => {
        const nonMap = { key: "value" }
        expect(isMap(nonMap)).toBeFalsy()
    })
})

describe("isSet", () => {
    it("should return true for an empty set", () => {
        expect(isSet(new Set())).toBeTruthy()
    })

    it("should return true for a non-empty set", () => {
        expect(isSet(new Set([1, 2, 3]))).toBeTruthy()
    })

    it("should return false for a non-set object", () => {
        expect(isSet({})).toBeFalsy()
    })
})

describe("isHtmlElement", () => {
    it("should return true for an HTMLElement", () => {
        const div = document.createElement("div")
        expect(isHtmlElement(div)).toBeTruthy()
    })
})
