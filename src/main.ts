import './assets/root.css'
import App from "./App"
import { createRoot } from './view/root'

const container = document.querySelector("#root") || document.querySelector('body') || document.createElement('div')
const root = createRoot(container)
root.render(App)
