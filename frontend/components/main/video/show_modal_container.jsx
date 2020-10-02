import React from 'react';
import { connect } from 'react-redux';
import ShowPageModal from './show_page_modal';

const mapStateToProps = state => {
    return {
        currentUser: state.session.id
    }
}

export default connect(mapStateToProps, null)(ShowPageModal);