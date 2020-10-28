import { RECEIVE_LIKE, RECEIVE_LIKES, RECEIVE_LIKE_ERRORS } from '../actions/like_actions';

const likesErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_LIKE_ERRORS:
            return action.errors
        case RECEIVE_LIKE:
            return []
        default:
            return state
    }
}

export default likesErrorsReducer;