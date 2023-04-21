import * as Input from './input'

export const updateEntity = (entity: Entity, dt: number): void => {
    if (entity.type === 'player') {
        if (entity.input.up) {
            entity.point[1] -= 1
        }
        if (entity.input.down) {
            entity.point[1] += 1
        }
        if (entity.input.left) {
            entity.point[0] -= 1
        }
        if (entity.input.right) {
            entity.point[0] += 1
        }
    }
}
