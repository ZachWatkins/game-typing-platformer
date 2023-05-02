import { TILE } from '../common/constants'

export const Coin: Item = {
    id: 1,
    type: 'coin',
    interact: true,
    falling: false,
    speed: TILE * 8,
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
