import React from 'react';
import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { logout } from '../../util/session_api_util';

const mapStateToProps = state => {
    return {
        currentUser: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signin: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
