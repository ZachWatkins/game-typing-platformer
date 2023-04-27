/**
 * This is an event listener component which listens for a subset of event codes from a source and calls a function when the subset changes.
 *
 * @author Zachary K. Watkins
 */
import { Player } from '../model/entities'

type KeyName = 'KeyW' | 'KeyA' | 'KeyS' | 'KeyD'
type KeyValues = {
    pressed: boolean,
    axis: 'y' | 'x',
    value: -1 | 1,
    invertKey: KeyName,
}
type KeyMap = {
    [key: string]: KeyValues,
}

const keyMap: KeyMap = {
    KeyW: {
        pressed: false,
        axis: 'y',
        value: -1,
        invertKey: 'KeyS',
    },
    KeyA: {
        pressed: false,
        axis: 'x',
        value: -1,
        invertKey: 'KeyD',
    },
    KeyS: {
        pressed: false,
        axis: 'y',
        value: 1,
        invertKey: 'KeyW',
    },
    KeyD: {
        pressed: false,
        axis: 'x',
        value: 1,
        invertKey: 'KeyA',
    },
}

const axisDegreeMapCartesian: { [key: string]: -1 | 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315 } = {
    '0,0': -1,
    '0,-1': 270,
    '1,-1': 315,
    '1,0': 0,
    '1,1': 45,
    '0,1': 90,
    '-1,1': 135,
    '-1,0': 180,
    '-1,-1': 225,
}

const axis: AxisState = {
    x: 0,
    y: 0
}

const keyDown = (event: { code: string }): void => {
    if (keyMap[event.code].pressed === false) {
        keyMap[event.code].pressed = true
        axis[keyMap[event.code].axis] = keyMap[event.code].value
    }
}

const keyUp = (event: { code: string }): void => {
    if (keyMap[event.code].pressed === true) {
        keyMap[event.code].pressed = false
        const invertedKey = keyMap[event.code].invertKey
        axis[keyMap[event.code].axis] = keyMap[invertedKey].pressed ? keyMap[invertedKey].value : 0
    }
}

export function updatePlayer(delta: number): void {
    if (!axis.x && !axis.y) return
    const degrees = axisDegreeMapCartesian[axis.x + ',' + axis.y]
    const modifier = [
        Player.maxSpeed * delta * Math.cos(degrees * Math.PI / 180),
        Player.maxSpeed * delta * Math.sin(degrees * Math.PI / 180)
    ]
    Player.point[0] += modifier[0]
    Player.point[1] += modifier[1]
}

let eventSource: HasEventListeners

export function listen(source?: HasEventListeners): void {
    if (!source && !eventSource) {
        throw new Error('You cannot listen to events without providing an event source once.')
    }
    if (source) {
        source.addEventListener('keydown', keyDown)
        source.addEventListener('keyup', keyUp)
        eventSource = source
    }
    eventSource.addEventListener('keydown', keyDown)
    eventSource.addEventListener('keyup', keyUp)
}

export function stopListening() {
    eventSource.removeEventListener('keydown', keyDown)
    eventSource.removeEventListener('keyup', keyUp)
}
