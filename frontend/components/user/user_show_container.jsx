import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import UserShow from './user_show';

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

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);