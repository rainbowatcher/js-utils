import { describe, expect, it } from "vitest"
import { isAsyncFunction, isUndefined } from "../src"

describe("Is Utils", () => {
  const ud = undefined
  it("isUndefined", () => {
    expect(isUndefined(ud)).toBe(true)
    expect(isUndefined(1)).toBe(false)
  })

  it("isAsyncFunction", () => {
    const func0 = () => {}
    const asyncFunc0 = async () => {}
    expect(isAsyncFunction(ud)).toBe(false)
    expect(isAsyncFunction(func0)).toBe(false)
    expect(isAsyncFunction(asyncFunc0)).toBe(true)
  })
})
