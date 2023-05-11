/**
 * This is the game input controller.
 *
 * @author Zachary K. Watkins
 */
const LEFT_KEY = 'KeyA'
const RIGHT_KEY = 'KeyD'
const JUMP_KEY = 'Space'
const pressed: { [key: string]: boolean } = {
    KeyA: false,
    KeyD: false,
    Space: false,
}
const options: AddEventListenerOptions = {
    capture: true,
    passive: false
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
            case LEFT_KEY: controls.direction = pressed[RIGHT_KEY] ? 1 : 0; return
            case RIGHT_KEY: controls.direction = pressed[LEFT_KEY] ? -1 : 0; return
            case JUMP_KEY: controls.jumping = false; return
        }
    }
}

export const controls: Controls = {
    direction: 0,
    jumping: false,
}

export function listen(): void {
    document.addEventListener('keydown', handleKeyDown, options)
    document.addEventListener('keyup', handleKeyUp, options)
}
