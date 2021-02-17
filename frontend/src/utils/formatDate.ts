import formatDistance from 'date-fns/esm/formatDistance';


export const formatDate = (date: Date): string => {
    return formatDistance(
        date,
        new Date(),
    )
}