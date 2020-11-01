import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import { fetchVideo, fetchVideos } from '../../../actions/video_actions';
import VideoShow from './video_show';
import { createCommentLike, createLike, deleteCommentLike, deleteLike, fetchCommentLike, fetchLike } from '../../../actions/like_actions';
import { createComment, deleteComment, fetchComments, updateComment } from '../../../actions/comment_actions';
import { createSubscription, deleteSubscription, fetchSubscription } from '../../../actions/subscription_actions';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        videos: Object.values(state.entities.videos),
        currentUser: state.session.id,
        user: state.entities.users[state.session.id],
        errors: state.errors.likes[0],
        like: state,
        video: Object.values(state.entities.videos)[ownProps.match.params.id - 1],
        comments: state.entities.comments
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        fetchVideo: id => dispatch(fetchVideo(id)),
        fetchVideos: () => dispatch(fetchVideos()),
        createLike: like => dispatch(createLike(like)),
        removeLike: like => dispatch(deleteLike(like)),
        fetchLike: id => dispatch(fetchLike(id)),
        fetchComments: videoId => dispatch(fetchComments(videoId)),
        createComment: comment => dispatch(createComment(comment)),
        removeComment: comment => dispatch(deleteComment(comment)),
        updateComment: comment => dispatch(updateComment(comment)),
        fetchCommentLikes: (commentId, videoId) => dispatch(fetchCommentLike(commentId, videoId)),
        createCommentLike: (commentId, videoId) => dispatch(createCommentLike(commentId, videoId)),
        removeCommentLike: (commentId, videoId) => dispatch(deleteCommentLike(commentId, videoId)),
        fetchSubscription: (id, sub_id) => dispatch(fetchSubscription(id, sub_id)),
        subscribe: sub => dispatch(createSubscription(sub)),
        unsubscribe: sub => dispatch(deleteSubscription(sub))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);