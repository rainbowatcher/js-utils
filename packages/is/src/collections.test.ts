import { describe, expect, it } from "vitest"
import { Collections } from "."

describe("List Utils", () => {
    const ud = undefined
    it("isEmpty", () => {
        expect(Collections.isEmpty("not empty")).toBe(false)
        expect(Collections.isEmpty("")).toBe(true)
        expect(Collections.isEmpty(" ")).toBe(false)
        expect(Collections.isEmpty([])).toBe(true)
        expect(Collections.isEmpty(["a"])).toBe(false)
        expect(Collections.isEmpty(ud)).toBe(true)
    })

    it("isNotEmpty", () => {
        expect(Collections.isNotEmpty("not empty")).toBe(true)
        expect(Collections.isNotEmpty("")).toBe(false)
        expect(Collections.isNotEmpty(" ")).toBe(true)
        expect(Collections.isNotEmpty([])).toBe(false)
        expect(Collections.isNotEmpty(["a"])).toBe(true)
        expect(Collections.isNotEmpty(ud)).toBe(false)
    })
})
