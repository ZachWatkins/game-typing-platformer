/**
 * The game rendering loop component.
 *
 * @author Zachary K. Watkins
 */
import update from '../controller/update'
import render from './render'

let fpsInterval: number
let now: number
let then: number
let elapsed: number

export function loop(fps: number) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    frame();
}

function frame(): void {
    requestAnimationFrame(frame);

    now = Date.now();
    elapsed = now - then;

    update(elapsed);

    if (elapsed > fpsInterval) {
        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        render();
    }
}

export default loop
