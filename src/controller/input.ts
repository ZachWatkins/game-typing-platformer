/**
 * This is the game input controller.
 *
 * @author Zachary K. Watkins
 */
const LEFT_KEY = 'ArrowLeft'
const RIGHT_KEY = 'ArrowRight'
const JUMP_KEY = 'Space'
const pressed: { [key: string]: boolean } = {
    [LEFT_KEY]: false,
    [RIGHT_KEY]: false,
    [JUMP_KEY]: false,
}
const options: AddEventListenerOptions = {
    capture: true,
    passive: false
}
export const controls: Controls = {
    direction: 0,
    jumping: false,
}

export function listen(): void {
    document.body.addEventListener('keydown', handleKeyDown, options)
    document.body.addEventListener('keyup', handleKeyUp, options)
}

function handleKeyDown(event: KeyboardEvent): void {
    if (pressed[event.code] === false) {
        pressed[event.code] = true
        switch (event.code) {
            case LEFT_KEY: controls.direction = -1; return
            case RIGHT_KEY: controls.direction = 1; return
            case JUMP_KEY: controls.jumping = true; return
        }
    }
}

function handleKeyUp(event: KeyboardEvent): void {
    if (pressed[event.code] === true) {
        pressed[event.code] = false
        switch (event.code) {
            case LEFT_KEY: controls.direction = 0; return
            case RIGHT_KEY: controls.direction = 0; return
            case JUMP_KEY: controls.jumping = false; return
        }
    }
}
