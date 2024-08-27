import path from "node:path"
import process from "node:process"
import normalize from "./normalize"

/**
 * Returns the absolute path of the given input path.
 *
 * @param inputPath - the path to be converted to absolute
 * @param cwd - the current working directory
 * @return the absolute path
 */
function toAbsolute(inputPath: string, cwd = process.cwd()) {
    if (process.platform !== "win32" && /^[a-z]:/i.test(inputPath?.slice(0, 2))) {
        return normalize(inputPath)
    }
    const absolutePath = path.isAbsolute(inputPath) ? inputPath : path.join(cwd, inputPath)
    return normalize(absolutePath)
}


export default toAbsolute
