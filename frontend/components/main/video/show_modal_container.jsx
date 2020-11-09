import React from 'react';
import { connect } from 'react-redux';
import ShowPageModal from './show_page_modal';
import { fetchUsers } from '../../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        user: state.entities.users[state.session.id],
        users: state.entities.users
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPageModal);