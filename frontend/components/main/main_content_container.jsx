import React from 'react';
import { connect } from 'react-redux';
import MainContent from './main_content';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        videos: Object.values(state.entities.videos)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getVideos: () => dispatch(fetchVideos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
