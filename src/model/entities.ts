import { TILE } from '../common/constants'

export const Player: Entity = {
    id: 1,
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
    speed: TILE * 8,
    appearance: {
        backgroundColor: 'red',
    },
}
