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

export const PlayerInput = {
    up: false,
    down: false,
    left: false,
    right: false,
    jump: false,
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

export const PlayerController = function (player: Entity) {
    this.player = player;
    this.input = { ...PlayerInput };
}
PlayerController.prototype = {
    player: PlayerEntity,
    input: PlayerInput,
    listening: false,
    listen: function () {
        this.listening = true;
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            this.input[InputMap[e.key]] = e.type === 'keydown';
        });
    }
}
