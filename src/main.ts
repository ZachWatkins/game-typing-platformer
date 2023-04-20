import './assets/style.css'
import App from "./App"
import { createRoot } from './view/elements/root'
import { DocumentContext } from './view/render'

const container = DocumentContext.querySelector("#root") || DocumentContext.querySelector('body') || DocumentContext.createElement('div')
const root = createRoot(container)
root.render(App)
