/**
 * The game rendering loop component.
 */

// Rendering context.
let now: number
let last: number = window.performance.now()
const fps = 60
const step = 1 / fps
let dt: number = 0

export function createRenderLoop(update: Function, render: Function) {

    function frame() {
        now = window.performance.now()
        dt = dt + Math.min(1, (now - last) / 1000);
        while (dt > step) {
            dt = dt - step;
            update(step);
        }
        render(dt);
        last = now;
        requestAnimationFrame(frame)
    }

    return frame

}
