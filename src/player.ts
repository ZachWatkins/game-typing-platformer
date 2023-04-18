import { TILE, KEY } from './constants'

type Entity = {
    type: string,
    width: number,
    height: number,
    x: number,
    y: number,
}

type PlayerInput = {
    up: boolean,
    down: boolean,
    left: boolean,
    right: boolean,
    jump: boolean,
}


export const PlayerEntity: Entity = {
    type: 'player',
    width: TILE,
    height: TILE,
    x: 0,
    y: 0,
}

export const PlayerInput = (): PlayerInput => {
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
    public input!: PlayerInput
    public listening: boolean = false
    construct(player: Entity) {
        this.player = player
        this.input = PlayerInput
    }

    listen() {
        this.listening = true;
        window.addEventListener('keydown', this.handle);
    }

    handle(e: KeyboardEvent) {
        this.input[InputMap[e.key]] = e.type === 'keydown';
    }
}
