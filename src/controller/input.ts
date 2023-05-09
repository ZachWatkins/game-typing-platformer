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
export const controls: Controls = {
    direction: 0,
    jumping: false,
}

export function listen(): void {

    document.addEventListener('keydown', (event: KeyboardEvent): false => {

        event.preventDefault()

        if (pressed[event.code] !== false) return false

        pressed[event.code] = true

        switch (event.code) {
            case LEFT_KEY:
                controls.direction = -1
                break
            case RIGHT_KEY:
                controls.direction = 1
                break
            case JUMP_KEY:
                controls.jumping = true
                break
        }

        return false

    })

    document.addEventListener('keyup', (event: KeyboardEvent): false => {

        event.preventDefault()

        if (pressed[event.code] !== true) return false

        pressed[event.code] = false

        switch (event.code) {
            case LEFT_KEY:
                controls.direction = pressed[RIGHT_KEY] ? 1 : 0
                break
            case RIGHT_KEY:
                controls.direction = pressed[LEFT_KEY] ? -1 : 0
                break
            case JUMP_KEY:
                controls.jumping = false
                break
        }

        return false
    })

}
