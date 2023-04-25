import { MAXDX, MAXDY, ACCEL } from '../common/constants'
import { Player } from '../model/entities'

export function updatePlayer(delta: number, axis: { x: number, y: number }): void {
    Player.point[0] += axis.x * delta * ACCEL * MAXDX
    Player.point[1] += axis.y * delta * ACCEL * MAXDY
    if (0 > Player.point[0]) {
        Player.point[0] = 0
        axis.x = 0
    }
    if (0 > Player.point[1]) {
        Player.point[1] = 0
        axis.y = 0
    }
}
