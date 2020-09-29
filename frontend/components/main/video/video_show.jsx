import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import dateConverter from '../../../util/date_converter.js';
import UpNext from './up_next';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        // debugger
        this.props.fetchVideo(this.props.match.params.id);
        this.props.fetchVideos();
    }

    render() {
        const icon = <FontAwesomeIcon icon="user-circle" />
        let arr = [];
        if(this.props.videos.length > 1) {
            // debugger
            this.props.videos.map(video => {
                if(video.id !== this.props.match.params.id) {
                    arr.push(video)
                }
            })
        }
        // debugger
        return (
            <section className="show-video-section">
                <section className="show-child">
                    <div className="primary">
                        { this.props.videos.length > 1 ? 
                            <div className="primary-inner">
                                <video controls preload="auto" className="video"><source src={ this.props.video.videoUrl } /></video>
                                <div className="video-info">
                                    <h2 className="video-title">{ this.props.video.title }</h2>
                                    <div className="video-stats">
                                        <div className="left-stats">
                                            <span>1,000 views </span>
                                            <span>&#8226;</span>
                                            <span> { dateConverter(this.props.video.created_at) }</span>
                                        </div>
                                        <div className="right-stats">
                                            LIKES
                                        </div>
                                    </div>
                                </div>
                                <div className="secondary-video-info">
                                    <div className="left-info">
                                        { icon }
                                        <div className="middle-content">
                                            <span>{ this.props.video.uploader.username }</span>
                                        </div>
                                    </div>
                                    <div className="right-content">
                                        
                                    </div>
                                </div>
                            </div> : null 
                        }
                    </div>
                    { this.props.videos.length > 1 ? <UpNext video={ this.props.video } history={ this.props.history } videos={ arr }/> : null }
                </section>
            </section>
        )
    }
}

export default VideoShow;