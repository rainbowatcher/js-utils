import { expect, it, suite } from "vitest"
import { validateParamType } from "../packages/is/src/validater"

function foo<T>(arg: T) {
    validateParamType(arg, "string")
}

const a: any = "string"
const b: any = undefined

suite("Validater", () => {
    it("validateParamType", () => {
        expect(() => { foo<string>("string") }).toMatchInlineSnapshot("[Function]")
        expect(() => { foo<string>(a) }).toMatchInlineSnapshot("[Function]")
        expect(() => { foo<string>(b) }).toThrowErrorMatchingInlineSnapshot("[TypeError: Parameter type incorrect.]")
        expect(() => { foo<string>(b) }).toThrow(TypeError)
    })
})
