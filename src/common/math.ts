export const degreeToRadians = (degree: number): number => degree * Math.PI / 180
export const coordAtDistanceDegrees = (distance: number, degree: number, precision: number = 0): [number, number] => {
    if (!precision) {
        return [
            Math.round(distance * Math.cos(degree * Math.PI / 180)),
            Math.round(distance * Math.sin(degree * Math.PI / 180))
        ]
    }
    return [
        parseFloat((distance * Math.cos(degree * Math.PI / 180)).toPrecision(precision)),
        parseFloat((distance * Math.sin(degree * Math.PI / 180)).toPrecision(precision))
    ]
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
export const axisToDegrees = (axis: AxisState): number => {
    const axisKey = axis.x + ',' + axis.y
    return axisDegreeMap[axisKey]
}

export const nextCoordModifier = (axis: AxisState, distance: number, precision: number = 0): [number, number] => {
    const axisKey = axis.x + ',' + axis.y
    const degrees = axisDegreeMap[axisKey]
    if (degrees === -1) {
        return [0, 0]
    }

    const modifier = coordAtDistanceDegrees(distance, degrees, precision)

    return precision
        ? [
            parseFloat(modifier[0].toPrecision(precision)),
            parseFloat(modifier[1].toPrecision(precision))
        ]
        : [
            Math.round(modifier[0]),
            Math.round(modifier[1])
        ]
}

export const nextCoord = (point: [number, number], axis: AxisState, distance: number, precision: number = 0): [number, number] => {
    const axisKey = axis.x + ',' + axis.y
    const degrees = axisDegreeMap[axisKey]
    if (degrees === -1) {
        return point
    }

    const modifier = coordAtDistanceDegrees(distance, degrees, precision)

    return precision
        ? [
            parseFloat((point[0] + modifier[0]).toPrecision(precision)),
            parseFloat((point[1] + modifier[0]).toPrecision(precision))
        ]
        : [
            Math.round((point[0] + modifier[0])),
            Math.round((point[1] + modifier[1]))
        ]
}
