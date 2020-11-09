import React from 'react';
import { connect } from 'react-redux';
import MainContent from './main_content';
import { fetchVideos } from '../../actions/video_actions';
import { fetchSubscriptions } from '../../actions/subscription_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        videos: Object.values(state.entities.videos),
        user: state.entities.users[state.session.id],
        users: state.entities.users
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getVideos: () => dispatch(fetchVideos()),
        fetchSubscriptions: id => dispatch(fetchSubscriptions(id))
        // fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
