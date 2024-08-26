import { defineConfig } from "tsup"

export default defineConfig({
    clean: true,
    dts: {
        entry: ["src/index.ts"],
        only: true,
    },
    entry: ["src/index.ts"],
    format: ["esm"],
    minify: true,
})
