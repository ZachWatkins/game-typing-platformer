/**
 * Render the game view.
 *
 * @author Zachary K. Watkins
 */
import { renderStats } from '../common/stats'
import { Player } from '../model/entity'
import { falling } from '../controller/entity'
import { updateStats } from '../common/stats'
import { context } from './'
import { clear } from './canvas'

falling.start(Player)

export default function render(): void {
    clear()
    updateStats(Player)
    context.paint(Player)
    renderStats()
}
