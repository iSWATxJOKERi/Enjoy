import * as CommentApiUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const receiveComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

const removeComment = comment => {
    return {
        type: REMOVE_COMMENT,
        comment
    }
}

const receiveCommentsErrors = errors => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors
    }
}

export const createComment = comment => dispatch => {
    return CommentApiUtil.createComment(comment).then(comment => {
        dispatch(receiveComment(comment))
    }, errors => {
        receiveCommentsErrors(errors)
    })
}

export const fetchComments = videoId => dispatch => {
    return CommentApiUtil.fetchComments(videoId).then(comments => {
        dispatch(receiveComments(comments))
    }, errors => {
        receiveCommentsErrors(errors)
    })
}

export const fetchComment = comment => dispatch => {
    return CommentApiUtil.fetchComment(comment).then(comment => {
        dispatch(receiveComment(comment))
    }, errors => {
        receiveCommentsErrors(errors)
    })
}

export const updateComment = comment => dispatch => {
    return CommentApiUtil.updateComment(comment).then(comment => {
        dispatch(receiveComment(comment))
    }, errors => {
        receiveCommentsErrors(errors)
    })
}

export const deleteComment = comment => dispatch => {
    return CommentApiUtil.deleteComment(comment).then(comment => {
        dispatch(removeComment(comment))
    }, errors => {
        receiveCommentsErrors(errors)
    })
}