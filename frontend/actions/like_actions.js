import * as LikeApiUtil from '../util/likes_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";
export const RECEIVE_COMMENT_LIKE = "RECEIVE_COMMENT_LIKE";
export const REMOVE_COMMENT_LIKE = "REMOVE_COMMENT_LIKE";
export const RECEIVE_COMMENT_LIKE_ERRORS = "RECEIVE_COMMENT_LIKE_ERRORS";

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

const receiveCommentLike = like => {
    return {
        type: RECEIVE_COMMENT_LIKE,
        like
    }
}

const removeCommentLike = like => {
    return {
        type: REMOVE_COMMENT_LIKE,
        like
    }
}

const receiveCommentLikeErrors = errors => {
    return {
        type: RECEIVE_COMMENT_LIKE_ERRORS,
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

export const createCommentLike = (like, videoId) => dispatch => {
    return LikeApiUtil.createCommentLike(like, videoId).then(like => {
        // debugger
        dispatch(receiveCommentLike(like))
    }, errors => {
        // debugger
        dispatch(receiveCommentLikeErrors(errors.responseJSON))
    })
}

export const deleteCommentLike = (like, videoId) => dispatch => {
    // debugger
    return LikeApiUtil.deleteCommentLike(like, videoId).then(like => {
        dispatch(removeCommentLike(like))
    }, errors => {
        dispatch(receiveCommentLikeErrors(errors.responseJSON))
    })
}

export const fetchCommentLike = (commentId, videoId) => dispatch => {
    // debugger
    return LikeApiUtil.fetchCommentLike(commentId, videoId).then(like => {
        dispatch(receiveCommentLike(like))
    }, errors => {
        dispatch(receiveCommentLikeErrors(errors.responseJSON))
    })
}
