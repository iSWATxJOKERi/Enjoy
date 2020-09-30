import { combineReducers } from 'redux';
import likesErrorsReducer from './likes_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import videoErrorsReducer from './video_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    videos: videoErrorsReducer,
    users: userErrorsReducer,
    likes: likesErrorsReducer
})

export default errorsReducer;