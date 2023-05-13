/**
 * Environment models.
 *
 * @author Zachary K. Watkins
 */
import { TILE } from '../common/constants'

export const platforms: Platform[] = [{
    x: 0,
    y: window.innerHeight - TILE,
    width: window.innerWidth,
    height: TILE,
}];

type Platform = {
    x: number
    y: number
    width: number
    height: number
}
