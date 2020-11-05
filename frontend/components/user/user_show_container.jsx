import React from 'react';
import { connect } from 'react-redux';
import { createSubscription, deleteSubscription, fetchSubscription } from '../../actions/subscription_actions';
import { fetchUser, uploadAvatar } from '../../actions/user_actions';
import { fetchVideos } from '../../actions/video_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        videos: Object.values(state.entities.videos),
        currentUser: state.session.id,
        like: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        fetchVideos: () => dispatch(fetchVideos()),
        processAvatar: (avatar, id) => dispatch(uploadAvatar(avatar, id)),
        fetchSubscription: (id, sub_id) => dispatch(fetchSubscription(id, sub_id)),
        subscribe: sub => dispatch(createSubscription(sub)),
        unsubscribe: sub => dispatch(deleteSubscription(sub))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);