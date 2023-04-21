import { TILE } from '../constants'

export const Player: Entity = {
    id: 1,
    type: 'player',
    render: true,
    interact: true,
    collide: true,
    point: [0, 0],
    size: [TILE, TILE],
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
    point: [0, 0],
    size: [TILE, TILE],
    appearance: {
        backgroundColor: 'yellow',
    },
}
