const main = (importMeta: ImportMeta) => {
	return (function$: Function) => {
		;(async () => {
			let isMain: (importMeta: ImportMeta) => boolean
			if ("window" in globalThis && "document" in globalThis) {
				;({ default: isMain } = await import("/is-main/-.browser.ts"))
			} else if ("process" in globalThis) {
				;({ default: isMain } = await import("/is-main/-.node.ts"))
			} else if ("Deno" in globalThis) {
				;({ default: isMain } = await import("/is-main/-.deno.ts"))
			} else {
				// Unknown env, so just assume always NOT the main module
				isMain = () => false
			}
		})()
		if (isMain(importMeta)) {
			// Hold off on execution to let other sync initializations take place
			queueMicrotask(function$)
		}

		return function$
	}
}

export { main as default }
