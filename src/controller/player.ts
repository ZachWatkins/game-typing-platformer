import { Player } from '../model/entities'
import { nextCoordModifier } from '../common/math'

export function updatePlayer(delta: number, axis: AxisState): void {
    const modifier = nextCoordModifier(axis, Player.maxSpeed)
    Player.point[0] += delta * modifier[0]
    Player.point[1] += delta * modifier[1]
    if (0 > Player.point[0]) {
        Player.point[0] = 0
        axis.x = 0
    }
    if (0 > Player.point[1]) {
        Player.point[1] = 0
        axis.y = 0
    }
}
