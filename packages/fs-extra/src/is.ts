import fs from "node:fs"

/**
 * Checks if a given path exists.
 *
 * @param inputPath - The path to check for existence.
 * @return Whether the path exists or not.
 */
export async function exists(inputPath: string) {
    try {
        await fs.promises.access(inputPath, fs.constants.F_OK)
        return true
    } catch {
        return false
    }
}

/**
 * Checks if a given path is a directory.
 *
 * @param inputPath - The path to check.
 * @return Whether the path is a directory.
 */
export async function isDir(inputPath: string) {
    const isExists = await exists(inputPath)
    if (!isExists) return false
    const stat = await fs.promises.stat(inputPath)
    return stat.isDirectory()
}


/**
 * Checks if a given path is a file.
 *
 * @param inputPath - The path to check.
 * @return Whether the path is a file.
 */
export async function isFile(inputPath: string) {
    const isExists = await exists(inputPath)
    if (!isExists) return false
    const stat = await fs.promises.stat(inputPath)
    return stat.isFile()
}


/**
 * Checks if a path is a directory.
 *
 * @example
 * const isDir = await isDirSync("./")
 * // isDir === true
 *
 * @param inputPath - The path to check.
 * @return Whether the path is a directory.
 */
export function isDirSync(inputPath: string): boolean {
    return fs.existsSync(inputPath) && fs.statSync(inputPath).isDirectory()
}


/**
 * Checks if a file exists.
 *
 * @example
 * const isFile = await isFileSync("./package.json")
 * // isFile === true
 *
 * @param inputPath - The absolute path to check.
 * @return Whether the file exists.
 */
export function isFileSync(inputPath: string): boolean {
    return fs.existsSync(inputPath) && fs.statSync(inputPath).isFile()
}
