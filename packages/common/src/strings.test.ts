import { describe, expect, it } from "vitest"
import { Strings } from "."

describe("String Utils", () => {
    const ud = undefined
    const a: any = {}

    it("isEmpty", () => {
        expect(Strings.isEmpty("not empty")).toBeFalsy()
        expect(Strings.isEmpty("")).toBeTruthy()
        expect(Strings.isEmpty(" ")).toBeFalsy()
        expect(Strings.isEmpty(" ", true)).toBeTruthy()
        expect(Strings.isEmpty(ud)).toBeTruthy()
        expect(() => Strings.isEmpty(a)).toThrow(TypeError)
        expect(() => Strings.isEmpty(a)).toThrowErrorMatchingInlineSnapshot("[TypeError: Strings.isEmpty accepts only string type parameters]")
    })

    it("isNotEmpty", () => {
        expect(Strings.isNotEmpty("not empty")).toBeTruthy()
        expect(Strings.isNotEmpty("")).toBeFalsy()
        expect(Strings.isNotEmpty(" ")).toBeTruthy()
        expect(Strings.isNotEmpty(" ", true)).toBeFalsy()
        expect(Strings.isNotEmpty(ud)).toBeFalsy()
        expect(() => Strings.isNotEmpty(a)).toThrow(TypeError)
        expect(() => Strings.isNotEmpty(a)).toThrowErrorMatchingInlineSnapshot("[TypeError: Strings.isEmpty accepts only string type parameters]")
    })
})
