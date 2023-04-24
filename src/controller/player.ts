import { MAXDX, MAXDY, ACCEL } from '../constants'
import { KeyboardController } from './keyboard'
import { Player } from '../model/entities'

const AXIS: AxisState = KeyboardController(window)

function resolveCollision() {
    if (0 > Player.point[0]) {
        Player.point[0] = 0
        AXIS.x = 0
    }
    if (0 > Player.point[1]) {
        Player.point[1] = 0
        AXIS.y = 0
    }
}

export function updatePlayer(delta: number): void {
    Player.point[0] += AXIS.x * delta * ACCEL * MAXDX
    Player.point[1] += AXIS.y * delta * ACCEL * MAXDY
    resolveCollision()
}
