export function isUndefined(obj: any) {
  return typeof obj === "undefined"
}

export function isAsyncFunction(fn?: (...args: any) => any) {
  if (!fn)
    return false
  return Object.getPrototypeOf(fn)[Symbol.toStringTag] === "AsyncFunction"
}

export function isDeepEquals(first: any, second: any, keys?: string[]): boolean {
  // Check if both objects are null
  if (!first || !second) {
    return first === second
  }

  // Compare types and values of non-object properties
  if (typeof first !== "object" || typeof second !== "object") {
    return first === second
  }

  // Compare arrays
  if (Array.isArray(first) && Array.isArray(second)) {
    if (first.length !== second.length) {
      return false
    } else {
    // Compare arrays
      return first.every((item, index) => isDeepEquals(item, second[index]))
    }
  }

  // Compare objects
  const keys1 = keys ?? Object.keys(first)
  const keys2 = keys ?? Object.keys(second)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (const key of keys1) {
    if (!keys2.includes(key) || !isDeepEquals(first[key], second[key])) {
      return false
    }
  }
  return true
}