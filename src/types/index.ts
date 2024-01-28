import type { objectTypeNames } from "../consts"

export type Primitive = "function" | "number" | "string" | "bigint" | "null" | "undefined" | "boolean" | "symbol"

export type ObjectTypeName = typeof objectTypeNames[number];