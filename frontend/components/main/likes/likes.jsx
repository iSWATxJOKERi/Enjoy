import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.props.video.num_likes,
            dislike: this.props.video.num_dislikes,
            errors: this.props.allProps.errors,
            liked_already: null,
            disliked_already: null,
        }
        this.handleClickOnLike = this.handleClickOnLike.bind(this);
        this.handleClickOnDislike = this.handleClickOnDislike.bind(this);
    }

    componentDidMount() {
        if(this.props.allProps.user) {
            if(this.props.allProps.user.liked_videos || this.props.allProps.user.disliked_videos) {
                this.setState({
                    liked_already: this.props.allProps.user.liked_videos.includes(Number(this.props.allProps.match.params.id)),
                    disliked_already: this.props.allProps.user.disliked_videos.includes(Number(this.props.allProps.match.params.id))
                })
            }
        }
    }

    componentDidUpdate(prevProps) {
        if((this.props.video.num_likes !== prevProps.video.num_likes) || (this.props.video.num_dislikes !== prevProps.video.num_dislikes)) {
            this.setState({
                like: this.props.video.num_likes,
                dislike: this.props.video.num_dislikes
            })
            if(this.props.allProps.user) {
                if(this.props.allProps.user.liked_videos || this.props.allProps.disliked_videos) {
                    this.setState({
                        liked_already: this.props.allProps.user.liked_videos.includes(Number(this.props.allProps.match.params.id)),
                        disliked_already: this.props.allProps.user.disliked_videos.includes(Number(this.props.allProps.match.params.id))
                    })
                }
            }
        }
    }

    handleClickOnLike(field) {
        return (e) => {
            if(this.props.allProps.currentUser) {
                let like = { "kind_of": `${ field }`, "likeable_id": `${ this.props.allProps.video.id }`, "likeable_type": "Video", "liker_id": `${ this.props.allProps.currentUser }` }
                if(this.state.liked_already) {
                    const real = this.props.allProps.like.entities.users.like.videolike[0] ? this.props.allProps.like.entities.users.like.videolike[0] : this.props.allProps.like.entities.users.like.videolike;
                    // debugger
                    this.props.allProps.removeLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser)
                    }).then(() => {
                        this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                            this.setState({
                                [field]: this.props.allProps.video.num_likes,
                                liked_already: false
                            })
                        })
                    })
                } else if(this.state.disliked_already) {
                    const real = this.props.allProps.like.entities.users.like.videolike[0] ? this.props.allProps.like.entities.users.like.videolike[0] : this.props.allProps.like.entities.users.like.videolike;
                    this.props.allProps.removeLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.createLike(like).then(() => {
                        }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                        }).then(() => {
                            this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                                this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                                    this.setState({
                                        dislike: this.props.allProps.video.num_dislikes,
                                        disliked_already: false,
                                        [field]: this.props.allProps.video.num_likes,
                                        liked_already: true
                                    })
                                })
                            })
                        })
                    })
                } else {
                    this.props.allProps.createLike(like).then(() => {
                        // debugger
                    }, () => {
                        this.setState({
                            errors: this.props.allProps.errors
                        })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                            this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                                this.setState({
                                    [field]: this.props.allProps.video.num_likes,
                                    liked_already: true
                                })
                            })
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
            if(this.props.allProps.currentUser) {
                // debugger
                let like = { "kind_of": `${ field }`, "likeable_id": `${ this.props.allProps.video.id }`, "likeable_type": "Video", "liker_id": `${ this.props.allProps.currentUser }` }
                if(this.state.disliked_already) {
                    // debugger
                    const real = this.props.allProps.like.entities.users.like.videolike[0] ? this.props.allProps.like.entities.users.like.videolike[0] : this.props.allProps.like.entities.users.like.videolike;
                    this.props.allProps.removeLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                            this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                                this.setState({
                                    [field]: this.props.allProps.video.num_dislikes,
                                    disliked_already: false
                                })
                            })
                        })
                    })
                } else if(this.state.liked_already) {
                    const real = this.props.allProps.like.entities.users.like.videolike[0] ? this.props.allProps.like.entities.users.like.videolike[0] : this.props.allProps.like.entities.users.like.videolike;
                    this.props.allProps.removeLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.createLike(like).then(() => {
                        }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                        }).then(() => {
                            this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                                this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                                    this.setState({
                                        like: this.props.allProps.video.num_likes,
                                        liked_already: false,
                                        [field]: this.props.allProps.video.num_dislikes,
                                        disliked_already: true
                                    })
                                })
                            })
                        })
                    })
                } else {
                    this.props.allProps.createLike(like).then(() => {
                    }, () => {
                        this.setState({
                            errors: this.props.allProps.errors
                        })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                            this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                                this.setState({
                                    [field]: this.props.allProps.video.num_dislikes,
                                    disliked_already: true
                                })
                            })
                        })
                    })
                }
            } else {
                alert("Please sign-in");
            }
        }
    }

    render() {
        const like = <FontAwesomeIcon onClick={ this.handleClickOnLike('like') } id="like-button" className={ this.state.liked_already ? "blue" : "black" } icon="thumbs-up" />
        const dislike = <FontAwesomeIcon onClick={ this.handleClickOnDislike('dislike') } id="dislike-button" className={ this.state.disliked_already ? "blue" : "black" } icon="thumbs-down" />
        // debugger
        return (
            <section className="likes-container">
                <div className="like">
                    { this.state.like }
                    { like }
                </div>
                <div className="dislike">
                    { this.state.dislike }
                    { dislike }
                </div>
            </section>
        )
    }

}

export default Likes;