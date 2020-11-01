export const fetchSubscription = (id, channel_id) => {
    // debugger
    return (
        $.ajax({
            method: 'GET',
            url: `/api/users/${ id }/subscriptions/?channel_id=${ channel_id }`
        })
    )
}

export const createSubscription = subscription => {
    // debugger
    return (
        $.ajax({
            method: 'POST',
            url: `/api/users/${ subscription.subscriber_id }/subscriptions`,
            data: { subscription }
        })
    )
}

export const deleteSubscription = subscription => {
    // debugger
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/users/${ subscription.subscriber_id }/subscriptions/${ subscription.id }`,
            data: { subscription }
        })
    )
}

