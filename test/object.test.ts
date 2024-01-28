import { describe, expect, it } from "vitest"
import { deepCopy, deepEqual } from "../src/object"

describe("isDeepEquals function", () => {
    it("Accurately compare two non-object", () => {
        expect(deepEqual(1, 1)).toBe(true)
        expect(deepEqual(1, "1")).toBe(false)
        expect(deepEqual("hello", "world")).toBe(false)
        expect(deepEqual(Symbol("1"), Symbol("1"))).toBe(false)
        expect(deepEqual(Symbol("1").toString(), Symbol("1").toString())).toBe(true)
        expect(deepEqual(true, false)).toBe(false)
        expect(deepEqual(true, true)).toBe(true)
        expect(deepEqual(false, false)).toBe(true)
        expect(deepEqual(undefined, null)).toBe(false)
        expect(deepEqual(null, undefined)).toBe(false)
        expect(deepEqual(undefined, undefined)).toBe(true)
        expect(deepEqual(null, null)).toBe(true)
    })

    it("Accurately compare two arrays", () => {
        expect(deepEqual([], [])).toBe(true)
        expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true)
        expect(deepEqual([1, 2, 3], [3, 2, 1])).toBe(false)
        expect(deepEqual([1, 2, 3], [1, 2])).toBe(false)
        expect(deepEqual(["a", "b", "c"], ["a", "b"])).toBe(false)
        expect(deepEqual([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }])).toBe(
            true,
        )
        expect(deepEqual([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 1 }])).toBe(
            false,
        )
    })

    it("Accurately compare two object", () => {
        expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true)
        expect(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true)
        expect(deepEqual({ a: 1, b: 2 }, { a: "1", b: "2" })).toBe(false)
        expect(deepEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true)
        expect(deepEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false)
        expect(
            deepEqual({ a: { b: { c: { d: 1 } } } }, { a: { b: { c: { d: 1 } } } }),
        ).toBe(true)
    })

    it("Compare the attributes of mixed types correctly", () => {
        expect(deepEqual({ a: 1, b: [2, 3] }, { a: 1, b: [2, 3] })).toBe(true)
        expect(deepEqual({ a: 1, b: [2, 3] }, { a: 1, b: [3, 2] })).toBe(false)
        expect(deepEqual({ a: 1, b: [2, 3] }, { a: 1, b: [3, 2], c: "foo" })).toBe(false)
        expect(deepEqual([{ id: 1, name: "apple" }], [{ id: 1, name: "apple" }]))
            .toBe(true)
        expect(deepEqual({ a: 1, b: [2, 3] }, "apple")).toBe(false)
        expect(deepEqual("", { a: 1, b: [2] })).toBe(false)
    })

    it("compare two objects specified by key and return whether they are equal.", () => {
        const obj1 = { a: 1, b: { c: [0, 1] }, d: 2 }
        const obj2 = { d: 3, b: { c: [0, 1] }, a: 1 }
        const keys = ["a", "b"]
        expect(deepEqual(obj1, obj2, keys)).toBe(true)
        expect(deepEqual(obj1, obj2, ["a", "b", "d"])).toBe(false)
    })

    it("compare two different types", () => {
        expect(deepEqual("hello", ["hello"])).toBe(false)
        expect(deepEqual("hello", [])).toBe(false)
        expect(deepEqual([], {})).toBe(false)
        expect(deepEqual([], { foo: 1 })).toBe(false)
        expect(deepEqual([], 1)).toBe(false)
        expect(deepEqual([], "foo")).toBe(false)
        expect(deepEqual([], "")).toBe(false)
        expect(deepEqual([1], Symbol("1"))).toBe(false)
        expect(deepEqual(1, Symbol("1"))).toBe(false)
        expect(deepEqual("hi", Symbol("1"))).toBe(false)
    })

    it("compare Date object", () => {
        expect(deepEqual(Date(), Date())).toBe(true)
        expect(deepEqual(Date(), new Date("1970-01-01"))).toBe(false)
    })

})


describe("deepCopy", () => {
    it("should return the same value for non-object types", () => {
        expect(deepCopy(1)).toBe(1)
        expect(deepCopy("string")).toBe("string")
        expect(deepCopy(null)).toBeNull()
        expect(deepCopy(undefined)).toBeUndefined()
    })

    it("should create a deep copy of an array", () => {
        const originalArray = [1, 2, { a: 1 }]
        const copiedArray = deepCopy(originalArray)
        expect(copiedArray).not.toBe(originalArray)
        expect(copiedArray).toEqual(originalArray)
    })

    it("should create a deep copy of an object", () => {
        const originalObject = {
            a: 1,
            b: {
                c: 2,
                d: 3,
            },
        }
        const copiedObject = deepCopy(originalObject)
        expect(copiedObject).not.toBe(originalObject)
        expect(copiedObject).toEqual(originalObject)
    })

    it("should filter null fields", () => {
        const originalObject = { a: 1, b: null, c: 3 }
        const copiedObject = deepCopy(originalObject, (_, value) => value === null)
        expect(copiedObject).not.toBe(originalObject)
        expect(copiedObject).toEqual({ a: 1, c: 3 })
    })
})