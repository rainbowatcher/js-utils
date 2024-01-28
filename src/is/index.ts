import { isArray, isAsyncFunction, isBoolean, isDate, isFunction, isNull, isNumber, isObject, isPlainObject, isString, isUndefined } from "./primitive"
import { isMap, isSet } from "./collection"
import { isHtmlElement } from "./dom"

export const is = {
    number: isNumber,
    string: isString,
    boolean: isBoolean,
    null: isNull,
    undefined: isUndefined,
    object: isObject,
    array: isArray,
    map: isMap,
    set: isSet,
    date: isDate,
    function: isFunction,
    asyncFunction: isAsyncFunction,
    plainObject: isPlainObject,
    htmlElement: isHtmlElement,
}

export * from "./primitive"
export * from "./dom"
export * from "./collection"

