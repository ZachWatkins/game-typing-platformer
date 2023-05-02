/**
 * Apply changes to the game objects before those changes are rendered.
 *
 * @author Zachary K. Watkins
 */
import { Player } from '../model/entities'
import { updateEntity, jumping, running } from './entity'
import { controls } from './input'

const applyControls = (entity: Entity): void => {

    if (controls.direction !== 0 && !entity.running) {
        running.start(entity, controls.direction)
    }
    if (controls.jumping && !entity.jumping) {
        jumping.start(entity)
    } else if (!controls.jumping && entity.jumping) {
        jumping.stop(entity)
    }

}

/**
 * Called on every frame to update values before they are rendered.
 * @param {number} delta - The time since the last frame.
 *
 * @returns {void}
 */
export default function update(delta: number): void {

    applyControls(Player)

    updateEntity(Player, delta)

}
