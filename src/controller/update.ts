/**
 * Apply changes to the game objects before those changes are rendered.
 *
 * @author Zachary K. Watkins
 */
import { KeyboardController } from './keyboard'
import { updatePlayer } from './player'
import { updateStats } from '../common/stats'

const AXIS: AxisState = KeyboardController(window)


/**
 * Function which updates values before they are rendered.
 * @param {number} delta - The time since the last frame.
 *
 * @returns {void}
 */
export default function update(delta: number): void {
    updatePlayer(delta, AXIS)
    updateStats({ axis: AXIS })
}
