import { vol } from "memfs"
import {
    describe,
    expect, it, vi,
} from "vitest"
import { exists, isDir, isDirSync } from "./is"

vi.mock("node:fs")

vol.fromNestedJSON({
    "/repo": {
        "test-dir": null,
        "test-file.txt": "",
    },
})


describe.concurrent("exists", () => {
    it("returns true for an existing file", async () => {
        const filePath = "/repo/test-file.txt"
        await expect(exists(filePath)).resolves.toBeTruthy()
    })

    it("returns false for a non-existent file", async () => {
        const filePath = "/repo/non-existent/file.txt"
        await expect(exists(filePath)).resolves.toBeFalsy()
    })

    it("returns true for an existing directory", async () => {
        const dirPath = "/repo/test-dir"
        await expect(exists(dirPath)).resolves.toBeTruthy()
    })

    it("returns false for a non-existent directory", async () => {
        const dirPath = "/repo/non-existent/dir"
        await expect(exists(dirPath)).resolves.toBeFalsy()
    })

    it("returns false for invalid input (null)", async () => {
        const input = null
        // @ts-expect-error type missmatch
        await expect(exists(input)).resolves.toBeFalsy()
    })

    it("returns false for invalid input (undefined)", async () => {
        const input = undefined
        // @ts-expect-error type missmatch
        await expect(exists(input)).resolves.toBeFalsy()
    })

    it("returns false for invalid input (non-string)", async () => {
        const input = 123
        // @ts-expect-error type missmatch
        await expect(exists(input)).resolves.toBeFalsy()
    })
})

describe.concurrent("isDirSync", () => {
    it("should return true for a valid directory path", () => {
        const dirPath = "/repo/test-dir"
        expect(isDirSync(dirPath)).toBeTruthy()
    })

    it("should return false for a valid file path", () => {
        const filePath = "/repo/test-file.txt"
        expect(isDirSync(filePath)).toBeFalsy()
    })

    it("should return false for a non-existent path", () => {
        const nonExistentPath = "/repo/non-existent-path"
        expect(isDirSync(nonExistentPath)).toBeFalsy()
    })

    it("should return false for an empty path", () => {
        expect(isDirSync("")).toBeFalsy()
    })

    it("should return false for a path with invalid characters", () => {
        const invalidPath = "/repo/invalid:path"
        expect(isDirSync(invalidPath)).toBeFalsy()
    })

    it("should return false for null", () => {
        // @ts-expect-error type missmatch
        expect(isDirSync(null)).toBeFalsy()
    })
})


describe.concurrent("isDir", () => {
    it("should return true for an existing directory", async () => {
        const dirPath = "/repo/test-dir"
        await expect(isDir(dirPath)).resolves.toBeTruthy()
    })

    it("should return false for an existing file", async () => {
        const filePath = "/repo/test-file.txt"
        await expect(isDir(filePath)).resolves.toBeFalsy()
    })

    it("should return false for a non-existing path", async () => {
        const nonExistingPath = "/repo/non-existing-path"
        await expect(isDir(nonExistingPath)).resolves.toBeFalsy()
    })

    it("should return false for an empty path", async () => {
        await expect(isDir("")).resolves.toBeFalsy()
    })

    it("should throw an error for a null or undefined path", async () => {
        await expect(isDir(null as any)).resolves.toBeFalsy()
    })
})
