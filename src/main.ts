/**
 * Entry point for the game when running in a web browser.
 *
 * @author Zachary K. Watkins
 */
import './assets/root.css'
import App from "./App"
import { Stats } from './common/stats'

const container = document.getElementById('root')

if (!container) throw new Error('No root element found.')

container.appendChild(
    App({
        width: container.clientWidth,
        height: container.clientHeight
    })
)

// Give useful feedback during development.
container.appendChild(Stats())
