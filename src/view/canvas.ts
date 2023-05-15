/**
 * Canvas interaction module.
 *
 * @author Zachary K. Watkins
 */

let root: HTMLCanvasElement
let context: CanvasRenderingContext2D
const images: { [key: string]: HTMLImageElement } = {}

export const createRoot = (props: { id: string, width: number, height: number }): HTMLCanvasElement => {
    root = document.createElement('canvas')
    root.id = props.id
    root.width = props.width
    root.height = props.height
    context = root.getContext('2d', { alpha: false }) as CanvasRenderingContext2D
    return root
}

export const clear = (): void => {
    context.clearRect(0, 0, root.width, root.height)
}

export const paint = (props: PathProps): void => {
    if (props.appearance.image) {
        if (!images[props.appearance.image.id]) {
            // Create a new image element to load the image.
            images[props.appearance.image.id] = new Image()
            images[props.appearance.image.id].src = props.appearance.image.src
        }
        context.fillStyle = props.appearance.backgroundColor
        context.fillRect(props.x, props.y, props.width, props.height)
        context.drawImage(images[props.appearance.image.id], props.x, props.y, props.width, props.height)
    } else {
        let saveFill: string | CanvasGradient | CanvasPattern = context.fillStyle || ''
        context.fillStyle = props.appearance.backgroundColor
        context.fillRect(props.x, props.y, props.width, props.height)
        context.fillStyle = saveFill
    }
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
        backgroundColor: string,
        image?: {
            id: string,
            src: string,
        },
    }
}
