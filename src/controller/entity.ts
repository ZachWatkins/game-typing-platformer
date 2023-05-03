/**
 * Entity controller functions.
 *
 * @author Zachary K. Watkins
 */
import { MAP } from '../common/constants'

export const running = {
    start: (entity: Entity, direction: -1 | 1): void => {
        entity.running = true
        entity.direction = direction
        entity.velocity.x = entity.speed * direction
    },
    stop: (entity: Entity): void => {
        entity.running = false
        entity.direction = 0
        entity.velocity.x = 0
    },
    update: (entity: Entity, delta: number): void => {
        entity.x = entity.x + entity.velocity.x * delta
        if (entity.velocity.x < 0 && entity.x < 0) {
            entity.x = 0
            running.stop(entity)
        } else if (entity.velocity.x > 0 && entity.x + entity.width > MAP.width) {
            entity.x = MAP.width - entity.width
            running.stop(entity)
        }
    },
}

export const falling = {
    start: (entity: Entity): void => {
        entity.falling = true
        entity.velocity.y = entity.speed
    },
    stop: (entity: Entity): void => {
        entity.falling = false
        entity.velocity.y = 0
    },
    update: (entity: Entity, delta: number): void => {
        let nextY = entity.y + entity.velocity.y * delta

        if (nextY + entity.height > MAP.height) {
            nextY = MAP.height - entity.height
            falling.stop(entity)
        }

        entity.y = nextY
    },
}

export const jumping = {
    start: (entity: Entity): void => {
        entity.jumping = true
        entity.velocity.y -= entity.speed
        entity.platform.y = entity.y
        entity.platform.jumpY = entity.y - entity.jump
    },
    stop: (entity: Entity): void => {
        entity.jumping = false
        entity.velocity.y = 0
        falling.start(entity)
    },
    update: (entity: Entity, delta: number): void => {
        let nextY = entity.y + entity.velocity.y * delta

        if (nextY < entity.platform.jumpY) {
            nextY = entity.platform.jumpY + (entity.platform.jumpY - nextY)
            jumping.stop(entity)
        }

        entity.y = nextY
    },
}

export const updateEntity = (entity: Entity, delta: number): void => {
    if (entity.running) {
        running.update(entity, delta)
    }

    if (entity.jumping) {
        jumping.update(entity, delta)
    }

    if (entity.falling) {
        falling.update(entity, delta)
    }
}
