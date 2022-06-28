// @components
import { ThumbsDown, ThumbsUp } from '../icons'

// @interfaces
import { BoxI } from './box.interface'

// @utils
import { boxImage } from 'src/utils'

export const Box: React.FC<BoxI> = ({ data }) => {
    return (
        <div className="box__container">
            <picture>
                <source srcSet={boxImage(data.image)} type="image/webp" />
                <img
                    alt={data.name}
                    className="box__background-image"
                    loading="lazy"
                    src={boxImage(data.image)}
                />
            </picture>
            <div className="box__body">
                <div className="box__body-header">
                    <ThumbsDown />
                    <section className="box__celebrity-name">
                        {data.name}
                    </section>
                </div>
                <section className="box__body-description">
                    {data.description}
                </section>
                <section className="box__last-updated"></section>
                <section className="box__voting">
                    <ThumbsUp />
                    <ThumbsDown />
                </section>
            </div>
        </div>
    )
}
