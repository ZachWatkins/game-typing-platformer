/**
 * Apply changes to the game objects before those changes are rendered.
 *
 * @author Zachary K. Watkins
 */
import { listen, updatePlayer } from './player'

listen(window)

/**
 * Called on every frame to update values before they are rendered.
 * @param {number} delta - The time since the last frame.
 *
 * @returns {void}
 */
export default function update(delta: number): void {
    updatePlayer(delta)
}
