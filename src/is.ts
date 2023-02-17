export function isUndefined(obj: any) {
  return typeof obj === "undefined"
}

export const isAsyncFunction = (fn: Function | undefined) => {
  if (!fn)
    return false
  return Object.getPrototypeOf(fn)[Symbol.toStringTag] === "AsyncFunction"
}
