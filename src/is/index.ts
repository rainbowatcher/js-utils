import { isAsyncFunction, isBoolean, isDate, isFunction, isNull, isNumber, isObject, isPlainObject, isString, isUndefined } from "./primitive"
import { isArray, isMap, isSet } from "./collection"
import { isHtmlElement } from "./dom"

export const is = {
    array: isArray,
    asyncFunction: isAsyncFunction,
    boolean: isBoolean,
    date: isDate,
    function: isFunction,
    htmlElement: isHtmlElement,
    map: isMap,
    null: isNull,
    number: isNumber,
    object: isObject,
    plainObject: isPlainObject,
    set: isSet,
    string: isString,
    undefined: isUndefined,
}

export * from "./primitive"
export * from "./dom"
export * from "./collection"

