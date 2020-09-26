import React from 'react';

class VideoShow extends React.Component {
    componentDidMount() {
        // debugger
        this.props.fetchVideo(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                { this.props.video ? <video width="320" height="220"><source src={ this.props.video.videoUrl } /></video> : null }
            </div>
        )
    }
}

export default VideoShow;