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

falling.start(Player)
export const playerElement: HTMLElement = context.create(Player)

export default function render(): void {
    updateStats(Player)
    context.position(playerElement, Player)
    renderStats()
}
