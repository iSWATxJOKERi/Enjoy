import React from 'react';
import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        user: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => dispatch(logout()),
        fetchUser: id => dispatch(fetchUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
