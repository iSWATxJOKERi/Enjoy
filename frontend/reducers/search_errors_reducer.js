import { RECEIVE_SEARCH_ERRORS, RECEIVE_USER_SEARCH, RECEIVE_VIDEO_SEARCH } from '../actions/search_actions';

const searchErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_SEARCH_ERRORS:
            return action.errors
        case RECEIVE_VIDEO_SEARCH:
            return []
        case RECEIVE_USER_SEARCH:
            return []
        default:
            return state
    }
}

export default searchErrorsReducer;