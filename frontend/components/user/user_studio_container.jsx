import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, uploadAvatar } from '../../actions/user_actions';
import { fetchVideos } from '../../actions/video_actions';
import UserStudio from './user_studio';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        videos: Object.values(state.entities.videos),
        currentUser: state.session.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        fetchVideos: () => dispatch(fetchVideos()),
        processAvatar: (avatar, id) => dispatch(uploadAvatar(avatar, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStudio);