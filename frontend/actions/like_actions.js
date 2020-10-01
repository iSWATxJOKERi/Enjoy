import * as LikeApiUtil from '../util/likes_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";

const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = like => {
    return {
        type: REMOVE_LIKE,
        like
    }
}

const receiveLikeErrors = errors => {
    return {
        type: RECEIVE_LIKE_ERRORS,
        errors
    }
}

export const createLike = like => dispatch => {
    return LikeApiUtil.createLike(like).then(like => {
        // debugger
        dispatch(receiveLike(like))
    }, errors => {
        // debugger
        dispatch(receiveLikeErrors(errors.responseJSON))
    })
}

export const deleteLike = like => dispatch => {
    // debugger
    return LikeApiUtil.deleteLike(like).then(like => {
        dispatch(removeLike(like))
    }, errors => {
        dispatch(receiveLikeErrors(errors.responseJSON))
    })
}

export const fetchLike = id => dispatch => {
    // debugger
    return LikeApiUtil.fetchLike(id).then(like => {
        dispatch(receiveLike(like))
    }, errors => {
        dispatch(receiveLikeErrors(errors.responseJSON))
    })
}
