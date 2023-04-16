export const RenderEntity = (entity: Entity) => {
    const {type, width, height, x, y} = entity
    const {ctx} = RenderContext
    ctx.fillStyle = 'red'
    ctx.fillRect(x, y, width, height)
}

export default {RenderEntity}
