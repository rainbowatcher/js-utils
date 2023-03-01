import { describe, expect, it } from "vitest"
import { isAsyncFunction, isString, isUndefined } from "../src"

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

  it("isString", () => {
    const func = () => {}
    const asyncFunc = async () => {}
    expect(isString("string")).toBe(true)
    expect(isString(ud)).toBe(false)
    expect(isString(func)).toBe(false)
    expect(isString(asyncFunc)).toBe(false)
    expect(isString(0)).toBe(false)
    expect(isString(NaN)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString({})).toBe(false)
  })
})
