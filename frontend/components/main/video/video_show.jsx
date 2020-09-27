import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pop: false
        }
    }

    componentDidMount() {
        // debugger
        this.props.fetchVideo(this.props.match.params.id);
    }

    render() {
        const icon = <FontAwesomeIcon icon="user-circle" />
        return (
            <section className="show-video-section">
                <section className="show-child">
                    <div className="primary">
                    { this.props.video ? 
                        <div className="primary-inner">
                            <video controls preload="auto" className="video"><source src={ this.props.video.videoUrl } /></video>
                            <div className="video-info">
                                <h2>{ this.props.video.title }</h2>
                                <div className="video-stats">
                                    <span>View Count</span>
                                    <span>{ this.props.video.created_at }</span>
                                </div>
                            </div>
                            <div className="secondary-video-info">
                                { icon }
                                <div className="middle-content">
                                    <span>{ this.props.video.uploader.username }</span>
                                </div>
                                <div className="right-content">
                                    
                                </div>
                            </div>
                        </div> : null }
                    </div>
                    <div className="secondary">
                        UP NEXT
                        
                    </div>
                </section>
            </section>
        )
    }
}

export default VideoShow;