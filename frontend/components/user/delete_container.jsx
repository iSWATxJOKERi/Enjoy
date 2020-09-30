import React from 'react';
import { connect } from 'react-redux';
import { deleteVideo, fetchVideo } from '../../actions/video_actions';
import VideoDeleteModal from './video_delete_modal';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        video: state.entities.videos[ownProps.match.params.id],
        currentUser: state.session.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchVideo: id => dispatch(fetchVideo(id)),
        deleteVideo: id => dispatch(deleteVideo(id)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDeleteModal);