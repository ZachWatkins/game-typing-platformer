// Type definitions for [game-typing-platformer]
// @see https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
// Project: [app]
// Definitions by: [Zachary K. Watkins] <[https://zachwatkins.dev]>

declare interface Point {
    x: number,
    y: number,
}

declare interface Line {
    top: number,
    left: number,
    right: number,
}

declare interface Size {
    width: number,
    height: number,
}

declare interface Rect extends Line {
    bottom: number,
}

declare interface Collider extends Rect {
    collides: true,
}

declare interface Platform extends Line {
    collides: true,
}

declare interface Entity extends Point, Collider, Size {
    type: string,
    collides: false,
}

declare type PlayerInput = {
    up: boolean,
    down: boolean,
    left: boolean,
    right: boolean,
    jump: boolean,
}

declare interface RenderContext {
    querySelector: (selector: string) => Node | null,
    createElement: (tag: string) => Node,
}
