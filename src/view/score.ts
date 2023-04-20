/**
 * Counts the player's score.
 *
 * @param {Element} element The DOM node to attach the counter to.
 * @returns {void}
 */
export function setupScore(element: Element) {
    let counter = 0
    const setScore = (count: number) => {
        counter = count
        element.innerHTML = `Score: ${counter}`
    }
    element.addEventListener('click', () => setScore(counter + 1))
    setScore(0)
}
