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

function handleKey(event: KeyboardEvent): void {
    if (pressed[event.code] === (event.type != "keydown")) {
        controls[keyMap[event.code]] = pressed[event.code] = event.type == "keydown"
    }
}

export function listen(): void {
    document.body.addEventListener('keydown', handleKey, {
        capture: true,
        passive: false
    })
    document.body.addEventListener('keyup', handleKey, {
        capture: true,
        passive: false
    })
}
