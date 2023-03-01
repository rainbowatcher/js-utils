import { isString, isUndefined } from "./is"

export namespace Strings {
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

  export function toUpperCase(str: string | undefined) {
    if (isUndefined(str))
      return undefined

    if (!isString(str))
      throw new TypeError("Strings.toUpperCase accepts only string type parameters")

    return str?.toUpperCase()
  }
}
