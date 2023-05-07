/**
 * Canvas interaction module.
 *
 * @author Zachary K. Watkins
 */
import dom from './dom'

let root: HTMLCanvasElement
let context: CanvasRenderingContext2D

export const createRoot = (props: HTMLViewAttributes): HTMLCanvasElement => {
    root = dom.create({ ...props, tagName: 'canvas' }) as HTMLCanvasElement
    context = root.getContext('2d') as CanvasRenderingContext2D
    return root
}

export const create = (props: ViewAttributes): CanvasViewAttributes => {
    const pathData = `M${props.x || 0} ${props.y || 0} h ${props.width} v ${props.height} h -${props.width} Z`
    return { ...props, pathRef: new Path2D(pathData) }
}

export const append = (root: HTMLCanvasElement, element: CanvasViewAttributes): void => {
    // Get the current canvas fill style.
    let fillStyle = ''
    if (element.appearance?.backgroundColor) {
        context.fillStyle = element.appearance.backgroundColor
        fillStyle = context.fillStyle
    }
    context.fill(element.pathRef as Path2D)
    // Reset the canvas fill style.
    if (fillStyle) {
        context.fillStyle = fillStyle
    }
}

export const position = (element: CanvasViewAttributes, point: { x: number, y: number }): void => {
    context.clearRect(element.x, element.y, element.width, element.height)
    
}

export default <HTMLViewInterface>{
    createRoot: create,
    create,
    append,
    position,
}
