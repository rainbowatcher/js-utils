import path from "node:path"
import { describe, expect, it } from "vitest"
import { normalize } from "./index"
import { WIN32_DEVICE_NS, WIN32_FILE_NS } from "./constants"

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
        expect(normalize("path/to/directory///")).toBe("path/to/directory")
    })

    it("should replace multiple slashes with single slash", () => {
        expect(normalize("path//to/directory")).toBe("path/to/directory")
        expect(normalize(String.raw`path\\to\directory`)).toBe("path/to/directory")
        expect(normalize("path///to////directory")).toBe("path/to/directory")
    })

    it("should handle mixed separators", () => {
        expect(normalize(String.raw`path/to\\directory`)).toBe("path/to/directory")
        expect(normalize(String.raw`path\\to/directory`)).toBe("path/to/directory")
        expect(normalize(String.raw`path\\/to\\/directory`)).toBe("path/to/directory")
    })

    it("should handle windows path", () => {
        expect(normalize(String.raw`C:\current\working\directory`)).toBe("C:/current/working/directory")
    })

    it("should handle windows path with trailing slash", () => {
        expect(normalize(String.raw`C:\current\working\directory\\`)).toBe("C:/current/working/directory")
    })
    it("should handle windows path with multiple separators", () => {
        expect(normalize(String.raw`C:\\current\\\working\\directory`)).toBe("C:/current/working/directory")
    })
    it("should handle windows path with mixed separators", () => {
        expect(normalize(String.raw`C:/current\\working\\directory`)).toBe("C:/current/working/directory")
    })
    it("should handle windows path with namespace", () => {
        expect(normalize(String.raw`${WIN32_FILE_NS}C:\current\working\directory`)).toBe("//?/C:/current/working/directory")
        expect(normalize(String.raw`${WIN32_DEVICE_NS}C:\current\working\directory`)).toBe("//./C:/current/working/directory")
    })

    it("should handle complex cases", () => {
        expect(normalize(String.raw`${WIN32_FILE_NS}C:\\current\\\working\\directory\\`)).toBe("//?/C:/current/working/directory")
        expect(normalize(String.raw`${WIN32_DEVICE_NS}C://current//working\\directory`)).toBe("//./C:/current/working/directory")
    })
})
