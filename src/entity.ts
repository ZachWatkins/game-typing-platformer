import { TILE } from './constants'

type Entity = {
    type: string,
    width: number,
    height: number,
    x: number,
    y: number,
}

export const PlayerEntity: Entity = {
    type: 'box',
    width: TILE,
    height: TILE,
    x: 0,
    y: 0,
}

export default PlayerEntity
