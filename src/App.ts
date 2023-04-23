import { KeyboardController } from './controller/input'
import { createRenderLoop } from './view/loop'
import { Player, updatePlayer } from './model/entities'
import { renderEntity } from './view/entity'
import { updateStats } from './stats'

const PlayerNode: Node = renderEntity(Player)
const AXIS: AxisState = KeyboardController(window)
const loop = createRenderLoop(update, render)

function update(delta: number) {
    updatePlayer(delta, AXIS)
}

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

function render(delta: number) {
    updateStats(AXIS)
    update(delta)
    resolveCollision()
    PlayerNode.style.left = Player.point[0] + 'px'
    PlayerNode.style.top = Player.point[1] + 'px'
}

export default function App(): Node {
    loop()
    return PlayerNode
}
