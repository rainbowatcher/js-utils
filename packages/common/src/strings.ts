/**
   * checks if a string is empty or not
   * @param str input string
   * @param trim trim white space in string
   * @returns true for empty false for not
   */
export function isEmpty(str: string | undefined, trim = false): boolean {
    if (str === undefined || str === null) return true

    if (typeof str !== "string") {
        throw new TypeError("Strings.isEmpty accepts only string type parameters")
    }
    return trim ? str.trim().length === 0 : str.length === 0
}

export function isNotEmpty(str: string | undefined, trim = false): boolean {
    return !isEmpty(str, trim)
}
