/**
 * Render the game view.
 *
 * @author Zachary K. Watkins
 */
import { renderPlayer } from './player'
import { renderStats } from '../common/stats'

export default function render(): void {
    renderPlayer()
    renderStats()
}
