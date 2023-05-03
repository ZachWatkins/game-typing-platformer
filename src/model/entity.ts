import { TILE } from '../common/constants'
import { MAP } from '../common/constants'

export const Player: Entity = {
    id: 1,
    type: 'player',
    interact: true,
    falling: false,
    jumping: false,
    running: false,
    direction: 0,
    x: 0,
    y: MAP.height - TILE,
    width: TILE,
    height: TILE,
    velocity: {
        x: 0,
        y: 0,
    },
    speed: TILE * 8,
    jump: TILE * 4,
    platform: {
        y: 0,
        jumpY: 0,
    },
    appearance: {
        backgroundColor: 'red',
    },
}
