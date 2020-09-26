import React from 'react';
import NavBar from '../../navbar/nav_bar';

class VideoShow extends React.Component {
    componentDidMount() {
        // debugger
        this.props.fetchVideo(this.props.match.params.id);
    }

    render() {
        return (
            <section className="show-child">
                <div className="primary">
                    <div className="primary-inner">
                        { this.props.video ? <video className="video"><source src={ this.props.video.videoUrl } /></video> : null }
                    </div>
                </div>
                <div className="secondary">
                    UP NEXT
                </div>
            </section>
        )
    }
}

export default VideoShow;