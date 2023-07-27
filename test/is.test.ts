import { describe, expect, it } from "vitest"
import { isAsyncFunction, isDeepEquals, isUndefined } from "../src"

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

describe("isDeepEquals function", () => {
  it("Accurately compare two non-object", () => {
    expect(isDeepEquals(1, 1)).toBe(true)
    expect(isDeepEquals(1, "1")).toBe(false)
    expect(isDeepEquals("hello", "world")).toBe(false)
    expect(isDeepEquals(true, false)).toBe(false)
    expect(isDeepEquals(undefined, null)).toBe(false)
    expect(isDeepEquals(null, null)).toBe(true)
  })

  it("Accurately compare two arrays", () => {
    expect(isDeepEquals([], [])).toBe(true)
    expect(isDeepEquals([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(isDeepEquals([1, 2, 3], [3, 2, 1])).toBe(false)
    expect(isDeepEquals([1, 2, 3], [1, 2])).toBe(false)
    expect(isDeepEquals(["a", "b", "c"], ["a", "b"])).toBe(false)
    expect(isDeepEquals([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }])).toBe(
      true,
    )
    expect(isDeepEquals([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 1 }])).toBe(
      false,
    )
  })

  it("Accurately compare two object", () => {
    expect(isDeepEquals({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true)
    expect(isDeepEquals({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true)
    expect(isDeepEquals({ a: 1, b: 2 }, { a: "1", b: "2" })).toBe(false)
    expect(isDeepEquals({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true)
    expect(isDeepEquals({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false)
    expect(
      isDeepEquals({ a: { b: { c: { d: 1 } } } }, { a: { b: { c: { d: 1 } } } }),
    ).toBe(true)
  })

  it("Compare the attributes of mixed types correctly", () => {
    expect(isDeepEquals({ a: 1, b: [2, 3] }, { a: 1, b: [2, 3] })).toBe(true)
    expect(isDeepEquals({ a: 1, b: [2, 3] }, { a: 1, b: [3, 2] })).toBe(false)
    expect(isDeepEquals({ a: 1, b: [2, 3] }, { a: 1, b: [3, 2], c: "foo" })).toBe(false)
    expect(isDeepEquals([{ id: 1, name: "apple" }], [{ id: 1, name: "apple" }]))
      .toBe(true)
    expect(isDeepEquals({ a: 1, b: [2, 3] }, "apple")).toBe(false)
    expect(isDeepEquals("", { a: 1, b: [2] })).toBe(false)
  })

  it("compare two objects specified by key and return whether they are equal.", () => {
    const obj1 = { a: 1, b: { c: [0, 1] }, d: 2 }
    const obj2 = { d: 3, b: { c: [0, 1] }, a: 1 }
    const keys = ["a", "b"]
    expect(isDeepEquals(obj1, obj2, keys)).toBe(true)
    expect(isDeepEquals(obj1, obj2, ["a", "b", "d"])).toBe(false)
  })

  it("should be able to recognize null and undefined", () => {
    expect(isDeepEquals(null, undefined)).toBe(false)
    expect(isDeepEquals(undefined, null)).toBe(false)
  })

})
