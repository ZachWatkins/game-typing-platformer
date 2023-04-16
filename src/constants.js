export const MAP = { tw: 64, th: 48 }
export const TILE = 32
export const METER = TILE

/**
 * Default (exagerated) gravity.
 *
 * @type {number}
 */
export const GRAVITY = 9.8 * 6

/**
 * Default max horizontal speed (15 tiles per second).
 *
 * @type {number}
 */
export const MAXDX = 15

/**
 * Default max vertical speed (60 tiles per second).
 *
 * @type {number}
 */
export const MAXDY = 60

/**
 * Default take 1/2 second to reach maxdx (horizontal acceleration).
 *
 * @type {number}
 */
export const ACCEL = 1/2

/**
 * Default take 1/6 second to stop from maxdx (horizontal friction)
 *
 * @type {number}
 */
export const FRICTION = 1/6

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
export const COLORS = [ COLOR.YELLOW, COLOR.BRICK, COLOR.PINK, COLOR.PURPLE, COLOR.GREY ]
export const KEY = { SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 }

export default {
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
}
