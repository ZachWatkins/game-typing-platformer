/**
 * The game's application component.
 *
 * @author Zachary K. Watkins
 */
import { MAP } from './common/constants'
import { createRenderLoop } from './view/loop'
import { renderPlayer } from './view/player'

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
 * @returns {Node}
 */
export default function App(): Node {

    // Create the app container.
    const element = create()

    // Add game elements to the app container.
    element.appendChild(renderPlayer())

    // Instantiate the game render loop.
    const loop = createRenderLoop()
    loop()

    // Return the app container.
    return element
}
