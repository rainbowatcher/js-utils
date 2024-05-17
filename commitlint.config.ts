import type { UserConfig } from "@commitlint/types"

const conf: UserConfig = {
    rules: {
        "scope-empty": [0, "never"],
        "scope-enum": [2, "always", ["ci", "build"]],
        "type-enum": [
            2,
            "always",
            [
                "build",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test",
                "chore",
            ],
        ],
    },
}

export default conf
