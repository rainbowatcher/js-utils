export namespace Strings {
  export function isEmpty(str: string | undefined, trim = false): boolean {
    if (!str) {
      return true
    }

    return trim ? str.trim().length === 0 : str.length === 0
  }

  export function isNotEmpty(str: string | undefined, trim = false): boolean {
    return !isEmpty(str, trim)
  }
}
