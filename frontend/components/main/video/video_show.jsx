import React from 'react';
import dateConverter from '../../../util/date_converter.js';
import UpNext from './up_next';
import Likes from '../likes/likes';
import Comments from '../comments/comments';
import Subscription from '../subscriptions/subscriptions';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        if(this.props.currentUser) {
            this.props.fetchUser(this.props.currentUser).then(() => {
                this.props.fetchVideos().then(() => {
                    this.props.fetchVideo(this.props.match.params.id).then(() => {
                        this.props.fetchSubscription(this.props.currentUser, this.props.video.uploader.id).then(() => {
                            this.props.fetchLike(this.props.match.params.id, this.props.currentUser).then(() => {
                                this.props.fetchComments(this.props.match.params.id)
                            })
                        })
                    })
                })
            })
        } else {
            this.props.fetchVideos().then(() => {
                this.props.fetchVideo(this.props.match.params.id).then(() => {
                    this.props.fetchLike(this.props.match.params.id, this.props.currentUser).then(() => {
                        this.props.fetchComments(this.props.match.params.id)
                    })
                })
            })
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.video !== prevProps.video) {
            this.props.fetchLike(this.props.match.params.id, this.props.currentUser).then(() => {
                this.props.fetchComments(this.props.match.params.id).then(() => {
                    if(this.props.currentUser) {
                        this.props.fetchSubscription(this.props.currentUser, this.props.video.uploader.id)
                    }
                })
            })
        }
    }

    render() {
        let use;
        let arr = [];
        let likes = this.props.video ? <Likes allProps={ this.props } video={ this.props.video } /> : null;
        let comments = this.props.video ? <Comments allProps={ this.props } video={ this.props.video } comments={ this.props.comments } /> : null;
        if(this.props.videos.length > 1) {
            // debugger
            this.props.videos.map(video => {
                if(video !== this.props.video) {
                    arr.push(video)
                }
            })
            if(this.props.video.uploader.id !== this.props.currentUser) {
                use = this.props.currentUser ? 
                    <Subscription channel={ this.props.video.uploader.id } user={ this.props.currentUser } allProps={ this.props }/> : 
                    <span id="subscribe" onClick={ () => window.location.href = "#/login" }>Login to Subscribe</span>
            } else {
                use = ""
            }
        }
        // debugger
        return (
            <section className="show-video-section">
                <section className="show-child">
                    <div className="primary">
                        { this.props.videos.length >= 1 ? 
                            <div className="primary-inner">
                                <video preload="auto" controls autoPlay muted src={`${ this.props.video.videoUrl }`} className="video"/>
                                <div className="video-info">
                                    <h2 className="video-title">{ this.props.video.title }</h2>
                                    <div className="video-stats">
                                        <div className="left-stats">
                                            <span>1,000 views </span>
                                            <span>&#8226;</span>
                                            <span>{ dateConverter(this.props.video.created_at) }</span>
                                        </div>
                                        <div className="right-stats">
                                            { likes }
                                        </div>
                                    </div>
                                </div>
                                <div className="secondary-video-info">
                                    <div className="left-content">
                                        <div className="left-info">
                                            { this.props.video.avatarUrl ? 
                                                <img id="user-pic4" src={ `${ this.props.video.avatarUrl }` } onClick={ () => this.props.history.push(`/users/${ this.props.video.uploader.id }`) } /> : 
                                                <span id="user4">{ this.props.video.uploader.username[0] }</span> }
                                                <div className="middle-content">
                                                    <span>{ this.props.video.uploader.username }</span>
                                                </div>
                                                { use }
                                        </div>
                                        <div className="video-description">Description</div>
                                    </div>
                                    { comments }
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