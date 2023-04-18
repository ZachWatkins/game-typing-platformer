import './assets/style.css'
import App from "./App"
import { createRoot } from './common/dom'

const container = document.getElementById("root")
const root = createRoot(container)
root.render(App)
