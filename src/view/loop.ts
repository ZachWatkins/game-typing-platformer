/**
 * The game rendering loop component.
 */
import { Player, updateEntity } from '../model/entities'

/**
 * Get the current timestamp in milliseconds.
 *
 * @returns {number} The current timestamp in milliseconds.
 */
const timestamp = (): number => window.performance.now()
let counter = 0
let dt = 0
let now
let last = timestamp()
const fps = 60
const step = 1 / fps

const update = (dt: number): void => {
    updateEntity(Player, dt)
}

function frame() {
    now = timestamp();
    dt = dt + Math.min(1, (now - last) / 1000);
    while (dt > step) {
        dt = dt - step;
        update(step);
    }
    render(ctx, counter, dt);
    last = now;
    counter++;
    fpsmeter.tick();
    requestAnimationFrame(frame, canvas);
}

document.addEventListener('keydown', function (ev) { return onkey(ev, ev.keyCode, true); }, false);
document.addEventListener('keyup', function (ev) { return onkey(ev, ev.keyCode, false); }, false);

get("level.json", function (req) {
    setup(JSON.parse(req.responseText));
    frame();
});
