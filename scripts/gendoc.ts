import spawn from "nano-spawn"
import * as td from "typedoc"
import type { MarkdownThemeContext } from "typedoc-plugin-markdown"

const options = {
    cleanOutputDir: true,
    // disableSources: true,
    entryPoints: ["packages/**"],
    entryPointStrategy: td.EntryPointStrategy.Packages,
    excludeScopesInPaths: true,
    hideBreadcrumbs: false,
    hideGroupHeadings: false,
    hidePageHeader: true,
    includeVersion: true,
    indexFormat: "list",
    interfacePropertiesFormat: "table",
    mergeReadme: true,
    outputFileStrategy: "modules",
    packageOptions: {
        entryPoints: ["src/index.ts"],
        readme: "none",
    },
    parametersFormat: "table",
    plugin: ["typedoc-plugin-markdown"],
    readme: "none",
    typeDeclarationFormat: "table",
    typeDeclarationVisibility: "verbose",
    useCodeBlocks: false,
}

const app = await td.Application.bootstrapWithPlugins(options)

const project = await app.convert()

if (project) {
    // @ts-expect-error field not exists
    app.renderer.markdownHooks.on("page.end", (ctx: MarkdownThemeContext) => {
        console.log("page end", ctx.page.url)
        console.log("page end", ctx.page.filename)
    })
    await app.generateOutputs(project)
    await spawn("eslint", ["docs", "--fix"])
}
