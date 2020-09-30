import { RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_LIKES } from '../actions/like_actions';


const likesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like })
        case RECEIVE_LIKES:
            let newstate = Object.assign({}, state);
            action.like.map(like => {
                newstate[like.id] = like
            })
            return newstate
        case REMOVE_LIKE:
            let ns = Object.assign({}, state);
            delete ns[action.like.id];
            return ns;
        default:
            return state;
    }
}

export default likesReducer;