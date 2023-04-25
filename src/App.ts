import { renderPlayer } from './view/player'
import { createRenderLoop } from './view/loop'

const PlayerNode: Node = renderPlayer()
const loop = createRenderLoop()

export default function App(): Node {
    loop()
    return PlayerNode
}
