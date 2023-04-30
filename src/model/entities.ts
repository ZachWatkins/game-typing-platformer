import { TILE } from '../common/constants'

export const Player: Entity = {
    id: 1,
    type: 'player',
    render: true,
    interact: true,
    collide: true,
    falling: false,
    jumping: false,
    x: 0,
    y: 0,
    width: TILE,
    height: TILE,
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
    x: 0,
    y: 0,
    width: TILE / 2,
    height: TILE / 2,
    maxSpeed: 0,
    appearance: {
        backgroundColor: 'yellow',
    },
}
