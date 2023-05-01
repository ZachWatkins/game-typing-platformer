/**
 * This is the game input controller.
 *
 * @author Zachary K. Watkins
 */
import { Player } from '../model/entities'
import { running, jumping, falling } from './entity'
const LEFT_KEY = 'KeyA'
const RIGHT_KEY = 'KeyD'
const JUMP_KEY = 'Space'
const pressed: { [key: string]: boolean } = {
    KeyA: false,
    KeyD: false,
    Space: false,
}
export const controls = {
    direction: 0,
    jumping: false,
}

export function listen(source: HasEventListeners): void {

    source.addEventListener('keydown', (event: { code: string }): void => {

        if (pressed[event.code] !== false) return

        pressed[event.code] = true

        if (LEFT_KEY === event.code) {

            controls.direction = -1
            running.start(Player, -1)

        } else if (RIGHT_KEY === event.code) {

            controls.direction = 1
            running.start(Player, 1)

        } else if (JUMP_KEY === event.code) {

            controls.jumping = true
            jumping.start(Player)

        }

    })

    source.addEventListener('keyup', (event: { code: string }): void => {

        if (pressed[event.code] !== true) return

        pressed[event.code] = false

        if (LEFT_KEY === event.code) {

            if (pressed[RIGHT_KEY]) {

                controls.direction = 1
                running.start(Player, 1)

            } else {

                controls.direction = 0
                running.stop(Player)

            }

        } else if (RIGHT_KEY === event.code) {

            if (pressed[LEFT_KEY]) {

                controls.direction = -1
                running.start(Player, -1)

            } else {

                controls.direction = 0
                running.stop(Player)

            }

        } else if (JUMP_KEY === event.code) {

            controls.jumping = false
            jumping.stop(Player)

        }
    })

}
