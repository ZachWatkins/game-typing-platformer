export function EntityElement(entity: Entity): HTMLElement {
    const element = document.createElement('div')
    element.classList.add(entity.type)
    element.style.width = `${entity.width}px`
    element.style.height = `${entity.height}px`
    element.style.left = `${entity.x}px`
    element.style.top = `${entity.y}px`
    return element
}
