import { KeyboardController } from './controller/input'
import { Player, updatePlayer } from './model/entities'
import { renderEntity } from './view/entity'
import { updateStats } from './stats'

const PlayerNode: Node = renderEntity(Player)
const AXIS: AxisState = KeyboardController(window)

// Rendering context.
let now: number
let last: number = window.performance.now()
const fps = 60
const step = 1 / fps
let dt: number = 0

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

function frame() {
    now = window.performance.now()
    dt = dt + Math.min(1, (now - last) / 1000);
    while (dt > step) {
        dt = dt - step;
        update(step);
    }
    render(dt);
    last = now;
    requestAnimationFrame(frame)
}

export default function App(): Node {
    frame()
    return PlayerNode
}
