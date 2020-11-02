export const videoSearch = query => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/videos/?query=${ query }`
        })
    )
}

export const channelSearch = query => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/users/?query=${ query }`
        })
    )
}