import { connect } from 'react-redux';
import VideoSearch from './video_search';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        currentUser: state.session.id,
        videos: state.entities.search.videoSearch,
        users: state.entities.search.userSearch
    }
}

export default connect(mapStateToProps)(VideoSearch);