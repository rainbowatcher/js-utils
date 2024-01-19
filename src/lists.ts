export function isEmpty<T>(arrayLike: ArrayLike<T> | undefined) {
    return arrayLike ? arrayLike.length === 0 : true
}

export function isNotEmpty<T>(arrayLike: ArrayLike<T> | undefined) {
    return !isEmpty(arrayLike)
}
