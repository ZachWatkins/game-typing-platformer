/**
 * The game rendering loop component.
 *
 * @author Zachary K. Watkins
 */
import { STEP } from '../common/constants'
import update from '../controller/update'
import render from './render'

// Rendering context.
let now: number
let last: number = window.performance.now()
let dt: number = 0

export function loop(): void {
    now = window.performance.now()
    dt = dt + Math.min(1, (now - last) / 1000);
    console.log(dt, now - last)
    while (dt > STEP) {
        dt = dt - STEP;
        update(STEP);
    }
    update(dt);
    render();
    last = now;
    requestAnimationFrame(loop)
}

export default loop
