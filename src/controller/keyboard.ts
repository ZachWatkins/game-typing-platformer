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
type KeyAxisValue = { [key: string]: -1 | 1 }
type KeyAxisMap = { [key: string]: 'x' | 'y' }
type KeyMap = { [key: string]: string }

const keyState: StateObject = {
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
}

const keyAxis: KeyAxisMap = {
    KeyW: 'y',
    KeyA: 'x',
    KeyS: 'y',
    KeyD: 'x',
}

const keyValue: KeyAxisValue = {
    KeyW: -1,
    KeyA: -1,
    KeyS: 1,
    KeyD: 1,
}

const keyAxisInverted: KeyMap = {
    KeyW: 'KeyS',
    KeyA: 'KeyD',
    KeyS: 'KeyW',
    KeyD: 'KeyA',
}

const keySubscribers: Function[] = []
export const subscribe = (fn: Subscriber): void => {
    keySubscribers.push(fn)
}
const publish: Subscriber = (event, axis): void => {
    if (!keySubscribers.length) return
    const len = keySubscribers.length
    for (let i = 0; i < len; i++) {
        keySubscribers[i](event, axis)
    }
}

export function KeyboardController(source: HasEventListeners): AxisState {

    let axis: AxisState = { x: 0, y: 0 }

    const setAxis = (key: string, pressed: boolean): void => {
        axis[keyAxis[key]] = pressed ? keyValue[key] : 0
        if (!axis[keyAxis[key]]) {
            axis[keyAxis[key]] = keyState[keyAxisInverted[key]] ? keyValue[keyAxisInverted[key]] : 0
        }
    }

    const handleOn = (event: { code: string }): void => {
        if (keyState[event.code] === false) {
            keyState[event.code] = true
            setAxis(event.code, true)
            publish(event, axis)
        }
    }

    const handleOff = (event: { code: string }): void => {
        if (keyState[event.code] === true) {
            keyState[event.code] = false
            setAxis(event.code, false)
            if (keySubscribers.length) publish(event, axis)
        }
    }

    source.addEventListener('keydown', handleOn)
    source.addEventListener('keyup', handleOff)

    return axis
}

export default { KeyboardController, subscribe }
