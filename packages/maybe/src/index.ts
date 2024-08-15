export type MaybeArray<T> = T | T[]

export type MaybeUndefined<T> = T | undefined

// eslint-disable-next-line ts/no-restricted-types
export type Maybe<T> = null | T | undefined
// eslint-disable-next-line ts/no-restricted-types
export type MaybeNull<T> = null | T

export type MaybeBoolean<T> = boolean | T

export type MaybeString<T> = string | T

export type MaybeNumber<T> = number | T


export type MaybeObject<T> = Record<string, unknown> | T


export type MaybePromise<T> = Promise<T> | T
