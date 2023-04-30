/**
 * This is the game input controller.
 *
 * @author Zachary K. Watkins
 */
const LEFT_KEY = 'KeyA'
const RIGHT_KEY = 'KeyD'
const pressed: { [key: string]: boolean } = {
    KeyA: false,
    KeyD: false,
}
export const direction = {
    current: 0,
}

export function listen(source: HasEventListeners): void {

    source.addEventListener('keydown', (event: { code: string }): void => {
        if (pressed[event.code] !== false) return
        pressed[event.code] = true
        if (LEFT_KEY === event.code) {
            direction.current = -1
        } else if (RIGHT_KEY === event.code) {
            direction.current = 1
        }
    })

    source.addEventListener('keyup', (event: { code: string }): void => {
        if (pressed[event.code] !== true) return
        pressed[event.code] = false
        if (LEFT_KEY === event.code) {
            direction.current = pressed[RIGHT_KEY] ? 1 : 0
        } else if (RIGHT_KEY === event.code) {
            direction.current = pressed[LEFT_KEY] ? -1 : 0
        }
    })

}
