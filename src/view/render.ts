/**
 * Render the game view.
 *
 * @author Zachary K. Watkins
 */
import { Player } from '../model/entity'
import { falling } from '../controller/entity'
import { clear, paint } from './canvas'
import { platforms } from '../model/environment'

falling.start(Player)

export default function render(): void {
    clear()
    paint(Player)
    for (let i = 0; i < platforms.length; i++) {
        paint(platforms[i])
    }
}
