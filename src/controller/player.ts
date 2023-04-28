/**
 * This is an event listener component which listens for a subset of event codes from a source and calls a function when the subset changes.
 *
 * @author Zachary K. Watkins
 */
import { Player } from '../model/entities'
import { rectBeyondStage } from './collision'

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

const axisToDegrees: { [key: string]: -1 | 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315 } = {
    '0-1': 270,
    '1-1': 315,
    '10': 0,
    '11': 45,
    '01': 90,
    '-11': 135,
    '-10': 180,
    '-1-1': 225,
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
    if (0 === axis.x && 0 === axis.y) return
    if (rectBeyondStage(Player.rect)) return
    const degrees = axisToDegrees[axis.x + axis.y]
    const step = [
        Player.maxSpeed * delta * Math.cos(degrees * Math.PI / 180),
        Player.maxSpeed * delta * Math.sin(degrees * Math.PI / 180)
    ]
    Player.point[0] += step[0]
    Player.point[1] += step[1]
    Player.rect[0] = Player.point[0]
    Player.rect[1] = Player.point[1]
}

export function listen(source: HasEventListeners): void {
    source.addEventListener('keydown', keyDown)
    source.addEventListener('keyup', keyUp)
}
