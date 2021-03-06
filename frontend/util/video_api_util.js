export const createVideo = video => {
    // debugger
    return (
        $.ajax({
            method: 'POST',
            url: 'api/videos/',
            data: video ,
            contentType: false,
            processData: false
        })
    )
}

export const fetchVideos = () => {
    return (
        $.ajax({
            method: 'GET',
            url: '/api/videos/'
        })
    )
}

export const fetchVideo = id => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/videos/${ id }/`
        })
    )
}

export const updateVideo = (video) => {
    // debugger
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/videos/${ video[1] }/`,
            data: video[0],
            contentType: false,
            processData: false
        })
    )
}

export const deleteVideo = id => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/videos/${ id }/`
        })
    )
}