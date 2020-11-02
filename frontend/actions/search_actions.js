import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_VIDEO_SEARCH = "RECEIVE_VIDEO_SEARCH";
export const RECEIVE_USER_SEARCH = "RECEIVE_USER_SEARCH";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

const receiveVideoSearch = videos => {
    return {
        type: RECEIVE_VIDEO_SEARCH,
        videos
    }
}

const receiveUserSearch = users => {
    return {
        type: RECEIVE_USER_SEARCH,
        users
    }
}

const receiveSearchErrors = errors => {
    return {
        type: RECEIVE_SEARCH_ERRORS,
        errors
    }
}

export const videoSearch = query => dispatch => {
    return SearchApiUtil.videoSearch(query).then(videos => {
        dispatch(receiveVideoSearch(videos))
    }, errors => {
        dispatch(receiveSearchErrors(errors.responseJSON))
    })
}

export const channelSearch = query => dispatch => {
    return SearchApiUtil.channelSearch(query).then(users => {
        dispatch(receiveUserSearch(users))
    }, errors => {
        dispatch(receiveSearchErrors(errors.responseJSON))
    })
}