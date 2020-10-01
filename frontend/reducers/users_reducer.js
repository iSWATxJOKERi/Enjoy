import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return Object.assign({}, { [action.user.id]: action.user });
        case RECEIVE_USERS:
            let newstate = Object.assign({}, state);
            action.users.map(user => {
                newstate[user.id] = user
            })
            return newstate
        case RECEIVE_LIKE:
            // debugger
            return Object.assign({}, state, { like: action.like });
        case REMOVE_LIKE:
            let ns = Object.assign({}, state);
            delete ns[action.like.id];
            return ns;
        default:
            return state;
    }
}

export default usersReducer;