import { describe, expect, it } from "vitest"
import { getTypeName, isDate, isObject } from "./is"

describe("getTypeName", () => {
    it("should return correct type names", () => {
        expect(getTypeName(null)).toBe("Null")
        expect(getTypeName(undefined)).toBe("Undefined")
        expect(getTypeName(1)).toBe("Number")
        expect(getTypeName("")).toBe("String")
        expect(getTypeName(true)).toBe("Boolean")
        expect(getTypeName({})).toBe("Object")
        expect(getTypeName([])).toBe("Array")
        expect(getTypeName(new Date())).toBe("Date")
        expect(getTypeName(() => {})).toBe("Function")
        expect(getTypeName(/regex/)).toBe("RegExp")
        expect(getTypeName(new Uint8Array())).toBe("Uint8Array")
        expect(getTypeName(new Date())).toBe("Date")
        expect(getTypeName(Symbol())).toBe("Symbol")
        expect(getTypeName(new Promise(() => {}))).toBe("Promise")
    })
})

describe("isDate", () => {
    it("should return true for Date objects", () => {
        expect(isDate(new Date())).toBeTruthy()
        expect(isDate(new Date("2020-01-01"))).toBeTruthy()
    })

    it("should return false for non-Date values", () => {
        expect(isDate(null)).toBeFalsy()
        expect(isDate(undefined)).toBeFalsy()
        expect(isDate("2020-01-01")).toBeFalsy()
        expect(isDate(1_234_567_890)).toBeFalsy()
        expect(isDate({})).toBeFalsy()
        expect(isDate([])).toBeFalsy()
    })
})

describe("isObject", () => {
    it("should return true for objects", () => {
        expect(isObject({})).toBeTruthy()
        expect(isObject({ a: 1 })).toBeTruthy()
        expect(isObject([])).toBeTruthy()
        expect(isObject(new Object())).toBeTruthy()
        expect(isObject(new Date())).toBeTruthy()
        expect(isObject(new Uint8Array())).toBeTruthy()
    })

    it("should return false for non-objects", () => {
        expect(isObject(null)).toBeFalsy()
        expect(isObject(undefined)).toBeFalsy()
        expect(isObject(1)).toBeFalsy()
        expect(isObject("string")).toBeFalsy()
        expect(isObject(true)).toBeFalsy()
        expect(isObject(Symbol())).toBeFalsy()
    })
})
