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
