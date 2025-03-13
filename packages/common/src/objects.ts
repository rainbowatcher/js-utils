import { isDate } from "./is"

export type FilterFunction = (key: string, value: any) => boolean

export type DeepCopyOptions = {
    cycle?: boolean

    /**
     * if the return value is true, the attribute will be removed from the object
     */
    filter?: FilterFunction
}

/**
 * Creates a deep copy of the input object, applying a filter function to exclude specific properties.
 *
 * @param input - the input object to be deep copied
 * @param opts - options to control copy behaviors @see DeepCopyOptions
 * @return the deep copied object with excluded properties
 */
export function deepCopy<T, U>(input: T, opts?: DeepCopyOptions): U {
    const {
        cycle = true,
        filter = () => false,
    } = opts ?? {}

    if (typeof input !== "object" || input === null) {
        return input as unknown as U
    }

    if (Array.isArray(input)) {
        return input.map(item => deepCopy(item, opts)) as unknown as U
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

    return output as U
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

export type Composer<L = any, R = any> = (leftValue: L[keyof L], rightValue: R[keyof R], key: PropertyKey, left: L, right: R) => unknown

/**
 * Merges two plain objects, using the right object's value if defined,
 * and allowing custom merge behavior with a composer function.
 *
 * @param left - The left object to merge into.
 * @param right - The right object to merge from.
 * @param composer - An optional function to customize the merge behavior.
 * @returns A new object with the merged properties.
 */
export function mergeWith<L extends Record<PropertyKey, any>, R extends undefined>(left: L, right: R, composer?: Composer<L, R>): L
export function mergeWith<L extends undefined, R extends Record<PropertyKey, any>>(left: L, right: R, composer?: Composer<L, R>): R
export function mergeWith<L extends Record<PropertyKey, any>, R extends Record<PropertyKey, any>>(left: L, right: R, composer?: Composer<L, R>): L & R

export function mergeWith<L extends Record<PropertyKey, any>, R extends Record<PropertyKey, any>>(
    left: L,
    right: R,
    composer?: Composer<L, R>,
): L | (L & R) | R {
    if (!isObject(left) || !isObject(right)) {
        return left ?? right
    }
    const result: Record<PropertyKey, any> = { ...left }
    const rightKeys = Object.keys(right) as Array<keyof R>
    for (const key of rightKeys) {
        if (Object.prototype.hasOwnProperty.call(right, key)) {
            const leftValue = left[key]
            const rightValue = right[key]

            const composered = composer?.(leftValue, rightValue, key, left, right)
            if (composered) {
                result[key] = composered
            } else if (isObject(leftValue) && isObject(rightValue)) {
                result[key] = mergeWith(leftValue as Record<PropertyKey, any>, rightValue as Record<PropertyKey, any>, composer)
            } else if (rightValue !== undefined) {
                result[key] = rightValue
            }
        }
    }

    return result
}

export function isObject(value?: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null
}
