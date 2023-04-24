/**
 * Apply changes to the game state based on a delta time.
 *
 * @author Zachary K. Watkins
 */

import { updatePlayer } from './player'

/**
 * Function which updates values before they are rendered.
 * @param {number} delta - The time since the last frame.
 *
 * @returns {void}
 */
export default function update(delta: number): void {
    updatePlayer(delta)
}
