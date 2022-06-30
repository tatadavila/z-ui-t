import { VotingPercentageI } from '~/interfaces/votingPercentage.interface'

export const votingPercentage = (
    negative: number,
    positive: number,
): VotingPercentageI => {
    return {
        negative: Math.round((negative / (negative + positive)) * 100),
        positive: Math.round((positive / (negative + positive)) * 100),
    }
}
