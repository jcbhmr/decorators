import { createRequire } from "node:module"
import process from "node:process"
import { pathToFileURL } from "node:url"

const isMain = (importMeta: ImportMeta) => {
	const require = createRequire(importMeta.url)
	const cliPath = process.argv[1]
	const cliResolvedPath = require.resolve(cliPath)
	const cliUrl = pathToFileURL(cliResolvedPath)
	return String(cliUrl) === importMeta.url
}

export { isMain }
