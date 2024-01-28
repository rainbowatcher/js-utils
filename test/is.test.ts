import { describe, expect, it } from "vitest"
import { isAsyncFunction, isDate, isMap, isPlainObject, isSet, isUndefined } from "../src/is"


describe("isUndefined", () => {
    const ud = undefined
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

describe("isDate", () => {
    it("should return true for a Date object", () => {
        expect(isDate(new Date())).toBe(true)
    })

    it("should return false for non-Date objects", () => {
        expect(isDate({})).toBe(false)
        expect(isDate(undefined)).toBe(false)
        expect(isDate(null)).toBe(false)
        expect(isDate("2020-01-01")).toBe(false)
        expect(isDate(1234567890)).toBe(false)
    })
})

