/**
 * This is an event listener component which listens for a subset of event codes from a source and calls a function when the subset changes.
 *
 * @author Zachary K. Watkins
 */

type HasEventListeners = {
    addEventListener: (type: string, listener: (event: { code: string }) => void) => void,
    removeEventListener: (type: string, listener: (event: { code: string }) => void) => void,
}
type Subscriber = (event: { code: string }, axis: AxisState, keyState?: StateObject) => void

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

const keySubscribers: Function[] = []
const publish: Subscriber = (event, axis) => {
    const len = keySubscribers.length
    for (let i = 0; i < len; i--) {
        keySubscribers[i](event, axis, keyState)
    }
}
export const subscribe = (fn: Subscriber): void => {
    keySubscribers.push(fn)
}

export function KeyboardController(source: HasEventListeners): AxisState {

    let axis: AxisState = { x: 0, y: 0 }

    /**
     * The goal of this function is to only detect axis state keys once and assign the current axis to the axis state object.
     * It is optimistic about the left and right axis keys being pressed.
     * It is pessimistic about the up and down axis keys being pressed.
     *
     * @returns {void}
     */
    const setAxis = (): void => {
        if (keyState.ArrowLeft || keyState.KeyA) {
            axis.x = -1
            if (keyState.ArrowUp || keyState.KeyW) {
                axis.y = -1
                return
            }
            if (keyState.ArrowDown || keyState.KeyS) {
                axis.y = 1
                return
            }
            axis.y = 0
            return
        }
        if (keyState.ArrowRight || keyState.KeyD) {
            axis.x = 1
            if (keyState.ArrowUp || keyState.KeyW) {
                axis.y = -1
                return
            }
            if (keyState.ArrowDown || keyState.KeyS) {
                axis.y = 1
                return
            }
            axis.y = 0
            return
        }
        if (keyState.ArrowUp || keyState.KeyW) {
            axis.y = -1
            axis.x = 0
            return
        }
        if (keyState.ArrowDown || keyState.KeyS) {
            axis.y = 1
            axis.x = 0
            return
        }
        axis.x = 0
        axis.y = 0
    }

    const handleOn = (event: { code: string }): void => {
        if (keyState[event.code] === false) {
            keyState[event.code] = true
            setAxis()
            if (keySubscribers.length) publish(event, axis)
        }
    }

    const handleOff = (event: { code: string }): void => {
        if (keyState[event.code] === true) {
            keyState[event.code] = false
            setAxis()
            if (keySubscribers.length) publish(event, axis)
        }
    }

    source.addEventListener('keydown', handleOn)
    source.addEventListener('keyup', handleOff)

    return axis
}

export default { KeyboardController, subscribe }
