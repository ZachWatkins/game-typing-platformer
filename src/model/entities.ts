import { TILE } from '../common/constants'

export const Player: Entity = {
    id: 1,
    type: 'player',
    render: true,
    interact: true,
    collide: true,
    rect: [0, 0, TILE, TILE],
    point: [0, 0],
    size: [TILE, TILE],
    maxSpeed: TILE * 8,
    appearance: {
        backgroundColor: 'red',
    },
}

export const Coin: Entity = {
    id: 1,
    type: 'coin',
    render: true,
    interact: true,
    collide: false,
    rect: [0, 0, TILE, TILE],
    point: [0, 0],
    size: [TILE, TILE],
    maxSpeed: TILE,
    appearance: {
        backgroundColor: 'yellow',
    },
}
