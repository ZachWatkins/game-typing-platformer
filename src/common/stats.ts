/**
 * JSON rendering component for debugging.
 *
 * @author Zachary K. Watkins
 * @module stats.js
 */

let stats: HTMLElement

const statsValue: { [key: string]: any } = {
    fps: 0,
    axis: {
        x: 0,
        y: 0,
    },
}

const create = (): HTMLElement => {
    stats = document.createElement('div')
    stats.id = 'stats'
    stats.style.position = 'absolute'
    stats.style.right = '0'
    stats.style.top = '0'
    stats.style.bottom = '0'
    stats.style.overflow = 'auto'
    stats.style.maxWidth = '200px'
    stats.style.minWidth = '120px'
    stats.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
    stats.style.color = 'white'
    stats.style.fontFamily = 'monospace'
    stats.style.fontSize = '12px'
    stats.style.padding = '12px'
    stats.style.boxSizing = 'border-box'
    stats.style.zIndex = '1000'
    stats.style.whiteSpace = 'pre'
    stats.style.overflow = 'hidden'
    stats.innerHTML = JSON.stringify(statsValue, null, 2)

    fpsMeter()

    return stats
}

export function updateStats(value: { [key: string]: any }): void {
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            let element = value[key]
            if (typeof element === 'number') {
                element = element.toFixed(2)
            }
            statsValue[key] = element
        }
    }
}

export function renderStats(): HTMLElement {
    if (!stats) {
        stats = create()
    }

    stats.innerHTML = JSON.stringify(statsValue, null, 2)

    return stats
}

export function Stats(): HTMLElement {
    return stats || create()
}

function fpsMeter(): void {
    let prevTime = performance.now(),
        frames = 0

    function loop() {
        const time = performance.now()
        frames++
        if (time > prevTime + 1000) {
            let fps = Math.round((frames * 1000) / (time - prevTime))
            prevTime = time
            frames = 0

            statsValue.fps = fps
        }

        requestAnimationFrame(loop)
    }

    requestAnimationFrame(loop)
}

export default { renderStats }
