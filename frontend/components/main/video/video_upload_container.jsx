import React from 'react';
import { createVideo } from '../../../actions/video_actions';
import { connect } from 'react-redux';
import UploadForm from './upload_form';

const mapStateToProps = state => {
    return {
        errors: state.errors.videos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: video => dispatch(createVideo(video))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);