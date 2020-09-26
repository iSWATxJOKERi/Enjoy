import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../../../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        video: state.entities.videos[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchVideo: id => dispatch(fetchVideo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);