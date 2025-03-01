import { isDate } from "./is"

/**
 * if the return value is true, the attribute will be removed from the object
 */
type FilterFunction = (key: string, value: any) => boolean

type DeepCopyOptions = {
    cycle?: boolean
    filter?: FilterFunction
}

/**
 * Creates a deep copy of the input object, applying a filter function to exclude specific properties.
 *
 * @param input - the input object to be deep copied
 * @param [filter=() => false] - the filter function to exclude specific properties
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

    const keys1 = keys ?? Object.keys(first)
    const keys2 = keys ?? Object.keys(second)

    // Check if both objects have the same number of properties
    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key of keys1) {
        // check if the key exists in both objects, then compare their values
        if (!keys2.includes(key) || !deepEqual((first as Record<string, any>)[key], (second as Record<string, any>)[key])) {
            return false
        }
    }
    return true
}
