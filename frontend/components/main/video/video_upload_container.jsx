import React from 'react';
import { createVideo } from '../../../actions/video_actions';
import { connect } from 'react-redux';
import VideoModal from './video_modal';

const mapStateToProps = state => {
    // debugger
    return {
        errors: state.errors.videos,
        currentUser: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        processForm: video => dispatch(createVideo(video))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal);