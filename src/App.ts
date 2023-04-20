import { Player } from './model/entities'
import { renderEntity } from './view/entity'

export default function App(): Node {
    return renderEntity(Player)
}
