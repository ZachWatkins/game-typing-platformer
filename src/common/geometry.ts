/**
 * Geometry utility functions.
 *
 * @module common/geometry
 * @author Zachary K. Watkins
 */

/**
 * Constrain a value to a range.
 *
 * @param {number} x The value to constrain.
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} The constrained value.
 */
export function bound(x: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, x))
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

const axisDegreeMap: { [key: string]: -1 | 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315 } = {
    '0,0': -1,
    '0,-1': 0,
    '1,-1': 45,
    '1,0': 90,
    '1,1': 135,
    '0,1': 180,
    '-1,1': 225,
    '-1,0': 270,
    '-1,-1': 315,
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

export const cartesianXScreen = (degree: number, distance: number): number => distance * Math.cos(degree * Math.PI / 180)
export const cartesianYScreen = (degree: number, distance: number): number => distance * Math.sin(degree * Math.PI / 180)

export const coordAtDistanceDegrees = (distance: number, degree: number): [number, number] => {
    return [
        cartesianXScreen(degree, distance),
        cartesianYScreen(degree, distance)
    ]
}

export const axisToDegrees = (axis: { x: number, y: number }): number => {
    const axisKey = axis.x + ',' + axis.y
    return axisDegreeMap[axisKey]
}

export const precise = (value: number, precision: number): number => parseFloat(value.toPrecision(precision))

export const nextCoordModifier = (axis: { x: number, y: number }, distance: number): [number, number] => {
    const axisKey = axis.x + ',' + axis.y
    const degrees = axisDegreeMap[axisKey]
    if (degrees === -1) {
        return [0, 0]
    }

    const modifier = coordAtDistanceDegrees(distance, degrees)

    return [
        Math.round(modifier[0]),
        Math.round(modifier[1])
    ]
}

export const nextCoord = (point: [number, number], axis: { x: number, y: number }, distance: number): [number, number] => {
    const axisKey = axis.x + ',' + axis.y
    const degrees = axisDegreeMapCartesian[axisKey]
    if (degrees === -1) {
        return point
    }

    const modifier = coordAtDistanceDegrees(distance, degrees)

    return [
        point[0] + modifier[0],
        point[1] + modifier[1]
    ]
}

export const pointIsOutsideRect = (point: Point, rect: Rect): boolean => rect[0] > point[0] || rect[1] > point[1] || rect[0] + rect[2] < point[0] || rect[1] + rect[3] < point[1]
