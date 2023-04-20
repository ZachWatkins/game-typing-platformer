/**
 * This file contains interfaces rendering contexts.
 * @author Zachary K. Watkins
 * @module render
 */

/**
 * A rendering context that renders to a DOM node.
 */
export const DocumentContext: RenderContext = {
    querySelector: (selector: string) => document.querySelector(selector),
    createElement: (tag: string) => document.createElement(tag),
}
