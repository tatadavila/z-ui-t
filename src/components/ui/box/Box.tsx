// @components
import { ViewType, ThumbsDown, ThumbsUp } from '~/components'

// @interfaces
import { ViewTypeI } from '~/interfaces'

// @utils
import { boxImage } from '~/utils'

const Box = ({ data }: ViewTypeI) => {
    return (
        <div className="box__container">
            <picture>
                <source srcSet={boxImage(data.picture)} type="image/webp" />
                <img
                    alt={data.name}
                    className="box__background-image"
                    loading="lazy"
                    src={boxImage(data.picture)}
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

export default ViewType(Box)
