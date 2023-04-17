import './assets/style.css'
import { setupScore } from './ui/score'
import { PlayerEntity } from './entity'
// import { RenderEntity } from './render'

setupScore(document.querySelector('#score'))
type Entity = {
    type: string;
    width: number;
    height: number;
    x: number;
    y: number;
};

export const RenderEntity = (entity: Entity) => {
    const { type, width, height, x, y } = entity;
    const { ctx } = RenderContext;
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, width, height);
};

export default { RenderEntity };
