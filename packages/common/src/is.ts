export function getTypeName(value: unknown): string | undefined {
    return Object.prototype.toString.call(value).slice(8, -1)
}

export function isDate(value: any): value is Date {
    return getTypeName(value) === "Date"
}

export function isObject(value?: unknown): value is Record<PropertyKey, any> {
    return typeof value === "object" && value !== null
}
