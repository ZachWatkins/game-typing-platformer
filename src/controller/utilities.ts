/**
 * Get the current timestamp in milliseconds.
 *
 * @returns {number} The current timestamp in milliseconds.
 */
export function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime()
}

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
    timestamp,
    bound,
    get,
    overlap,
}
