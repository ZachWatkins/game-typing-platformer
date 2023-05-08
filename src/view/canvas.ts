/**
 * Canvas interaction module.
 *
 * @author Zachary K. Watkins
 */

let root: HTMLCanvasElement
let context: CanvasRenderingContext2D

export const createRoot = (props: { id: string, width: number, height: number }): HTMLCanvasElement => {
    root = document.createElement('canvas')
    root.id = props.id
    root.width = props.width
    root.height = props.height
    context = root.getContext('2d') as CanvasRenderingContext2D
    return root
}

export const clear = (): void => {
    context.clearRect(0, 0, root.width, root.height)
}

export const paint = (props: PathProps): void => {
    let saveFill: string | CanvasGradient | CanvasPattern = context.fillStyle || ''
    context.fillStyle = props.appearance.backgroundColor
    context.fillRect(props.x, props.y, props.width, props.height)
    context.fillStyle = saveFill
}

export default {
    createRoot,
    paint,
    clear,
}

type PathProps = {
    x: number,
    y: number,
    width: number,
    height: number,
    appearance: {
        backgroundColor: string
    }
}
