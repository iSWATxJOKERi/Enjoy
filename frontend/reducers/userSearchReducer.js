import { RECEIVE_USER_SEARCH } from '../actions/search_actions';


const userSearchReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_USER_SEARCH:
            let ns = {};
            action.users.map(user => {
                ns[user.id] = user
            })
            // debugger
            return ns
        default:
            return state
    }
}

export default userSearchReducer;