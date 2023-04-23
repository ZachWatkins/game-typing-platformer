/**
 * This is an event listener class which listens for a subset of event codes from a source and calls a function when the subset changes.
 *
 * @author Zachary K. Watkins
 */
type InputEvent = { code: string }
type HasEventListeners = {
    addEventListener: (type: string, listener: (event: InputEvent) => void) => void,
    removeEventListener: (type: string, listener: (event: InputEvent) => void) => void,
}
type Dispatcher = (code: string, state: boolean) => void
type ObservedCodes = {
    [code: string]: boolean,
}

export function InputController(opts: {
    source: HasEventListeners,
    dispatch: Dispatcher,
    on: string,
    off: string,
    codes: string[],
}) {
    const state = opts.codes.reduce((acc, code) => {
        acc[code] = false
        return acc
    }, {} as ObservedCodes)

    opts.source.addEventListener(opts.on, (event: InputEvent): void => {
        if (state[event.code] === false) {
            state[event.code] = true
            opts.dispatch(event.code, true)
        }
    })

    opts.source.addEventListener(opts.off, (event: InputEvent): void => {
        if (state[event.code] === true) {
            state[event.code] = false
            opts.dispatch(event.code, false)
        }
    })
}
