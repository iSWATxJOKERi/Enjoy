import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { updateVideo } from '../../actions/video_actions';
import VideoUpdateForm from './video_update_form';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        video: state.entities.videos[ownProps.match.params.id],
        currentUser: state.session.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        processForm: video => dispatch(updateVideo(video))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoUpdateForm);