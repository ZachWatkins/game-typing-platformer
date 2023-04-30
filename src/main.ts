/**
 * Entry point for the game when running in a web browser.
 *
 * @author Zachary K. Watkins
 */
import './assets/root.css'
import App from "./App"
import { Stats } from './common/stats'
import { SET_MAP_WIDTH, SET_MAP_HEIGHT } from './common/constants'

const container = document.getElementById('root')

if (!container) throw new Error('No root element found.')

SET_MAP_WIDTH(container.clientWidth)
SET_MAP_HEIGHT(container.clientHeight)

container.appendChild(App())

// Give useful feedback during development.
container.appendChild(Stats())
