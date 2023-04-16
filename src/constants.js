export var MAP = { tw: 64, th: 48 }
export var TILE = 32
export var METER = TILE

/**
 * Default (exagerated) gravity.
 *
 * @type {number}
 */
export var GRAVITY = 9.8 * 6

/**
 * Default max horizontal speed (15 tiles per second).
 *
 * @type {number}
 */
export var MAXDX = 15

/**
 * Default max vertical speed (60 tiles per second).
 *
 * @type {number}
 */
export var MAXDY = 60

/**
 * Default take 1/2 second to reach maxdx (horizontal acceleration).
 *
 * @type {number}
 */
export var ACCEL = 1/2

/**
 * Default take 1/6 second to stop from maxdx (horizontal friction)
 *
 * @type {number}
 */
export var FRICTION = 1/6

/**
 * Default player jump impulse.
 */
export var IMPULSE = 1500

export var COLOR = {
    BLACK: '#000000',
    YELLOW: '#ECD078',
    BRICK: '#D95B43',
    PINK: '#C02942',
    PURPLE: '#542437',
    GREY: '#333',
    SLATE: '#53777A',
    GOLD: 'gold',
}
export var COLORS = [ COLOR.YELLOW, COLOR.BRICK, COLOR.PINK, COLOR.PURPLE, COLOR.GREY ]
export var KEY = { SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 }

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
