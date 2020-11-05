export const fetchUser = id => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/users/${ id }`
        })
    )
}

export const fetchUsers = () => {
    return (
        $.ajax({
            method: 'GET',
            url: '/api/users'
        })
    )
}

export const uploadAvatar = (avatar, id) => {
    // debugger
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/users/${ id }`,
            data: avatar,
            processData: false,
            contentType: false
        })
    )
}