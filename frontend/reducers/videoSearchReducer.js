import { RECEIVE_VIDEO_SEARCH } from '../actions/search_actions';

const videoSearchReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_VIDEO_SEARCH:
            let ss = {};
            action.videos.map(video => {
                ss[video.id] = video
            })
            // debugger
            return ss
        default:
            return state
    }
}

export default videoSearchReducer;