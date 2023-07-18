export function isUndefined(obj: any) {
  return typeof obj === "undefined"
}

export function isAsyncFunction(fn?: (...args: any) => any) {
  if (!fn)
    return false
  return Object.getPrototypeOf(fn)[Symbol.toStringTag] === "AsyncFunction"
}
