import { TILE, MAXDX, MAXDY, ACCEL } from '../constants'

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

export function updatePlayer(delta: number, axis: AxisState): void {
    Player.point[0] += axis.x * delta * ACCEL * MAXDX
    Player.point[1] += axis.y * delta * ACCEL * MAXDY
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
