import { describe, expect, it } from "vitest"
import { Strings } from "../src"

describe("String Utils", () => {
    const ud = undefined
    const a: any = {}

    it("isEmpty", () => {
        expect(Strings.isEmpty("not empty")).toBe(false)
        expect(Strings.isEmpty("")).toBe(true)
        expect(Strings.isEmpty(" ")).toBe(false)
        expect(Strings.isEmpty(" ", true)).toBe(true)
        expect(Strings.isEmpty(ud)).toBe(true)
        expect(() => Strings.isEmpty(a)).toThrow(TypeError)
        expect(() => Strings.isEmpty(a)).toThrowErrorMatchingInlineSnapshot("\"Strings.isEmpty accepts only string type parameters\"")
    })

    it("isNotEmpty", () => {
        expect(Strings.isNotEmpty("not empty")).toBe(true)
        expect(Strings.isNotEmpty("")).toBe(false)
        expect(Strings.isNotEmpty(" ")).toBe(true)
        expect(Strings.isNotEmpty(" ", true)).toBe(false)
        expect(Strings.isNotEmpty(ud)).toBe(false)
        expect(() => Strings.isNotEmpty(a)).toThrow(TypeError)
        expect(() => Strings.isNotEmpty(a)).toThrowErrorMatchingInlineSnapshot("\"Strings.isEmpty accepts only string type parameters\"")
    })

    it("toUpperCase", () => {
        const b: any = "lowcase"
        expect(Strings.toUpperCase("lowcase")).toBe("LOWCASE")
        expect(Strings.toUpperCase(ud)).toBe(undefined)
        expect(() => Strings.toUpperCase(a)).toThrow(TypeError)
        expect(() => Strings.toUpperCase(a)).toThrowErrorMatchingInlineSnapshot("\"Strings.toUpperCase accepts only string type parameters\"")
        expect(Strings.toUpperCase(b)).toBe("LOWCASE")
    })

    it("isString", () => {
        const func = () => {}
        const asyncFunc = async () => {}
        expect(Strings.isString("string")).toBe(true)
        expect(Strings.isString(ud)).toBe(false)
        expect(Strings.isString(func)).toBe(false)
        expect(Strings.isString(asyncFunc)).toBe(false)
        expect(Strings.isString(0)).toBe(false)
        expect(Strings.isString(Number.NaN)).toBe(false)
        expect(Strings.isString(null)).toBe(false)
        expect(Strings.isString({})).toBe(false)
    })
})
