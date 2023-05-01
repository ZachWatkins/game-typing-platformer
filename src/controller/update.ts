/**
 * Apply changes to the game objects before those changes are rendered.
 *
 * @author Zachary K. Watkins
 */
import { Player } from '../model/entities'
import { falling, jumping, running } from './entity'
import { controls } from './input'
import { MAP } from '../common/constants'

/**
 * Called on every frame to update values before they are rendered.
 * @param {number} delta - The time since the last frame.
 *
 * @returns {void}
 */
export default function update(delta: number): void {

    if (Player.falling) {
        falling.update(Player, delta)
    }

    if (Player.jumping) {
        jumping.update(Player, delta)
    }

    if (Player.running) {
        running.update(Player, delta)
    }

    Player.velocity.x = Player.speed * controls.direction
    Player.x += Player.velocity.x * delta

}
