import { defineConfig } from "@rainbowatcher/eslint-config"

export default defineConfig({
    gitignore: true,
    json: true,
    markdown: true,
    style: true,
    typescript: true,
    yaml: true,
}, {
    rules: {
        "perfectionist/sort-objects": "off",
    },
})
