// Pick on of the three isMain implementations for browser, Node, or Deno
import isMain from "is-main"

const main = (importMeta: ImportMeta) => {
	return (function$: Function) => {
		if (isMain(importMeta)) {
			// Hold off on execution to let other sync initializations take place
			queueMicrotask(function$)
		}

		return function$
	}
}

export { main as default }
