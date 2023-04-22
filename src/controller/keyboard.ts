type InputState = {
    [code: string]: boolean,
}

export class Keyboard {

    source: HasEventListeners

    listening: boolean = false

    key: InputState = Object.seal({
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

    dispatch: (state: InputState) => void

    constructor(source: HasEventListeners, dispatch: (state: InputState) => void) {
        this.source = source
        this.dispatch = dispatch
    }

    keydown(event: InputEvent): void {
        if (this.key.hasOwnProperty(event.code) && !this.key[event.code]) {
            this.key[event.code] = true
            this.dispatch(this.key)
        }
    }

    keyup(event: InputEvent): void {
        if (this.key.hasOwnProperty(event.code) && this.key[event.code]) {
            this.key[event.code] = false
            this.dispatch(this.key)
        }
    }

    listen(): void {
        if (!this.listening) {
            this.source.addEventListener('keydown', this.keydown)
            this.source.addEventListener('keyup', this.keyup)
            this.listening = true
        }
    }

    stopListening(): void {
        if (this.listening) {
            this.source.removeEventListener('keydown', this.keydown)
            this.source.removeEventListener('keyup', this.keyup)
            this.listening = false
        }
    }
}
