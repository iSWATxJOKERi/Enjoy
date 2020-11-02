import React from 'react';
import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { videoSearch, channelSearch } from '../../actions/search_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        user: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => dispatch(logout()),
        fetchUser: id => dispatch(fetchUser(id)),
        getSearchVideos: query => dispatch(videoSearch(query)),
        getSearchUser: query => dispatch(channelSearch(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
