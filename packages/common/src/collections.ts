/**
 * check array like object is empty
 * @param arrayLike the array like object that has length property
 * @returns true if length equals 0, true if object is undefined
 */
export function isEmpty<T>(arrayLike: ArrayLike<T> | undefined) {
    return arrayLike ? arrayLike.length === 0 : true
}

/**
 * check array like object is not empty
 * @param arrayLike the array like object that has length property
 * @returns true if length great than 0, false if object is undefined
 */
export function isNotEmpty<T>(arrayLike: ArrayLike<T> | undefined) {
    return arrayLike ? arrayLike.length > 0 : false
}
