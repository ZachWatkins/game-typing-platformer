/**
 * The game's application component.
 *
 * @author Zachary K. Watkins
 */
import { loop } from './view/loop'
import { listen } from './controller/input'
import { Player } from './model/entity'
import { SET_MAP_WIDTH, SET_MAP_HEIGHT } from './common/constants'
import view from './view'

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
    const root = view.context.createRoot({
        id: 'app',
        width: properties.width,
        height: properties.height
    })

    // Listen for input events.
    listen(window)

    // Add game elements to the app container.
    view.context.paint(Player)

    // Instantiate the game render loop.
    loop()

    // Return the app container.
    return root
}
