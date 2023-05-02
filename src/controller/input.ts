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

export function listen(source: HasEventListeners): void {

    source.addEventListener('keydown', (event: { code: string }): void => {

        if (pressed[event.code] !== false) return

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

    })

    source.addEventListener('keyup', (event: { code: string }): void => {

        if (pressed[event.code] !== true) return

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
    })

}
