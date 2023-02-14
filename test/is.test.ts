import { describe, expect, it } from "vitest"
import { isUndefined } from "../src"

describe("Is Utils", () => {
  const ud = undefined
  it("isUndefined", () => {
    expect(isUndefined(ud)).toBe(true)
  })
})
