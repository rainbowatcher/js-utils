import { objectTypeNames } from "../consts"
import { isHtmlElement } from "../is"
import type { ObjectTypeName } from "../types"

/**
 * Returns the type of the given value as a string, or undefined if the type is not recognized.
 *
 * @param value - the value to determine the type of
 * @return the type of the given value, or undefined if the type is not recognized
 */
export function getObjectType(value: unknown): ObjectTypeName | undefined {
    const objectTypeName = Object.prototype.toString.call(value).slice(8, -1)

    if (/HTML\w+Element/.test(objectTypeName) && isHtmlElement(value)) {
        return "HTMLElement"
    }

    if (objectTypeNames.includes(objectTypeName as ObjectTypeName)) {
        return objectTypeName as ObjectTypeName
    }

    return undefined
}