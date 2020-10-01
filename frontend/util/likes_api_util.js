export const createLike = like => {
    debugger
    return (
        $.ajax({
            method: 'POST',
            url: `/api/videos/${ like.likeable_id }/likes`,
            data: { like }
        })
    )
}

export const deleteLike = like => {
    debugger
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/videos/${ like.likeable_id }/likes/${ like.id }`,
            data: { like }
        })
    )
}

export const fetchLike = (id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/videos/${ id }/likes`
        })
    )
}

