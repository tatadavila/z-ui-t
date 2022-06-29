type voteT = {
    positive: number
    negative: number
}

export interface DataI {
    name: string
    description: string
    category: string
    picture: string
    lastUpdated: string
    votes: voteT
}
