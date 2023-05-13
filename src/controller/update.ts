/**
 * Apply changes to the game objects before those changes are rendered.
 *
 * @author Zachary K. Watkins
 */
import { Player } from '../model/entity'
import { updateEntity, jumping, running } from './entity'
import { controls } from './input'
import { renderStats, updateStats } from '../common/stats'

/**
 * Called on every frame to update values before they are rendered.
 * @param {number} delta - The time since the last frame.
 *
 * @returns {void}
 */
export default function update(delta: number): void {

    if (controls.left) {
        if (Player.direction >= 0) {
            running.start(Player, -1)
        }
    } else if (controls.right) {
        if (Player.direction <= 0) {
            running.start(Player, 1)
        }
    } else {
        running.stop(Player)
    }
    if (controls.jump) {
        if (!Player.jumping && !Player.falling) {
            jumping.start(Player)
        }
    } else if (Player.jumping) {
        jumping.stop(Player)
    }

    updateEntity(Player, delta)
    updateStats(Player)
    renderStats()
}
