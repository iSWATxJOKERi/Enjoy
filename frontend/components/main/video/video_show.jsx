import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import dateConverter from '../../../util/date_converter.js';
import UpNext from './up_next';
import { Route } from 'react-router-dom';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0,//this.props.video.num_likes,
            dislike: 0, //this.props.video.num_dislikes
            errors: this.props.errors,
            like_color: ""
        }
        this.handleClickOnLike = this.handleClickOnLike.bind(this);
        this.handleClickOnDislike = this.handleClickOnDislike.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchUser(this.props.currentUser);
        this.props.fetchVideo(this.props.match.params.id);
        this.props.fetchLikes(this.props.match.params.id);
        this.props.fetchVideos();
    }

    handleClickOnLike(field) {
        // debugger
        return (e) => {
            // debugger
            if(this.props.currentUser) {
                // debugger
                let like = {"kind_of": `${field}`, "likeable_id": `${ this.props.video.id }`, "likeable_type": "Video", "liker_id": `${ this.props.currentUser }` }
                if(this.props.user.liked_videos.includes(this.props.match.params.id)) {
                    // debugger
                    this.props.removeLike(like).then(() => {
                        this.setState({
                            [field]: this.props.video.num_likes - 1,
                            like_color: ""
                        })
                    }, errors => {
                            this.setState({
                                errors: errors.responseJSON
                            })
                    })
                } else {
                    this.props.createLike(like).then(() => {
                        // debugger
                        this.setState({
                            [field]: this.props.video.num_likes + 1,
                            like_color: "blue"
                        })
                    }, errors => {
                        this.setState({
                            errors: errors.responseJSON
                        })
                    })
                }
            } else {
                alert("Please sign-in");
            }
        }
    }

    handleClickOnDislike(field) {
        // debugger
        return (e) => {
            // debugger
            if(this.props.currentUser) {
                // debugger
                let like = {"kind_of": `${field}`, "likeable_id": `${ this.props.video.id }`, "likeable_type": "Video", "liker_id": `${ this.props.currentUser }` }
                if(this.props.user.disliked_videos.includes(this.props.match.params.id)) {
                    // debugger
                    this.props.removeLike(like).then(() => {
                        this.setState({
                            [field]: this.props.video.num_likes - 1,
                            like_color: ""
                        })
                    }, errors => {
                            this.setState({
                                errors: errors.responseJSON
                            })
                    })
                } else {
                    this.props.createLike(like).then(() => {
                        // debugger
                        this.setState({
                            [field]: this.props.video.num_likes + 1,
                            like_color: "blue"
                        })
                    }, errors => {
                        this.setState({
                            errors: errors.responseJSON
                        })
                    })
                }
            } else {
                alert("Please sign-in");
            }
        }
    }

    render() {
        const icon = <FontAwesomeIcon icon="user-circle" />
        const like = <FontAwesomeIcon onClick={ this.handleClickOnLike('like') } id="like-button" className={ this.state.like_color === "" ? "" : this.state.like_color } icon="thumbs-up" />
        const dislike = <FontAwesomeIcon onClick={ this.handleClickOnDislike('dislike') } id="dislike-button" icon="thumbs-down" />
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
                                            <section className="likes-container">
                                                <div className="like">
                                                    { this.state.like }
                                                    { like }
                                                </div>
                                                <div className="dislike">
                                                    { dislike }
                                                </div>
                                            </section>
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