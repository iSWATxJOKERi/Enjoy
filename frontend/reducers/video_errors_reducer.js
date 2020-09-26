import { RECEIVE_VIDEO, RECEIVE_VIDEOS, RECEIVE_VIDEO_ERRORS } from '../actions/video_actions';

const videoErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors
        case RECEIVE_VIDEO:
            return []
        default:
            return state
    }
}

export default videoErrorsReducer;