import { updateStats } from '../common/stats'

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
    console.log(modifier)
    updateStats({ degrees, point, modifier })

    return [
        point[0] + modifier[0],
        point[1] + modifier[1]
    ]
}

export const pointIsOutsideRect = (point: Point, rect: Rect): boolean => rect[0] > point[0] || rect[1] > point[1] || rect[0] + rect[2] < point[0] || rect[1] + rect[3] < point[1]

export default {
    coordAtDistanceDegrees,
    axisToDegrees,
    nextCoordModifier,
    nextCoord,
    pointIsOutsideRect
}
