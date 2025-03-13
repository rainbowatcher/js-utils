import { describe, expect, it } from "vitest"
import { Collections } from "."

describe("List Utils", () => {
    const ud = undefined
    it("isEmpty", () => {
        expect(Collections.isEmpty("not empty")).toBeFalsy()
        expect(Collections.isEmpty("")).toBeTruthy()
        expect(Collections.isEmpty(" ")).toBeFalsy()
        expect(Collections.isEmpty([])).toBeTruthy()
        expect(Collections.isEmpty(["a"])).toBeFalsy()
        expect(Collections.isEmpty(new Int8Array())).toBeTruthy()
        expect(Collections.isEmpty(ud)).toBeTruthy()
    })

    it("isNotEmpty", () => {
        expect(Collections.isNotEmpty("not empty")).toBeTruthy()
        expect(Collections.isNotEmpty("")).toBeFalsy()
        expect(Collections.isNotEmpty(" ")).toBeTruthy()
        expect(Collections.isNotEmpty([])).toBeFalsy()
        expect(Collections.isNotEmpty(["a"])).toBeTruthy()
        expect(Collections.isNotEmpty(new Int8Array())).toBeFalsy()
        expect(Collections.isNotEmpty(ud)).toBeFalsy()
    })
})
