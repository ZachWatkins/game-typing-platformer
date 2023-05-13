/**
 * Environment models.
 *
 * @author Zachary K. Watkins
 */
import { TILE } from '../common/constants'

export const platforms: Platform[] = [{
    x: 100,
    y: window.innerHeight - TILE,
    width: window.innerWidth,
    height: TILE,
    appearance: {
        backgroundColor: '#FFFF00',
    }
}];

type Platform = {
    x: number
    y: number
    width: number
    height: number
    appearance: {
        backgroundColor: string
    }
}
