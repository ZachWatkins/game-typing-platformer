/**
 * The game's application component.
 *
 * @author Zachary K. Watkins
 */
import { MAP } from './common/constants'
import { loop } from './view/loop'
import { listen } from './controller/input'
import { renderPlayer } from './view/player'
import { SET_MAP_WIDTH, SET_MAP_HEIGHT } from './common/constants'

/**
 * Create the app container element.
 *
 * @returns {Node}
 */
const create = (): Node => {
    const element = document.createElement('div')
    element.id = 'app'
    element.style.width = MAP.width + 'px'
    element.style.height = MAP.height + 'px'
    element.style.position = 'relative'
    return element
}

/**
 * The game's application container component.
 *
 * @param {object} properties - The properties of the app container.
 * @param {number} properties.width - The width of the app container.
 * @param {number} properties.height - The height of the app container.
 * @returns {Node}
 */
export default function App(properties: { width: number, height: number }): Node {

    SET_MAP_WIDTH(properties.width)
    SET_MAP_HEIGHT(properties.height)

    // Create the app container.
    const element = create()

    // Listen for input events.
    listen(window)

    // Add game elements to the app container.
    element.appendChild(renderPlayer())

    // Instantiate the game render loop.
    loop()

    // Return the app container.
    return element
}
