/**
 * Main view module for the game.
 *
 * @author Zachary K. Watkins
 */
import canvas from './canvas'
import { loop } from './loop'
import render from './render'

export const context = canvas

export default {
    context: canvas,
    loop,
    render,
}

export type ViewAttributes = {
    id: string,
    width: number,
    height: number,
    x?: number,
    y?: number,
    tagName?: string,
    appearance?: {
        backgroundColor?: string,
    },
}
