import path from "node:path"
import { describe, expect, it } from "vitest"
import { normalize, toAbsolute } from "./index"
import { WIN32_DEVICE_NS, WIN32_FILE_NS } from "./constants"

describe("toAbsolute", () => {
    const cwd = "/current/working/directory"
    it("should return absolute path when absolute path is given", () => {
        const inputPath = "/absolute/path"
        const result = toAbsolute(inputPath)
        expect(result).toBe(inputPath)
    })

    it("should return absolute path when relative path is given", () => {
        const inputPath = "relative/path"
        const cwd = "/current/working/directory"
        const result = toAbsolute(inputPath, cwd)
        expect(result).toBe("/current/working/directory/relative/path")
    })

    it("should return current working directory when cwd is given", () => {
        const cwd = "/current/working/directory"
        const result = toAbsolute("", cwd)
        expect(result).toBe(cwd)
    })

    it("should throw error when empty string is given", () => {
        const abs = toAbsolute("", cwd)
        expect(abs).toBe(cwd)
    })

    it("should throw error when undefined is given", () => {
        // @ts-expect-error type miss match
        expect(() => toAbsolute(undefined)).toThrowErrorMatchingInlineSnapshot(`[TypeError: The "path" argument must be of type string. Received undefined]`)
    })

    it("windows relative path", () => {
        const cwd = String.raw`C:\current\working\directory`
        const result = toAbsolute("relative/path", cwd)
        expect(result).toBe(String.raw`C:/current/working/directory/relative/path`)
    })

    it("windows absolute path", () => {
        const cwd = String.raw`C:\current\working\directory`
        const result = toAbsolute(String.raw`C:\current\working\directory`, cwd)
        expect(result).toBe(String.raw`C:/current/working/directory`)
    })
})


describe("normalize", () => {
    it("should return empty string for empty input", () => {
        expect(normalize("")).toBe("")
    })

    it("should return posix sep for posix root directory", () => {
        expect(normalize(path.posix.sep)).toBe(path.posix.sep)
    })

    it("should return posix sep for win32 root directory", () => {
        expect(normalize(path.win32.sep)).toBe(path.posix.sep)
    })

    it("should handle win32 Namespaced paths", () => {
        expect(normalize(`${WIN32_FILE_NS}path/to/file`)).toBe("//?/path/to/file")
        expect(normalize(`${WIN32_DEVICE_NS}path/to/file`)).toBe("//./path/to/file")
    })

    it("should remove trailing slash", () => {
        expect(normalize("path/to/directory/")).toBe("path/to/directory")
    })

    it("should replace multiple slashes with single slash", () => {
        expect(normalize("path//to/directory")).toBe("path/to/directory")
        expect(normalize(String.raw`path\\to\directory`)).toBe("path/to/directory")
    })
})
