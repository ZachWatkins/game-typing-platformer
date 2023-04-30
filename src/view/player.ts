import { Player } from '../model/entities'

let element: HTMLElement

const create = (): HTMLElement => {
    Player.falling = true

    element = document.createElement('div')
    element.id = `${Player.type}-${Player.id}`
    element.className = Player.type
    element.style.position = 'absolute'
    element.style.width = `${Player.width}px`
    element.style.height = `${Player.height}px`
    element.style.backgroundColor = Player.appearance.backgroundColor
    return element
}

/**
 * Render the player entity object as a Node.
 * @returns {Node} The DOM node representing the entity.
 */
export function renderPlayer(): HTMLElement {
    if (!element) {
        element = create()
    }
    const left = Player.x + 'px'
    const top = Player.y + 'px'
    if (element.style.left !== left) {
        element.style.left = left
    }
    if (element.style.top !== top) {
        element.style.top = top
    }
    return element
}
