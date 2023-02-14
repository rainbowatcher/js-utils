import { describe, expect, it } from "vitest"
import { Lists } from "../src"

describe("List Utils", () => {
  const ud = undefined
  it("isEmpty", () => {
    expect(Lists.isEmpty("not empty")).toBe(false)
    expect(Lists.isEmpty("")).toBe(true)
    expect(Lists.isEmpty(" ")).toBe(false)
    expect(Lists.isEmpty([])).toBe(true)
    expect(Lists.isEmpty(["a"])).toBe(false)
    expect(Lists.isEmpty(ud)).toBe(true)
  })

  it("isNotEmpty", () => {
    expect(Lists.isNotEmpty("not empty")).toBe(true)
    expect(Lists.isNotEmpty("")).toBe(false)
    expect(Lists.isNotEmpty(" ")).toBe(true)
    expect(Lists.isNotEmpty([])).toBe(false)
    expect(Lists.isNotEmpty(["a"])).toBe(true)
    expect(Lists.isNotEmpty(ud)).toBe(false)
  })
})
