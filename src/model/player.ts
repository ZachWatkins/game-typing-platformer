import { TILE, KEY } from '../common/constants'
import { Entity, EntityElement } from './base'
import { PlayerInput } from '../controller/input'

const PlayerEntity: Entity = {
    type: 'player',
    width: TILE,
    height: TILE,
    x: 0,
    y: 0,
}

export function PlayerElement(): HTMLElement {
    return EntityElement(PlayerEntity)
}

export const CreatePlayerInput = (): PlayerInput => {
    return {
        up: false,
        down: false,
        left: false,
        right: false,
        jump: false,
    }
}

export const InputMap = {
    w: 'up',
    a: 'left',
    s: 'down',
    d: 'right',
    ' ': 'jump',
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ArrowUp: 'up',
    ArrowDown: 'down',
}

export class PlayerController {
    public player!: Entity
    public input: PlayerInput = CreatePlayerInput()
    public listening: boolean = false
    construct(player: Entity) {
        this.player = player
    }

    listen() {
        this.listening = true;
        window.addEventListener('keydown', this.handle);
    }

    handle(e: KeyboardEvent) {
        this.input[InputMap[e.key]] = e.type === 'keydown';
    }
}
