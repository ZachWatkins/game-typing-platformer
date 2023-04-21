export class InputObserver {
    source: HasEventListeners
    code: { [key: string]: boolean } = {}
    listening: boolean = false
    constructor(source: HasEventListeners, dispatch: (code: string) => void) {
        this.source = source
    }
    keydown(event: InputEvent): void {
        this.code[event.code] = true
    }
    keyup(event: InputEvent): void {
        this.code[event.code] = false
    }
    listen(): void {
        if (this.listening) {
            return
        }
        this.source.addEventListener('keydown', this.keydown)
        this.source.addEventListener('keyup', this.keyup)
        this.listening = true
    }
    stopListening(): void {
        if (!this.listening) {
            return
        }
        this.source.removeEventListener('keydown', this.keydown)
        this.source.removeEventListener('keyup', this.keyup)
        this.listening = false
    }
}
