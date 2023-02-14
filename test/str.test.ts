import { describe, expect, it } from "vitest"
import { Strings } from "../src"

describe("String Utils", () => {
  const ud = undefined
  it("isEmpty", () => {
    expect(Strings.isEmpty("not empty")).toBe(false)
    expect(Strings.isEmpty("")).toBe(true)
    expect(Strings.isEmpty(" ")).toBe(false)
    expect(Strings.isEmpty(" ", true)).toBe(true)
    expect(Strings.isEmpty(ud)).toBe(true)
  })

  it("isNotEmpty", () => {
    expect(Strings.isNotEmpty("not empty")).toBe(true)
    expect(Strings.isNotEmpty("")).toBe(false)
    expect(Strings.isNotEmpty(" ")).toBe(true)
    expect(Strings.isNotEmpty(" ", true)).toBe(false)
    expect(Strings.isNotEmpty(ud)).toBe(false)
  })
})
