// @data
import { images } from './images'

export const boxImage = (image: string): string | undefined => {
    if (image in images) {
        return images[image]
    }
}
