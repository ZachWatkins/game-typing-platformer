// Type definitions for [game-typing-platformer]
// @see https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
// Project: [app]
// Definitions by: [Zachary K. Watkins] <[https://zachwatkins.dev]>

declare type Point = [number, number]

declare type Size = [number, number]

declare interface Platform {
    top: number,
    left: number,
    right: number,
}

declare interface Rect {
    x: number,
    y: number,
    width: number,
    height: number,
}

declare interface Bounds {
    top: number,
    left: number,
    right: number,
    bottom: number,
}

declare interface EntityAppearance {
    backgroundColor: string,
}

declare interface Entity {
    id: number,
    type: string,
    render: boolean,
    interact: boolean,
    collide: boolean,
    point: Point,
    size: Size,
    appearance: EntityAppearance,
}

declare type Controller = {
    up: boolean,
    down: boolean,
    left: boolean,
    right: boolean,
    jump: boolean,
}

declare interface InputEvent {
    code: string,
}

declare type HasEventListeners = {
    addEventListener: (type: string, listener: (event: InputEvent) => void) => void,
    removeEventListener: (type: string, listener: (event: InputEvent) => void) => void,
}

declare interface RenderContext {
    querySelector: (selector: string) => Node | null,
    createElement: (tag: string) => Node,
}
