import * as VideoApiUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

const receiveVideoErrors = errors => {
    return {
        type: RECEIVE_VIDEO_ERRORS,
        errors
    }
}

export const receiveVideos = videos => {
    // debugger
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
}

export const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
})

const removeVideo = id => ({
    type: REMOVE_VIDEO,
    id
})

export const fetchVideos = () => dispatch => {
    // debugger
    VideoApiUtil.fetchVideos().then(videos => {
        dispatch(receiveVideos(videos))
    }, errors => dispatch(receiveVideoErrors(errors.responseJSON)))
}

export const fetchVideo = id => dispatch => {
    VideoApiUtil.fetchVideo(id).then(video => {
        dispatch(receiveVideo(video))
    }, errors => dispatch(receiveVideoErrors(errors.responseJSON)))
}

export const createVideo = video => dispatch => {
    VideoApiUtil.createVideo(video).then(video => {
        dispatch(receiveVideo(video))
    }, errors => dispatch(receiveVideoErrors(errors.responseJSON)))
}

export const updateVideo = video => dispatch => {
    VideoApiUtil.updateVideo(video).then(video => {
        dispatch(receiveVideo(video))
    }, errors => dispatch(receiveVideoErrors(errors.responseJSON)))
}

export const deleteVideo = id => dispatch => {
    VideoApiUtil.deleteVideo(id).then(() => dispatch(removeVideo(id)))
}