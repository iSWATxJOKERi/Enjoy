import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import { fetchVideo, fetchVideos } from '../../../actions/video_actions';
import VideoShow from './video_show';
import { createLike, deleteLike, fetchLikes } from '../../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        video: state.entities.videos[ownProps.match.params.id],
        videos: Object.values(state.entities.videos),
        currentUser: state.session.id,
        user: state.entities.users[state.session.id],
        errors: state.errors.likes
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
        // fetchLikes: id => dispatch(fetchLikes(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);