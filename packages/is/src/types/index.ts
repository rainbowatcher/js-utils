import type { objectTypeNames } from "../consts"

export type Primitive = "bigint" | "boolean" | "function" | "null" | "number" | "string" | "symbol" | "undefined"

export type ObjectTypeName = typeof objectTypeNames[number]
