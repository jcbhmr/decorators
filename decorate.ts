import flowRight from "npm:lodash.flowright"

// Unsure how to properly type this function...
/**
 * Emulate @decorator() style @-syntax with a wrapper function. Just a renamed flowRight() function for better semantics.
 *
 * @example
 * const value = decorate(
 *     boxed(),
 *     readOnly({ deep: true }),
 *     log(console.debug),
 * )({ userOptions: { ... } })
 */
const decorate = flowRight

export { decorate as default }
