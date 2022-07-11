// @interface
import { ThubsStatesI } from '../boxStates.interface'

export const deactivateThumbs = (object: ThubsStatesI) => {
    for (const item in object) {
        object[item as keyof typeof object] = false
    }
}
