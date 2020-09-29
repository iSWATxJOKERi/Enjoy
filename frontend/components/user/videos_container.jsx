// import React from 'react';
// import { connect } from 'react-redux';
// import withRouter from 'react-router-dom';
// import { fetchUser } from '../../actions/user_actions';
// import { fetchVideos } from '../../actions/video_actions';
// import Videos from './videos';

// const mapStateToProps = (state, ownProps) => {
//     return {
//         user: state.entities.users[ownProps.match.params.id],
//         videos: Object.values(state.entities.videos),
//         currentUser: state.session.id
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         fetchUser: id => dispatch(fetchUser(id)),
//         fetchVideos: () => dispatch(fetchVideos())
//     }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Videos));