import { Player } from '../model/entities'

let element: HTMLElement

const create = (): HTMLElement => {
    const [width, height] = Player.size
    element = document.createElement('div')
    element.id = `${Player.type}-${Player.id}`
    element.className = Player.type
    element.style.position = 'absolute'
    element.style.width = `${width}px`
    element.style.height = `${height}px`
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
    const left = Player.point[0] + 'px'
    const top = Player.point[1] + 'px'
    if (element.style.left !== left) {
        element.style.left = left
    }
    if (element.style.top !== top) {
        element.style.top = top
    }
    return element
}
