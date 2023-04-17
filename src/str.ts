import { isUndefined } from "./is"

export namespace Strings {
  export function isString(obj: any) {
    return typeof obj === "string"
  }

  /**
   * checks if a string is empty or not
   * @param str input string
   * @param trim trim white space in string
   * @returns true for empty false for not
   */
  export function isEmpty(str: string | undefined, trim = false): boolean {
    if (isUndefined(str))
      return true

    if (!isString(str))
      throw new TypeError("Strings.isEmpty accepts only string type parameters")

    return trim ? str!.trim().length === 0 : str!.length === 0
  }

  export function isNotEmpty(str: string | undefined, trim = false): boolean {
    return !isEmpty(str, trim)
  }

  /**
   * Takes a parameter str that can either be a string or undefined type and returns the parameter str in upper case letters
   */
  export function toUpperCase(str: string | undefined) {
    if (isUndefined(str))
      return undefined

    if (!isString(str))
      throw new TypeError("Strings.toUpperCase accepts only string type parameters")

    return str?.toUpperCase()
  }
}
