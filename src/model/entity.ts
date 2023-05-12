import { TILE } from '../common/constants'

export const Player: Entity = {
    id: 'player',
    type: 'player',
    interact: true,
    falling: false,
    jumping: false,
    running: false,
    direction: 0,
    x: 0,
    y: 0,
    width: TILE,
    height: TILE,
    velocity: {
        x: 0,
        y: 0,
    },
    speed: TILE * 10,
    jumpLimit: TILE * 4,
    platform: {
        y: 0,
        jumpY: 0,
    },
    appearance: {
        backgroundColor: 'red',
    },
}

export type Entity = {
    id: string,
    type: string,
    interact: boolean,
    falling: boolean,
    jumping: boolean,
    running: boolean,
    direction: -1 | 0 | 1,
    velocity: {
        x: number,
        y: number,
    },
    x: number,
    y: number,
    width: number,
    height: number,
    speed: numbe10,
    jumpLimit: number,
    platform: {
        y: number,
        jumpY: number,
    },
    appearance: {
        backgroundColor: string,
    }
}
