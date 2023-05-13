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
const keyMap: { [key: string]: string } = {
    [LEFT_KEY]: 'left',
    [RIGHT_KEY]: 'right',
    [JUMP_KEY]: 'jump',
}
export const controls: { [key: string]: boolean } = {
    left: false,
    right: false,
    jump: false,
}

export function listen(): void {
    document.body.addEventListener('keydown', handleKeyDown, {
        capture: true,
        passive: false
    })
    document.body.addEventListener('keyup', handleKeyUp, {
        capture: true,
        passive: false
    })
}

function handleKeyDown(event: KeyboardEvent): void {
    if (pressed[event.code] === false) {
        controls[keyMap[event.code]] = pressed[event.code] = true
    }
}

function handleKeyUp(event: KeyboardEvent): void {
    if (pressed[event.code] === true) {
        controls[keyMap[event.code]] = pressed[event.code] = false
    }
}
