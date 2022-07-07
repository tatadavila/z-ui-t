// @components
import { Button, ThumbsDown, ThumbsUp, ViewType } from '~/components'

// @interfaces
import { ViewTypeI } from '~/interfaces'
import { ThubsStatesI, VoteNowStateI } from './boxStates.interface'

// @utils
import { boxImage, votingPercentage } from '~/utils'
import { convertDate } from '~/utils/convertDate'

// @vendors
import { useEffect, useState } from 'react'

export const Box = ({ data, key, setData }: ViewTypeI) => {
    const [thumbsState, setThumbsState] = useState<ThubsStatesI>({
        thumbsDown: false,
        thumbsUp: false,
    })
    const [voteNowState, setVoteNowState] = useState<number>(0)
    const { negative, positive } = votingPercentage(
        data.votes.negative,
        data.votes.positive,
    )
    const handleThumbsButton = (
        property: keyof typeof thumbsState,
        event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        console.log('EVENT', event)

        for (const item in thumbsState) {
            thumbsState[item as keyof typeof thumbsState] = false
        }

        setThumbsState({
            ...thumbsState,
            [property]: !thumbsState[property],
        })
        setVoteNowState(1)
    }
    const handleVoteNow = (
        property: keyof typeof voteNowState,
        event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        if (voteNowState === 1) {
            setVoteNowState(2)
        } else {
            setVoteNowState(0)
        }
    }
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
                    {negative > positive ? (
                        <ThumbsDown background />
                    ) : (
                        <ThumbsUp background />
                    )}
                    <section className="box__celebrity-name">
                        {data.name}
                    </section>
                </div>
                <section className="box__body-description">
                    {data.description}
                </section>
                <section className="box__last-updated">
                    {voteNowState !== 2
                        ? `${convertDate(data.lastUpdated)} ago in ${
                              data.category
                          }`
                        : 'Thank you for voting!'}
                </section>
                <section className="box__voting">
                    {voteNowState !== 2 && (
                        <>
                            <ThumbsUp
                                background
                                onClickHandler={handleThumbsButton}
                                selected={thumbsState.thumbsUp}
                            />
                            <ThumbsDown
                                background
                                onClickHandler={handleThumbsButton}
                                selected={thumbsState.thumbsDown}
                            />
                        </>
                    )}
                    <Button
                        disabled={voteNowState === 0}
                        onClickHandler={handleVoteNow}
                    >
                        {voteNowState !== 2 ? ' Vote Now' : 'Vote Again'}
                    </Button>
                </section>
            </div>
            <footer className="box-percentage__container">
                <div
                    className={`box-percentage__bar bp__left-bar light-aquamarine-bg bar-width-${positive}`}
                >
                    <ThumbsUp />
                    {`${positive}%`}
                </div>
                <div
                    className={`box-percentage__bar bp__right-bar light-yellow-bg bar-width-${negative}`}
                >
                    {`${negative}%`}
                    <ThumbsDown />
                </div>
            </footer>
        </div>
    )
}
