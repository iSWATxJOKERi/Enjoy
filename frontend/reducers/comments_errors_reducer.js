import { RECEIVE_COMMENT, RECEIVE_COMMENTS, RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';

const commentsErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors
        case RECEIVE_COMMENT:
            return []
        case RECEIVE_COMMENTS:
            return []
        default:
            return state
    }
}

export default commentsErrorsReducer;