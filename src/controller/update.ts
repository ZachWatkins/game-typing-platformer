/**
 * Apply changes to the game objects before those changes are rendered.
 *
 * @author Zachary K. Watkins
 */
import { Player } from '../model/entities'
import { direction, listen } from './input'
import { MAP } from '../common/constants'

listen(window)

/**
 * Called on every frame to update values before they are rendered.
 * @param {number} delta - The time since the last frame.
 *
 * @returns {void}
 */
export default function update(delta: number): void {
    if (Player.falling) {
        let nextY = Player.y + Player.maxSpeed * delta
        if (nextY + Player.height > MAP.height) {
            nextY = MAP.height - Player.height
            Player.falling = false
        }
        Player.y = nextY
    }
    if (0 === direction.current) return
    Player.x += Player.maxSpeed * delta * direction.current
}
