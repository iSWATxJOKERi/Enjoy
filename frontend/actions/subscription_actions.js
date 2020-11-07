import * as SubscriptionApiUtil from '../util/subscriptions_api_util';

export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";
export const RECEIVE_SUBSCRIPTION_ERRORS = "RECEIVE_SUBSCRIPTION_ERRORS";

const receiveSubscription = subscription => {
    return {
        type: RECEIVE_SUBSCRIPTION,
        subscription
    }
}

const receiveSubscriptions = subs => {
    return {
        type: RECEIVE_SUBSCRIPTIONS,
        subs
    }
}

const removeSubscription = subscription => {
    return {
        type: REMOVE_SUBSCRIPTION,
        subscription
    }
}

const receiveSubscriptionErrors = errors => {
    return {
        type: RECEIVE_SUBSCRIPTION_ERRORS,
        errors
    }
}

export const createSubscription = sub => dispatch => {
    return SubscriptionApiUtil.createSubscription(sub).then(sub => {
        dispatch(receiveSubscription(sub))
    }, errors => {
        dispatch(receiveSubscriptionErrors(errors.responseJSON))
    })
}

export const deleteSubscription = sub => dispatch => {
    return SubscriptionApiUtil.deleteSubscription(sub).then(sub => {
        dispatch(removeSubscription(sub))
    }, errors => {
        dispatch(receiveSubscriptionErrors(errors.responseJSON))
    })
}

export const fetchSubscription = (id, channel_id) => dispatch => {
    return SubscriptionApiUtil.fetchSubscription(id, channel_id).then(sub => {
        dispatch(receiveSubscription(sub))
    }, errors => {
        dispatch(receiveSubscriptionErrors(errors.responseJSON))
    })
}

export const fetchSubscriptions = id => dispatch => {
    return SubscriptionApiUtil.fetchSubscriptions(id).then(subs => {
        dispatch(receiveSubscriptions(subs))
    }, errors => {
        dispatch(receiveSubscriptionErrors(errors.responseJSON))
    })
}