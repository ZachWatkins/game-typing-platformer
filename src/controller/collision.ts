/**
 * Detect collision between shapes.
 *
 * @author Zachary K. Watkins
 */
import { STAGE_RECT } from "../common/constants"

export const quadOverPoint = (a: Quad, point: Point): boolean => {
    return (
        point[0] > a.x1 &&
        point[0] < a.x2 &&
        point[1] > a.y1 &&
        point[1] < a.y2
    )
}

export function rectOverlapsRect(rect1: Rect, rect2: Rect) {
    if (rect1[0] > rect2[0] + rect2[2] || rect2[0] > rect1[0] + rect1[2]) {
        return false;
    }

    if (rect1[1] > rect2[1] + rect2[3] || rect2[1] > rect1[1] + rect1[3]) {
        return false;
    }

    return true;
}

export function rectBeyondStage(rect: Rect) {
    return rectOverlapsRect(STAGE_RECT, rect)
}
