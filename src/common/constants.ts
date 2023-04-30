export const FPS = 60
export const STEP = 1 / FPS
export const TILE = 32
export const MAP = { tw: 64, th: 48, width: 64 * TILE, height: 48 * TILE }
export const METER = TILE
export const SET_MAP_WIDTH = (width: number) => {
    MAP.tw = width / TILE
    MAP.width = MAP.tw * TILE
}
export const SET_MAP_HEIGHT = (height: number) => {
    MAP.th = height / TILE
    MAP.height = MAP.th * TILE
}

/**
 * Default (exagerated) gravity.
 *
 * @type {number}
 */
export const GRAVITY = 9.8 * 6

/**
 * Default max horizontal speed (60 tiles per second).
 *
 * @type {number}
 */
export const MAXDX = 120

/**
 * Default max vertical speed (60 tiles per second).
 *
 * @type {number}
 */
export const MAXDY = 120

/**
 * Default take 1/2 second to reach maxdx (horizontal acceleration).
 *
 * @type {number}
 */
export const ACCEL = 1 / 2

/**
 * Default take 1/6 second to stop from maxdx (horizontal friction)
 *
 * @type {number}
 */
export const FRICTION = 1 / 6

/**
 * Default player jump impulse.
 */
export const IMPULSE = 1500

export const COLOR = {
    BLACK: '#000000',
    YELLOW: '#ECD078',
    BRICK: '#D95B43',
    PINK: '#C02942',
    PURPLE: '#542437',
    GREY: '#333',
    SLATE: '#53777A',
    GOLD: 'gold',
}
export const COLORS = [COLOR.YELLOW, COLOR.BRICK, COLOR.PINK, COLOR.PURPLE, COLOR.GREY]
export const KEY = { SPACE: ' ', LEFT: 'a', UP: 'w', RIGHT: 'd', DOWN: 's' }

/**
 * Constrain a value to a range.
 *
 * @param {number} x The value to constrain.
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} The constrained value.
 */
export function bound(x: number, min: number, max: number) {
    return Math.max(min, Math.min(max, x))
}

/**
 * Get the contents of a file.
 *
 * @param {string} url The URL of the file.
 * @param {Function} onsuccess The function to call when the file is loaded.
 * @returns {void}
 */
export function get(url: string, onsuccess: Function) {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if ((request.readyState == 4) && (request.status == 200))
            onsuccess(request)
    }
    request.open('GET', url, true)
    request.send()
}

/**
 * Determine if two rectangles overlap.
 *
 * @param {number} x1 The x coordinate of the first rectangle.
 * @param {number} y1 The y coordinate of the first rectangle.
 * @param {number} w1 The width of the first rectangle.
 * @param {number} h1 The height of the first rectangle.
 * @param {number} x2 The x coordinate of the second rectangle.
 * @param {number} y2 The y coordinate of the second rectangle.
 * @param {number} w2 The width of the second rectangle.
 * @param {number} h2 The height of the second rectangle.
 * @returns {boolean} True if the rectangles overlap, false otherwise.
 */
export function overlap(x1: number, y1: number, w1: number, h1: number, x2: number, y2: number, w2: number, h2: number) {
    return !(((x1 + w1 - 1) < x2) ||
        ((x2 + w2 - 1) < x1) ||
        ((y1 + h1 - 1) < y2) ||
        ((y2 + h2 - 1) < y1))
}

export default {
    FPS,
    STEP,
    MAP,
    TILE,
    METER,
    GRAVITY,
    MAXDX,
    MAXDY,
    ACCEL,
    FRICTION,
    IMPULSE,
    COLOR,
    COLORS,
    KEY,
    bound,
    get,
    overlap,
}
