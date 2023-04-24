/**
 * This is an event listener component which listens for a subset of event codes from a source and calls a function when the subset changes.
 *
 * @author Zachary K. Watkins
 */
type HasEventListeners = {
    addEventListener: (type: string, listener: (event: { code: string }) => void) => void,
    removeEventListener: (type: string, listener: (event: { code: string }) => void) => void,
}

const keyState: StateObject = {
    ArrowUp: false,
    ArrowLeft: false,
    ArrowDown: false,
    ArrowRight: false,
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
}

const keyAxis: { [code: string]: AxisModifier } = {
    ArrowUp: { name: 'y', value: -1 },
    ArrowLeft: { name: 'x', value: -1 },
    ArrowDown: { name: 'y', value: 1 },
    ArrowRight: { name: 'x', value: 1 },
    KeyW: { name: 'y', value: -1 },
    KeyA: { name: 'x', value: -1 },
    KeyS: { name: 'y', value: 1 },
    KeyD: { name: 'x', value: 1 },
}

export function KeyboardController(source: HasEventListeners): AxisState {

    const axisState: AxisState = {
        x: 0,
        y: 0,
    }

    const handleOn = (event: { code: string }): void => {
        if (keyState.hasOwnProperty(event.code)) {
            keyState[event.code] = true
            let axis = keyAxis[event.code]
            axisState[axis.name] = axis.value
        }
    }

    const handleOff = (event: { code: string }): void => {
        if (keyState.hasOwnProperty(event.code)) {
            keyState[event.code] = false
            let axis = keyAxis[event.code]
            axisState[axis.name] = 0
        }
    }

    source.addEventListener('keydown', handleOn)
    source.addEventListener('keyup', handleOff)

    return axisState
}
