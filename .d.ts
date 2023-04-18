// Type definitions for [game-typing-platformer]
// Project: [app]
// Definitions by: [Zachary K. Watkins] <[https://zachwatkins.dev]>

export namespace App {
    export type Entity = {
        type: string,
        width: number,
        height: number,
        x: number,
        y: number,
    };
    export type PlayerInput = {
        up: boolean,
        down: boolean,
        left: boolean,
        right: boolean,
        jump: boolean,
    };
}
