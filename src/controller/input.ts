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

export class InputController {

    code: ObservedCodes = Object.seal({
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false,
        Space: false,
        WKey: false,
        AKey: false,
        SKey: false,
        DKey: false,
    })
    source: HasEventListeners
    dispatch: Dispatcher
    onEvent: string
    offEvent: string

    constructor(opts: {
        source: HasEventListeners,
        dispatch: Dispatcher,
        on: string,
        off: string,
    }) {
        this.source = opts.source
        this.dispatch = opts.dispatch
        this.onEvent = opts.on
        this.offEvent = opts.off
    }

    listen(): void {
        this.source.addEventListener(this.onEvent, this.on)
        this.source.addEventListener(this.offEvent, this.off)
    }

    on(event: InputEvent): void {
        if (this.code.hasOwnProperty(event.code) && !this.code[event.code]) {
            this.code[event.code] = true
            this.dispatch(event.code, true)
        }
    }

    off(event: InputEvent): void {
        if (this.code.hasOwnProperty(event.code) && this.code[event.code]) {
            this.code[event.code] = false
            this.dispatch(event.code, false)
        }
    }
}
