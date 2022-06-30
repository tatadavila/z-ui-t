import { VotingPercentageI } from '~/interfaces/votingPercentage.interface'

export const votingPercentage = (
    negative: number,
    positive: number,
): VotingPercentageI => {
    return {
        negative:
            Math.round((negative / (negative + positive)) * 100 * 10) / 10,
        positive:
            Math.round((p0ositive / (negative + positive)) * 100 * 10) / 10,
    }
}
