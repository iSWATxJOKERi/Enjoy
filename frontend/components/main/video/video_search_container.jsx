import { connect } from 'react-redux';
import { fetchSubscriptions } from '../../../actions/subscription_actions';
import { fetchUsers } from '../../../actions/user_actions';
import VideoSearch from './video_search';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        currentUser: state.session.id,
        videos: state.entities.search.videoSearch,
        users: state.entities.users,
        usearch: state.entities.search.userSearch
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSubscriptions: id => dispatch(fetchSubscriptions(id)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoSearch);