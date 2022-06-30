export const convertDate = (lastUpdated: string): string => {
    const date = new Date(lastUpdated)
    const today = new Date()
    const options = {
        year: 'numeric',
        day: 'numeric',
        month: 'numeric',
    } as Intl.DateTimeFormatOptions
    const separateDate = date.toLocaleDateString('en-US', options).split('/')
    const separateToday = today.toLocaleDateString('en-US', options).split('/')
    const timeAgo = separateToday.map((elem, index) =>
        Math.abs(parseInt(elem) - parseInt(separateDate[index])),
    )
    const length = timeAgo.length
    return `${timeAgo[length - 1]} ${
        length > 2
            ? timeAgo[length - 1] > 1
                ? 'years'
                : length > 1
                ? timeAgo[length - 1] > 1
                    ? 'months'
                    : timeAgo[length - 1] > 1
                    ? 'days'
                    : 'year'
                : 'month'
            : 'day'
    }`
}
