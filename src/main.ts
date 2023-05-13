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

// Add information for GitHub Pages.
const header = document.createElement('div')
header.id = 'header'
header.style.position = 'absolute'
header.style.top = '0'
header.style.left = '0'
header.style.backgroundColor = '#000'
header.style.color = '#FFF'
header.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.5)'
header.style.padding = '10px'
header.style.fontFamily = 'monospace'
header.style.fontSize = '12px'
header.style.zIndex = '1000'
header.innerHTML = 'JavaScript Canvas game prototype (<a href="https://github.com/zachwatkins/game-typing-platformer">source code</a>).'
container.appendChild(header)
