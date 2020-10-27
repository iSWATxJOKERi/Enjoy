import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_COMMENTS:
            let ns = {};
            action.comments.map(comment => {
                ns[comment.id] = comment
            })
            return ns;
        case RECEIVE_COMMENT:
            state[action.comment.id] = action.comment
            return state
        case REMOVE_COMMENT:
            let r = Object.assign({}, state);
            delete r[action.comment.id];
            return r
        default:
            return state
    }
}

export default commentsReducer;