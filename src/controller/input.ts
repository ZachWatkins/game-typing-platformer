/**
 * This is an event listener component which listens for a subset of event codes from a source and calls a function when the subset changes.
 *
 * @author Zachary K. Watkins
 */
type HasEventListeners = {
    addEventListener: (type: string, listener: (event: { code: string }) => void) => void,
    removeEventListener: (type: string, listener: (event: { code: string }) => void) => void,
}

export function InputController(opts: {
    source: HasEventListeners,
    codes: string[],
    onEvent: string,
    offEvent: string,
    dispatch: (code: string, state: boolean) => void,
}) {
    const state: { [code: string]: boolean } = {}
    for (let i = opts.codes.length - 1; i >= 0; i--) {
        state[opts.codes[i]] = false
    }

    opts.source.addEventListener(opts.onEvent, (event: { code: string }): void => {
        if (state[event.code] === false) {
            state[event.code] = true
            opts.dispatch(event.code, true)
        }
    })

    opts.source.addEventListener(opts.offEvent, (event: { code: string }): void => {
        if (state[event.code] === true) {
            state[event.code] = false
            opts.dispatch(event.code, false)
        }
    })
}
