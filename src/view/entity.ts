/**
 * Render an entity object as a DOM node.
 * @param {Entity} entity - The entity to render.
 * @returns {Node} The DOM node representing the entity.
 */
export function renderEntity({ id, type, point, size, appearance }: Entity): Node {
    const [x, y] = point
    const [width, height] = size
    const { backgroundColor } = appearance
    const element = document.createElement('div')
    element.id = `${type}-${id}`
    element.className = type
    element.style.position = 'absolute'
    element.style.left = `${x}px`
    element.style.top = `${y}px`
    element.style.width = `${width}px`
    element.style.height = `${height}px`
    element.style.backgroundColor = backgroundColor
    return element
}
