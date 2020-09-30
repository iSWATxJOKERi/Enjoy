export const createLike = like => {
    // debugger
    return (
        $.ajax({
            method: 'POST',
            url: `/api/videos/${ like.likeable_id }/likes`,
            data: { like }
        })
    )
}

export const deleteLike = like => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/videos/${ like.likeable_id }/likes/${ like.id }`,
            data: { like }
        })
    )
}

export const fetchLikes = (id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/videos/${ id }/likes`
        })
    )
}

