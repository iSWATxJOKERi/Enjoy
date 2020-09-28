import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo, fetchVideos } from '../../../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        video: state.entities.videos[ownProps.match.params.id],
        videos: Object.values(state.entities.videos)
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchVideo: id => dispatch(fetchVideo(id)),
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);