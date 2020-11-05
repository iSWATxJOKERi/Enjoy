export const fetchComments = videoId => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/videos/${ videoId }/comments`
        })
    )
}

export const fetchComment = comment => {
    // debugger
    return (
        $.ajax({
            method: 'GET',
            url: `/api/videos/${ comment.video_id }/comments/${ comment.id }`,
            data: { comment }
        })
    )
}

export const createComment = comment => {
    return (
        $.ajax({
            method: 'POST',
            url: `/api/videos/${ comment.video_id }/comments`,
            data: { comment }
        })
    )
}

export const updateComment = comment => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/videos/${ comment.video_id }/comments/${ comment.id }`,
            data: { comment }
        })
    )
}

export const deleteComment = comment => {
    // debugger
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/videos/${ comment.video_id }/likes/${ comment.id }`,
            data: { comment } 
        })
    )
}