/**
 * Render the game view.
 *
 * @author Zachary K. Watkins
 */
import { Player } from '../model/entity'
import { falling } from '../controller/entity'
import { clear, paint } from './canvas'

falling.start(Player)

export default function render(): void {
    clear()
    paint(Player)
}
