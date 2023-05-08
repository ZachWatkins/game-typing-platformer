/**
 * DOM interaction module.
 *
 * @author Zachary K. Watkins
 */
export const create = (props: {
    id: number | string,
    width: number,
    height: number,
    position?: string,
    x?: number,
    y?: number,
    tagName?: string,
    appearance?: {
        backgroundColor?: string,
    },
}): HTMLElement => {
    const element = document.createElement(props.tagName || 'div')
    element.id = String(props.id)
    element.style.position = props.position || 'relative'
    if (props.x && props.y) {
        element.style.left = `${props.x}px`
        element.style.top = `${props.y}px`
    }
    element.style.width = `${props.width}px`
    element.style.height = `${props.height}px`
    if (props.appearance && props.appearance.backgroundColor) {
        element.style.backgroundColor = props.appearance.backgroundColor
    }
    return element
}

export const append = (root: HTMLElement, element: HTMLElement): void => {
    root.appendChild(element)
}

export const position = (element: HTMLElement, point: { x: number, y: number }): void => {
    const left = point.x + 'px'
    const top = point.y + 'px'
    if (element.style.left !== left) {
        element.style.left = left
    }
    if (element.style.top !== top) {
        element.style.top = top
    }
}

export default {
    createRoot: create,
    create,
    append,
    position,
}
