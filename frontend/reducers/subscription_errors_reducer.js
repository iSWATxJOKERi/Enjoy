import { RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION, RECEIVE_SUBSCRIPTION_ERRORS } from '../actions/subscription_actions';

const subscriptionErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_SUBSCRIPTION_ERRORS:
            return action.errors
        case RECEIVE_SUBSCRIPTION:
            return []
        default:
            return state
    }
}

export default subscriptionErrorsReducer;