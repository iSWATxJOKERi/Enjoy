import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import EditVids from './edit_vids_item';

export default class Videos extends React.Component {
    constructor(props) {
        super(props);
        // this.toggleVideos = this.toggleVideos.bind(this);
    }

    componentDidMount() {
        // debugger
        // this.props.fetchUser(this.props.match.params.id);
        // this.props.fetchVideos();
    }

    render() {
        let vids;
        if(this.props.allProps.videos.length > 0) {
            vids = this.props.allProps.videos.map(video => {
                if(video.uploader.id === this.props.allProps.user.id) {
                    return <EditVids key={ video.id } allProps={ this.props.allProps } vid={ video }/>
                }
            })
        }
        return (
            <>
                <h1 className="videos-name">Videos</h1>
                <div className="all-videos">
                    { vids }
                </div>
            </>
        )
    }
}