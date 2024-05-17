import { getObjectType } from "../helper"

/**
 * Checks if the given value is undefined.
 *
 * @param value - The value to be checked
 * @return Returns true if the value is undefined, false otherwise
 */
export function isUndefined(value: unknown): value is undefined {
    return value === undefined
}

/**
* Checks if the given value is null.
*
* @param value - The value to be checked
* @returns Returns true if the value is null, false otherwise
*/
// eslint-disable-next-line ts/ban-types
export function isNull(value: unknown): value is null {
    return value === null
}

/**
 * Checks if the given value is a boolean.
 *
 * @param value - The value to be checked.
 * @return Whether the value is a boolean or not.
 */
export function isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean"
}

/**
 * Checks if the value is a number.
 *
 * @param value - the value to be checked
 * @return true if the value is a number, false otherwise
 */
export function isNumber(value: unknown): value is number {
    return typeof value === "number"
}

/**
* Checks if the given value is a function.
*
* @param value - the value to be checked
* @returns Returns true if the value is a function, false otherwise
*/
// eslint-disable-next-line ts/ban-types
export function isFunction(value: unknown): value is Function {
    return typeof value === "function"
}

/**
* Checks if the given value is an object.
*
* 1. The value must be not null
* 2. The value's type must be "object" or "function"
*
* @param value - the value to be checked
* @return true if the value is an object, false otherwise
*/
// eslint-disable-next-line ts/ban-types
export function isObject(value: unknown): value is object {
    return !isNull(value) && typeof value === "object" || isFunction(value)
}

/**
* Checks if the given value is a string.
*
* just check if the type of value is string
*
* @param value - The value to be checked.
* @return Returns true if the value is a string, false otherwise.
*/
export function isString(value: unknown): value is string {
    return typeof value === "string"
}


/**
 * Checks if the input value is a Date.
 *
 * @param value - the input value to be checked
 * @return true if the input is a Date, false otherwise
 */
export function isDate(value: any): value is Date {
    return getObjectType(value) === "Date"
}

/**
 * Checks if the given function is an asynchronous function.
 *
 * @param fn - The function to check
 * @return Whether the function is asynchronous or not
 */
export function isAsyncFunction<T = unknown>(value: unknown): value is ((...args: any[]) => Promise<T>) {
    return getObjectType(value) === "AsyncFunction"
}

/**
 * Checks if the given value is a plain object.
 *
 * 1. The value must be an object and is not null
 * 2. The value must not have any prototype or it's prototype equals to Object.prototype or it's grandparent prototype is null
 * 3. The value must not have the Symbol.toStringTag or Symbol.iterator properties
 *
 * @param value - The value to be checked.
 * @return Whether the value is a plain object.
 */
export function isPlainObject<Value = unknown>(value: unknown): value is Record<PropertyKey, Value> {
    if (!isObject(value) || isNull(value)) {
        return false
    }

    const prototype = Object.getPrototypeOf(value)

    return (isNull(prototype) || prototype === Object.prototype || isNull(Object.getPrototypeOf(prototype)))
        && !(Symbol.toStringTag in value)
        && !(Symbol.iterator in value)
}
