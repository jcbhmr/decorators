import document from "document"

const isMain = (importMeta: ImportMeta) => {
	if (importMeta.url === document.baseURI) {
		// Must be an inline <script type="module">, so yeah, it's a main module
		return true
	}

	const modules = [...document.scripts].filter((script) => script.type === "module" && script.src.length > 0)
	// Easiest is to check if src matches... BUT this does NOT account for redirects! If a 30X redirect is encountered
	// while loading, the src WebIDL will stay the original, but the import.meta.url will be the final URL! This is
	// an acceptable tradeoff between fetching a bunch, or compromising on is-main accuracy.
	if (modules.some((script) => script.src === importMeta.url)) {
		return true
	}

	return false
}

export { isMain as default }
