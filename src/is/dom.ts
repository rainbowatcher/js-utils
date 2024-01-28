import { DOM_PROPERTIES_TO_CHECK } from "../consts"
import { isObject, isPlainObject, isString } from "./primitive"

/**
 * Checks if the given value is an HTML element.
 *
 * 1. The value must be an object
 * 2. The value must have the following properties: nodeName, nodeType
 * 3. The value must not have any other properties
 *
 * @param value - The value to be checked.
 * @return Whether the value is an HTML element.
 */
export function isHtmlElement(value: unknown): value is HTMLElement {
    return isObject(value)
      && (value as HTMLElement).nodeType === Node.ELEMENT_NODE
      && isString((value as HTMLElement).nodeName)
      && !isPlainObject(value)
      && DOM_PROPERTIES_TO_CHECK.every(property => property in value)
}