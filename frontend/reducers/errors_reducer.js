import { combineReducers } from 'redux';
import commentsErrorsReducer from './comments_errors_reducer';
import likesErrorsReducer from './likes_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import videoErrorsReducer from './video_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    videos: videoErrorsReducer,
    users: userErrorsReducer,
    likes: likesErrorsReducer,
    comments: commentsErrorsReducer
})

export default errorsReducer;