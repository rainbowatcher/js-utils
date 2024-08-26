import path from "node:path"
import process from "node:process"
import { WIN32_DEVICE_NS, WIN32_FILE_NS } from "./constants"


/**
 * Returns the absolute path of the given input path.
 *
 * @param inputPath - the path to be converted to absolute
 * @param cwd - the current working directory
 * @return the absolute path
 */
export function toAbsolute(inputPath: string, cwd = process.cwd()) {
    if (process.platform !== "win32" && /^[a-z]:/i.test(inputPath?.slice(0, 2))) {
        return normalize(inputPath)
    }
    const absolutePath = path.isAbsolute(inputPath) ? inputPath : path.join(cwd, inputPath)
    return normalize(absolutePath)
}


/**
 * Normalizes a given file path to a consistent format.
 *
 * @example
 * ```js
 * normalize("C:\\current\\working\\directory")
 * // "C:/current/working/directory"
 * normalize("/current\\working//directory")
 * // "/current/working/directory"
 * ```
 *
 * ref: <https://github.com/lint-staged/lint-staged/blob/master/lib/normalizePath.js>
 * @param inputPath - the path to be normalized
 * @return the normalized path
 */
export function normalize(inputPath: string) {
    if (!inputPath) return inputPath

    if (inputPath === path.posix.sep || inputPath === path.win32.sep) {
        return path.posix.sep
    }

    let normalized = inputPath.replaceAll(/[/\\]+/g, "/")

    /** Handle win32 Namespaced paths by changing e.g. \\.\ to //./ */
    if (inputPath.startsWith(WIN32_FILE_NS) || inputPath.startsWith(WIN32_DEVICE_NS)) {
        normalized = normalized.replace(/^\/(\.|\?)/, "//$1")
    }

    /** Remove trailing slash */
    if (normalized.endsWith(path.posix.sep)) {
        normalized = normalized.slice(0, -1)
    }

    return normalized
}
