import { isArray, isMap, isSet } from "./collection"
import { isHtmlElement } from "./dom"
import {
    isAsyncFunction, isBoolean, isDate, isFunction, isNull, isNumber,
    isObject, isPlainObject, isString, isUndefined,
} from "./primitive"

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

export * from "./collection"
export * from "./dom"
export * from "./primitive"
