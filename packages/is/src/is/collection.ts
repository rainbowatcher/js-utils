import { isFunction } from "./primitive"
import { getObjectType } from "../helper"

/**
* Checks if the given value is an array and optionally matches the provided assertion.
*
* @param value - The value to check
* @param [assertion] - Optional assertion function
* @return Whether the value is an array that matches the assertion
*/
export function isArray<T = unknown>(value: unknown, assertion?: (value: T) => value is T): value is T[] {
    if (!Array.isArray(value)) {
        return false
    }

    if (!isFunction(assertion)) {
        return true
    }

    return value.every(element => assertion(element))
}

/**
 * Type guard function to check if the input is a Map object.
 *
 * @param value - the object to be checked
 * @return true if the input is a Map object, false otherwise
 */
export function isMap<Key = unknown, Value = unknown>(value: unknown): value is Map<Key, Value> {
    return getObjectType(value) === "Map"
}

/**
* Checks if the given value is a Set.
*
* @param value - the value to be checked
* @return true if the value is a Set, false otherwise
*/
export function isSet<T = unknown>(value: unknown): value is Set<T> {
    return getObjectType(value) === "Set"
}
