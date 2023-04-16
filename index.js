import './assets/style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from '/assets/vite.svg'
import { setupScore } from './src/ui/score'
import {PlayerEntity} from './src/entities/player'
import {RenderEntity} from './src/render'

setupScore(document.querySelector('#score'))
