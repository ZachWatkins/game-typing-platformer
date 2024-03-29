// Type definitions for [game-typing-platformer]
// @see https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
// Project: [app]
// Definitions by: [Zachary K. Watkins] <[https://zachwatkins.dev]>

declare interface AppWindow {
    innerWidth: number,
    innerHeight: number
}

declare type Point = [number, number]

declare type Size = [number, number]

declare type Rect = [x: number, y: number, width: number, height: number]

declare interface Quad {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
}

declare interface Item {
    id: number,
    type: string,
    interact: boolean,
    falling: boolean,
    speed: number,
    velocity: {
        x: number,
        y: number,
    },
    x: number,
    y: number,
    width: number,
    height: number,
    appearance: EntityAppearance,
}

declare type AxisModifier = {
    name: 'x' | 'y',
    value: -1 | 1,
}

declare type Key = {
    pressed: boolean,
    value: -1 | 1
}

declare type StateObject = { [code: string]: boolean }

declare type Controls = {
    direction: -1 | 0 | 1,
    jumping: boolean,
}

declare interface RenderContext {
    querySelector: (selector: string) => Node | null,
    createElement: (tag: string) => Node,
}

declare interface HasEventListeners {
    addEventListener: (type: string, listener: (event: { code: string }) => void) => void,
    removeEventListener: (type: string, listener: (event: { code: string }) => void) => void,
}

declare interface ViewInterface {
    createRoot: (props: ViewAttributes) => object,
    create: (props: ViewAttributes) => object,
    append: (root: object, element: object) => void,
    position: (element: object, point: { x: number, y: number }) => void,
}
