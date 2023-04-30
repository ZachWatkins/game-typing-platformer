import { TILE } from '../common/constants'

export const Player: Entity = {
    id: 1,
    type: 'player',
    interact: true,
    falling: false,
    jumping: false,
    x: 0,
    y: 0,
    width: TILE,
    height: TILE,
    velocity: {
        x: 0,
        y: 0,
    },
    maxSpeed: TILE * 8,
    appearance: {
        backgroundColor: 'red',
    },
}

export const Coin: Entity = {
    id: 1,
    type: 'coin',
    interact: true,
    x: 0,
    y: 0,
    width: TILE / 2,
    height: TILE / 2,
    velocity: {
        x: 0,
        y: 0,
    },
    appearance: {
        backgroundColor: 'yellow',
    },
}
