import { getObjectType } from "../helper"

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