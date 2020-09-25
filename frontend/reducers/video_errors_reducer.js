import { RECEIVE_VIDEO_ERRORS } from '../actions/video_actions';

const videoErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors
        default:
            return state
    }
}

export default videoErrorsReducer;