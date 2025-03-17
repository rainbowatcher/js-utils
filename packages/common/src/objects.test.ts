import { describe, expect, it } from "vitest"
import { deepCopy, deepEqual, mergeWith } from "./objects"
import type { Composer } from "./objects"

describe("deepEqual", () => {
    it("accurately compare two non-object", () => {
        expect(deepEqual(1, 1)).toBeTruthy()
        expect(deepEqual(1, "1")).toBeFalsy()
        expect(deepEqual("hello", "world")).toBeFalsy()
        expect(deepEqual(Symbol("1"), Symbol("1"))).toBeFalsy()
        expect(deepEqual(Symbol("1").toString(), Symbol("1").toString())).toBeTruthy()
        expect(deepEqual(true, false)).toBeFalsy()
        expect(deepEqual(true, true)).toBeTruthy()
        expect(deepEqual(false, false)).toBeTruthy()
        expect(deepEqual(undefined, null)).toBeFalsy()
        expect(deepEqual(null, undefined)).toBeFalsy()
        expect(deepEqual(undefined, undefined)).toBeTruthy()
        expect(deepEqual(null, null)).toBeTruthy()
    })

    it("accurately compare two arrays", () => {
        expect(deepEqual([], [])).toBeTruthy()
        expect(deepEqual([1, 2, 3], [1, 2, 3])).toBeTruthy()
        expect(deepEqual([1, 2, 3], [3, 2, 1])).toBeFalsy()
        expect(deepEqual([1, 2, 3], [1, 2])).toBeFalsy()
        expect(deepEqual(["a", "b", "c"], ["a", "b"])).toBeFalsy()
        expect(deepEqual([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }])).toBeTruthy()
        expect(deepEqual([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 1 }])).toBeFalsy()
    })

    it("accurately compare two object", () => {
        expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBeTruthy()
        expect(deepEqual({ a: 1, b: 2 }, { a: "1", b: "2" })).toBeFalsy()
        expect(deepEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBeTruthy()
        expect(deepEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBeFalsy()
        expect(deepEqual({ a: { b: { c: { d: 1 } } } }, { a: { b: { c: { d: 1 } } } })).toBeTruthy()
    })

    it("compare the attributes of mixed types correctly", () => {
        expect(deepEqual({ a: 1, b: [2, 3] }, { a: 1, b: [2, 3] })).toBeTruthy()
        expect(deepEqual({ a: 1, b: [2, 3] }, { a: 1, b: [3, 2] })).toBeFalsy()
        expect(deepEqual({ a: 1, b: [2, 3] }, { a: 1, b: [3, 2], c: "foo" })).toBeFalsy()
        expect(deepEqual([{ id: 1, name: "apple" }], [{ id: 1, name: "apple" }]))
            .toBeTruthy()
        expect(deepEqual({ a: 1, b: [2, 3] }, "apple")).toBeFalsy()
        expect(deepEqual("", { a: 1, b: [2] })).toBeFalsy()
    })

    it("compare two objects specified by key and return whether they are equal.", () => {
        const obj1 = { a: 1, b: { c: [0, 1] }, d: 2 }
        const obj2 = { a: 1, b: { c: [0, 1] }, d: 3 }
        const keys = ["a", "b"]
        expect(deepEqual(obj1, obj2, keys)).toBeTruthy()
        expect(deepEqual(obj1, obj2, ["a", "b", "d"])).toBeFalsy()
    })

    it("compare two different types", () => {
        expect(deepEqual("hello", ["hello"])).toBeFalsy()
        expect(deepEqual("hello", [])).toBeFalsy()
        expect(deepEqual([], {})).toBeFalsy()
        expect(deepEqual([], { foo: 1 })).toBeFalsy()
        expect(deepEqual([], 1)).toBeFalsy()
        expect(deepEqual([], "foo")).toBeFalsy()
        expect(deepEqual([], "")).toBeFalsy()
        expect(deepEqual([1], Symbol("1"))).toBeFalsy()
        expect(deepEqual(1, Symbol("1"))).toBeFalsy()
        expect(deepEqual("hi", Symbol("1"))).toBeFalsy()
    })

    it("compare Date object", () => {
        // eslint-disable-next-line unicorn/new-for-builtins
        expect(deepEqual(Date(), Date())).toBeTruthy()
        expect(deepEqual(new Date(), new Date())).toBeTruthy()
        expect(deepEqual(new Date(), new Date("1970-01-01"))).toBeFalsy()
    })
})


describe("deepCopy", () => {
    it("should return the same value for non-object types", () => {
        expect(deepCopy(1)).toBe(1)
        expect(deepCopy("string")).toBe("string")
        expect(deepCopy(null)).toBeNull()
        // eslint-disable-next-line ts/no-confusing-void-expression
        expect(deepCopy(undefined)).toBeUndefined()
    })

    it("should create a deep copy of an array", () => {
        const originalArray = [1, 2, { a: 1 }]
        const copiedArray = deepCopy(originalArray)
        expect(copiedArray).not.toBe(originalArray)
        expect(copiedArray).toStrictEqual(originalArray)
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
        expect(copiedObject).toStrictEqual(originalObject)
    })

    it("should filter null fields", () => {
        const originalObject = { a: 1, b: null, c: 3 }
        const copiedObject = deepCopy(originalObject, { filter: (_, value) => value === null })
        expect(copiedObject).not.toBe(originalObject)
        expect(copiedObject).toStrictEqual({ a: 1, c: 3 })
    })

    it("should deep copy a cycle reference object", () => {
        const originalObject: Record<string, any> = { a: 1, b: 2 }
        originalObject.c = originalObject
        const copiedObject = deepCopy(originalObject)
        expect(copiedObject).not.toBe(originalObject)
        expect(copiedObject).toStrictEqual(originalObject)
    })
})

describe("mergeWith", () => {
    it("should merge two objects, preferring the right object's values", () => {
        const left = { a: 1, b: 2 }
        const right = { b: 3, c: 4 }
        const expected = { a: 1, b: 3, c: 4 }
        const result = mergeWith(left, right)
        expect(result).toStrictEqual(expected)
    })

    it("should handle undefined values in the right object", () => {
        const left = { a: 1, b: 2 }
        const right = { b: undefined, c: 4 }
        const expected = { a: 1, b: 2, c: 4 }
        const result = mergeWith(left, right)
        expect(result).toStrictEqual(expected)
    })

    it("should use the composer function to customize the merge behavior", () => {
        const left = { a: 1, b: 2, d: ["first"] }
        const right = { b: 3, c: 4, d: ["second"] }
        const composer: Composer = (leftValue, rightValue, key) => {
            if (key === "b") {
                return leftValue + rightValue
            }
            if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
                return [...new Set([...leftValue, ...rightValue])]
            }
            return rightValue
        }
        const expected = {
            a: 1, b: 5, c: 4, d: ["first", "second"],
        }
        const result = mergeWith(left, right, composer)
        expect(result).toStrictEqual(expected)
    })

    it("should work with empty objects", () => {
        const left = {}
        const right = { a: 1 }
        const expected = { a: 1 }
        expect(mergeWith(left, right)).toStrictEqual(expected)
    })

    it("should work when the left object is empty", () => {
        const left: any = null
        const right = { a: 1 }
        const expected = { a: 1 }
        expect(mergeWith(left, right)).toStrictEqual(expected)
    })

    it("should work when objects are nested", () => {
        const left = {
            a: 1,
            b: 2,
            c: {
                d: 1,
                foo: "bar",
            },
        }
        const right = {
            b: 3,
            c: {
                e: null,
                foo: "baz",
            },
        }
        const expected = {
            a: 1, b: 3, c: { d: 1, e: null, foo: "baz" },
        }
        const result = mergeWith(left, right)
        expect(result).toStrictEqual(expected)
    })

    it("should work with function property", () => {
        const left = {
            get: () => "left",
            print: (value: string) => { console.log(value) },
        }
        const right = {
            get() {
                return "right"
            },
        }
        const expected = {
            get() {
                return "right"
            },
            print: (value: string) => { console.log(value) },
        }
        expect(mergeWith(left, right).get()).toStrictEqual(expected.get())
    })
})
