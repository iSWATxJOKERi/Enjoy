import { RECEIVE_USER, RECEIVE_USERS, RECEIVE_USER_ERRORS } from '../actions/user_actions';

const userErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors
        case RECEIVE_USER:
            return []
        case RECEIVE_USERS:
            return []
        default:
            return state
    }
}

export default userErrorsReducer;

