// @components
import { Button, ThumbsDown, ThumbsUp, ViewType } from '~/components'

// @interfaces
import { ViewTypeI } from '~/interfaces'

// @utils
import { boxImage, votingPercentage } from '~/utils'
import { convertDate } from '~/utils/convertDate'

// @vendors
import { useState } from 'react'

const Box = ({ data }: ViewTypeI) => {
    const { negative, positive } = votingPercentage(
        data.votes.negative,
        data.votes.positive,
    )
    console.log(negative, positive)

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
                    <ThumbsDown yellowBackground />
                    <section className="box__celebrity-name">
                        {data.name}
                    </section>
                </div>
                <section className="box__body-description">
                    {data.description}
                </section>
                <section className="box__last-updated">
                    {convertDate(data.lastUpdated)} ago in {data.category}
                </section>
                <section className="box__voting">
                    <ThumbsUp />
                    <ThumbsDown />
                    <Button>Vote Now</Button>
                </section>
            </div>
            <footer className="box-percentage__container ">
                <div className={`box-percentage__bar light-aquamarine-bg width-percentage-#${positive}`}>{`${positive}%`}</div>
                <div
                    className={`box-percentage__bar light-yellow-bg width-percentage-#${negative}`}
                >
                    {`${negative}%`}
                </div>
            </footer>
        </div>
    )
}

export default ViewType(Box)
