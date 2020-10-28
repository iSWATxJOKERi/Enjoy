import { RECEIVE_COMMENT_LIKE, RECEIVE_LIKE, REMOVE_COMMENT_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USERS:
            let newstate = Object.assign({}, state);
            action.users.map(user => {
                newstate[user.id] = user
            })
            return newstate
        case RECEIVE_LIKE:
            // debugger
            return Object.assign({}, state, { like: action.like[0] ? action.like[0] : action.like });
        case REMOVE_LIKE:
            let ns = Object.assign({}, state);
            delete ns['like'];
            return ns;
        case RECEIVE_COMMENT_LIKE:
            // debugger
            let com = Object.assign({}, state, { 'commentLikes' : {} });
            action.like.commentlikes.map((like, idx) => {
                com['commentLikes'][action.like.commentlikes[idx].id] = like
            })
            return com
        case REMOVE_COMMENT_LIKE:
            let nsc = Object.assign({}, state);
            delete nsc['commentLikes'];
            return nsc;
        default:
            return state;
    }
}

export default usersReducer;