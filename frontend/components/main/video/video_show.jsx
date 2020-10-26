import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import dateConverter from '../../../util/date_converter.js';
import UpNext from './up_next';
import { Route } from 'react-router-dom';
import Likes from '../likes/likes';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchUser(this.props.currentUser);
        this.props.fetchVideo(this.props.match.params.id);
        // this.props.fetchLike(this.props.match.params.id);
        this.props.fetchVideos();
    }

    render() {
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
                                <video controls preload="auto" autoPlay src={ this.props.video.videoUrl } className="video"></video>
                                <div className="video-info">
                                    <h2 className="video-title">{ this.props.video.title }</h2>
                                    <div className="video-stats">
                                        <div className="left-stats">
                                            <span>1,000 views </span>
                                            <span>&#8226;</span>
                                            <span> { dateConverter(this.props.video.created_at) }</span>
                                        </div>
                                        <div className="right-stats">
                                            <Likes allProps={ this.props } video={ this.props.video }/>
                                        </div>
                                    </div>
                                </div>
                                <div className="secondary-video-info">
                                    <div className="left-info">
                                        <span id="user4">{ this.props.video.uploader.username[0] }</span>
                                        <div className="middle-content">
                                            <span>{ this.props.video.uploader.username }</span>
                                        </div>
                                    </div>
                                    <div className="right-content">
                                        {/* <Likes /> */}
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