import './assets/root.css'
import App from "./App"
import { Stats } from './common/stats'

const container = document.querySelector("#root") || document.querySelector('body') || document.createElement('div')
container.appendChild(App())
container.appendChild(Stats())
