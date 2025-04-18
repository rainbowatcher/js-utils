import { isDate, isObject } from "./is"

export type FilterFunction = (key: string, value: any) => boolean

export type DeepCopyOptions = {
    cycle?: boolean

    /**
     * if the return value is true, the attribute will be removed from the object
     */
    filter?: FilterFunction
}

type IsObject<T> = T extends Record<PropertyKey, any> ? true : false
type IsArray<T> = T extends any[] ? true : false
type HandleUndefined<L, R> = R extends undefined ? L : R
type ArrayElement<T> = T extends Array<infer U> ? U : never

export type DeepCopyResult<T> = IsArray<T> extends true ? Array<DeepCopyResult<ArrayElement<T>>> :
    IsObject<T> extends true
        ? { [K in keyof T]: DeepCopyResult<T[K]> } : T

/**
 * Creates a deep copy of the input object, applying a filter function to exclude specific properties.
 *
 * @param input - the input object to be deep copied
 * @param opts - options to control copy behaviors @see DeepCopyOptions
 * @return the deep copied object with excluded properties
 */
export function deepCopy<T>(input: T, opts?: DeepCopyOptions): DeepCopyResult<T> {
    const {
        cycle = true,
        filter = () => false,
    } = opts ?? {}

    if (typeof input !== "object" || input === null) {
        return input as DeepCopyResult<T>
    }

    if (Array.isArray(input)) {
        return input.map(item => deepCopy(item, opts)) as DeepCopyResult<T>
    }

    const output: Record<string, unknown> = {}

    for (const key in input) {
        if (!filter(key, input[key])) {
            // judge if the value is cycle ref
            if (input[key] === input) {
                if (cycle) {
                    output[key] = output
                }
                continue
            }

            output[key] = deepCopy(input[key], opts)
        }
    }

    return output as DeepCopyResult<T>
}

/**
 * Check if two objects are deeply equal.
 *
 * @param first - the first object to compare
 * @param second - the second object to compare
 * @param [keys] - keys of the object properties to compare
 * @return true if the objects are deeply equal, false otherwise
 */
export function deepEqual(first: unknown, second: unknown, keys?: string[]): boolean {
    // Check if both objects are null or undefined
    if (!first || !second) {
        return first === second
    }

    // Compare types and values of non-object properties
    // number / string / symbol / boolean / bigint
    if (typeof first !== "object" || typeof second !== "object") {
        return first === second
    }

    // Compare arrays
    if (Array.isArray(first) && Array.isArray(second)) {
        if (first.length === second.length) {
            // Compare arrays
            return first.every((item, index) => deepEqual(item, second[index]))
        } else {
            return false
        }
    }

    if (isDate(first) && isDate(second)) {
        return first.getTime() === second.getTime()
    }

    // Compare objects
    // check if both objects have the same constructor
    if (first.constructor !== second.constructor) {
        return false
    }

    // Check if both objects have the same number of properties
    if (Object.keys(first).length !== Object.keys(second).length) {
        return false
    }

    const keys1 = keys ?? Object.keys(first)
    const keys2 = keys ?? Object.keys(second)

    for (const key of keys1) {
        // check if the key exists in both objects, then compare their values
        if (!keys2.includes(key) || !deepEqual((first as Record<string, any>)[key], (second as Record<string, any>)[key])) {
            return false
        }
    }
    return true
}

export type Composer<L extends Record<PropertyKey, any> = any, R extends Record<PropertyKey, any> = any> = (
    leftValue: L[keyof L],
    rightValue: R[keyof R],
    key: keyof L & keyof R,
    left: L,
    right: R
) => any

export type MergeWithOptions<L extends Record<PropertyKey, any> = any, R extends Record<PropertyKey, any> = any> = {
    composer?: Composer<L, R>

    /**
     * if true, undefined value in left will be ignored
     */
    ignoreUndefined?: boolean
}

export type MergedType<L, R> =
  IsObject<L> extends true
      ? IsObject<R> extends true
          ? {
              [K in keyof L | keyof R]:
              K extends keyof R
                  ? R[K] extends undefined
                      ? K extends keyof L
                          ? L[K]
                          : undefined
                      : R[K]
                  : K extends keyof L
                      ? L[K]
                      : never
          }
          : HandleUndefined<L, R>
      : HandleUndefined<L, R>

/**
 * Merges two plain objects, using the right object's value if defined,
 * and allowing custom merge behavior with a composer function.
 *
 * @param left - The left object to merge into.
 * @param right - The right object to merge from.
 * @param options - An optional function or options object to customize the merge behavior. @see MergeWithOptions
 * @returns A new object with the merged properties.
 */
export function mergeWith<L extends Record<PropertyKey, any>, R extends Record<PropertyKey, any>>(
    left: L,
    right: R,
    options?: Composer<L, R> | MergeWithOptions<L, R>,
): MergedType<L, R> {
    const { composer, ignoreUndefined = false } = typeof options === "function" ? { composer: options } : options ?? {}

    if (!isObject(left) || !isObject(right)) {
        return (right ?? left) as MergedType<L, R>
    }

    const result = Object.create(Object.getPrototypeOf(left))
    const _left = ignoreUndefined
        ? Object.fromEntries(Object.entries(left).filter(([_, value]) => value !== undefined))
        : left
    Object.assign(result, _left)

    const rightKeys = Object.keys(right) as Array<keyof R>
    for (const key of rightKeys) {
        if (Object.prototype.hasOwnProperty.call(right, key)) {
            const leftValue = left[key]
            const rightValue = right[key]

            const composered = composer?.(leftValue, rightValue, key, left, right)
            if (composered) {
                result[key] = composered
            } else if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
                // Use right array if it's not empty, otherwise use left
                result[key] = rightValue.length > 0 ? rightValue : leftValue
            } else if (isObject(leftValue) && isObject(rightValue)) {
                if (rightValue === left || rightValue === right) {
                    throw new Error("Detected circular reference in mergeWith, You must handle it in composer manually")
                }
                result[key] = mergeWith(
                    leftValue as Record<PropertyKey, any>,
                    rightValue as Record<PropertyKey, any>,
                    options, // Pass the original options down
                ) as any
            } else if (hasValue(rightValue)) {
                // Prefer right value if it has value
                result[key] = rightValue
            } else if (!hasValue(leftValue)) {
                // If left also has no value (both are null/undefined/empty), use right's value (which is null/undefined)
                result[key] = rightValue
            }
            // If rightValue has no value but leftValue does, keep leftValue (already assigned via Object.assign)
        }
    }

    return result as MergedType<L, R>
}

export function hasValue(value?: unknown): boolean {
    if (value === null || value === undefined) {
        return false
    }
    if (typeof value === "number"
        || typeof value === "bigint"
        || typeof value === "boolean"
        || typeof value === "function"
        || typeof value === "symbol"
        || typeof value === "string"
        || isDate(value)
    ) {
        return true
    }
    if (Array.isArray(value)) {
        return value.length > 0
    } else if (isObject(value)) {
        return Object.keys(value)?.length > 0
    }
    return false
}
