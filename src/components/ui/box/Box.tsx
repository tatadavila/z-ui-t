// @components
import { Button, ThumbsDown, ThumbsUp, ViewType } from '~/components'

// @localStore
import { setItemLocalStorage } from '~/localStore'

// @interfaces
import { ViewTypeI, VotingPercentageI } from '~/interfaces'
import { ThubsStatesI } from './boxStates.interface'

// @utils
import { boxImage, convertDate, votingPercentage } from '~/utils'
import { deactivateThumbs } from './utils'

// @vendors
import { FC, useState } from 'react'

export const Box: FC<ViewTypeI> = ({ data, boxKey, information, setData }) => {
    console.log({ information })

    const negativeVotes = information.votes.negative
    const positiveVotes = information.votes.positive
    const [vPercentage, setVPercentage] = useState<VotingPercentageI>(
        votingPercentage(negativeVotes, positiveVotes),
    )
    const [thumbsState, setThumbsState] = useState<ThubsStatesI>({
        thumbsDown: false,
        thumbsUp: false,
    })
    const [voteNowState, setVoteNowState] = useState<number>(0)

    const handleThumbsButton = (property: keyof typeof thumbsState) => {
        deactivateThumbs(thumbsState)
        setThumbsState({
            ...thumbsState,
            [property]: !thumbsState[property],
        })
        setVoteNowState(1)
    }
    const handleVoteNow = (key: number) => {
        if (voteNowState === 1) {
            if (thumbsState.thumbsDown) {
                console.log('b4TD', data[key].votes)
                data[key] = {
                    ...data[key],
                    votes: {
                        negative: data[key].votes.negative + 1,
                        positive: data[key].votes.positive,
                    },
                }
                setData(data)
                console.log('aftrTD', data[key].votes)
                setItemLocalStorage('celebrities', data)
            } else {
                console.log('b4TU', data[key].votes)
                data[key] = {
                    ...data[key],
                    votes: {
                        negative: data[key].votes.negative,
                        positive: data[key].votes.positive + 1,
                    },
                }
                setData(data)
                console.log('aftrTU', data[key].votes)
                setItemLocalStorage('celebrities', data)
            }
            setVoteNowState(2)
            setVPercentage(
                votingPercentage(
                    data[key].votes.negative,
                    data[key].votes.positive,
                ),
            )
        } else {
            deactivateThumbs(thumbsState)
            setVoteNowState(0)
        }
    }
    return (
        <div className="box__container">
            <picture>
                <source
                    srcSet={boxImage(information.picture)}
                    type="image/webp"
                />
                <img
                    alt={information.name}
                    className="box__background-image"
                    loading="lazy"
                    src={boxImage(information.picture)}
                />
            </picture>
            <div className="box__body">
                <div className="box__body-header">
                    {vPercentage.negative > vPercentage.positive ? (
                        <ThumbsDown background />
                    ) : (
                        <ThumbsUp background />
                    )}
                    <section className="box__celebrity-name">
                        {information.name}
                    </section>
                </div>
                <section className="box__body-description">
                    {information.description}
                </section>
                <section className="box__last-updated">
                    {voteNowState !== 2
                        ? `${convertDate(information.lastUpdated)} ago in ${
                              information.category
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
                        boxKey={boxKey}
                        onClickHandler={handleVoteNow}
                    >
                        {voteNowState !== 2 ? ' Vote Now' : 'Vote Again'}
                    </Button>
                </section>
            </div>
            <footer className="box-percentage__container">
                <div
                    className={`box-percentage__bar bp__left-bar light-aquamarine-bg bar-width-${vPercentage.positive}`}
                >
                    <ThumbsUp />
                    {`${vPercentage.positive}%`}
                </div>
                <div
                    className={`box-percentage__bar bp__right-bar light-yellow-bg bar-width-${vPercentage.negative}`}
                >
                    {`${vPercentage.negative}%`}
                    <ThumbsDown />
                </div>
            </footer>
        </div>
    )
}
