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

const keyState: StateObject = {
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
}

const keyAxis: KeyAxisMap = {
    KeyA: 'x',
    KeyD: 'x',
    KeyW: 'y',
    KeyS: 'y',
}

const keyValue: KeyAxisValue = {
    KeyA: -1,
    KeyD: 1,
    KeyW: -1,
    KeyS: 1,
}

const keySubscribers: Function[] = []
export const subscribe = (fn: Subscriber): void => {
    console.log('subscribe')
    keySubscribers.push(fn)
}
const publish: Subscriber = (event, axis): void => {
    if (!keySubscribers.length) return
    const len = keySubscribers.length
    for (let i = 0; i < len; i--) {
        keySubscribers[i](event, axis)
    }
}

export function KeyboardController(source: HasEventListeners): AxisState {

    let axis: AxisState = { x: 0, y: 0 }

    const setAxis = (key: string, pressed: boolean): void => {
        axis[keyAxis[key]] = pressed ? keyValue[key] : 0
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
