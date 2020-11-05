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
            let s = Object.assign({}, state);
            s[action.comment.id] = action.comment
            return s
        case REMOVE_COMMENT:
            let r = Object.assign({}, state);
            delete r[action.comment.id];
            // debugger
            return r
        default:
            return state
    }
}

export default commentsReducer;