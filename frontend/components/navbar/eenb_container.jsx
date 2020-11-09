import React from 'react';
import EENavBar from './everywhere_else_nav_bar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import { channelSearch, videoSearch } from '../../actions/search_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        user: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => dispatch(logout()),
        getSearchVideos: query => dispatch(videoSearch(query)),
        getSearchUser: query => dispatch(channelSearch(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EENavBar);
