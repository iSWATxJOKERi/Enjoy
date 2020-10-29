import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class ReplyLikes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.props.reply.num_likes,
            dislike: this.props.reply.num_dislikes,
            errors: this.props.allProps.allProps.errors,
            liked_already: null,
            disliked_already: null,
        }
        this.handleClickOnLike = this.handleClickOnLike.bind(this);
        this.handleClickOnDislike = this.handleClickOnDislike.bind(this);
    }

    componentDidMount() {
        if(this.props.allProps.allProps.user) {
            if(this.props.allProps.allProps.user.liked_comments || this.props.allProps.allProps.user.disliked_comments) {
                this.setState({
                    liked_already: this.props.allProps.allProps.user.liked_comments.includes(this.props.reply.id),
                    disliked_already: this.props.allProps.allProps.user.disliked_comments.includes(this.props.reply.id)
                })
            }
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.reply !== prevProps.reply) {
            this.setState({
                like: this.props.reply.num_likes,
                dislike: this.props.reply.num_dislikes
            })
            if(this.props.allProps.allProps.user) {
                if(this.props.allProps.allProps.user.liked_comments || this.props.allProps.allProps.user.disliked_comments) {
                    this.setState({
                        liked_already: this.props.allProps.allProps.user.liked_comments.includes(this.props.reply.id),
                        disliked_already: this.props.allProps.allProps.user.disliked_comments.includes(this.props.reply.id)
                    })
                }
            }
        }
    }

    handleClickOnLike(field) {
        // debugger
        return (e) => {
            // debugger
            if(this.props.allProps.allProps.currentUser) {
                let like = { "kind_of": `${ field }`, "likeable_id": `${ this.props.reply.id }`, "likeable_type": "Comment", "liker_id": `${ this.props.allProps.allProps.currentUser }` }
                if(this.state.liked_already) {
                    // debugger
                    const real = this.props.allProps.allProps.like.entities.users.commentLikes[this.props.reply.id] ? this.props.allProps.allProps.like.entities.users.commentLikes[this.props.reply.id] : this.props.allProps.allProps.like.entities.users.commentLikes;
                    // debugger
                    this.props.allProps.allProps.removeCommentLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.allProps.fetchUser(this.props.allProps.allProps.currentUser)
                    }).then(() => {
                        this.props.allProps.allProps.fetchVideo(this.props.allProps.allProps.match.params.id).then(() => {
                            this.setState({
                                [field]: this.props.reply.num_likes,
                                liked_already: false
                            })
                        })
                    })
                } else if(this.state.disliked_already) {
                    const real = this.props.allProps.allProps.like.entities.users.commentDislikes[this.props.reply.id] ? this.props.allProps.allProps.like.entities.users.commentDislikes[this.props.reply.id] : this.props.allProps.allProps.like.entities.users.commentDislikes;
                    this.props.allProps.allProps.removeCommentLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.allProps.createCommentLike(like, this.props.allProps.allProps.match.params.id).then(() => {
                        }, () => {
                            this.setState({
                                errors: this.props.allProps.allProps.errors
                            })
                        }).then(() => {
                            this.props.allProps.allProps.fetchUser(this.props.allProps.allProps.currentUser).then(() => {
                                this.props.allProps.allProps.fetchVideo(this.props.allProps.allProps.match.params.id).then(() => {
                                    this.setState({
                                        dislike: this.props.reply.num_dislikes,
                                        disliked_already: false,
                                        [field]: this.props.reply.num_likes,
                                        liked_already: true
                                    })
                                })
                            })
                        })
                    })
                } else {
                    this.props.allProps.allProps.createCommentLike(like, this.props.allProps.allProps.match.params.id).then(() => {
                        // debugger
                    }, () => {
                        this.setState({
                            errors: this.props.allProps.allProps.errors
                        })
                    }).then(() => {
                        this.props.allProps.allProps.fetchUser(this.props.allProps.allProps.currentUser).then(() => {
                            this.props.allProps.allProps.fetchVideo(this.props.allProps.allProps.match.params.id).then(() => {
                                this.setState({
                                    [field]: this.props.reply.num_likes,
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
            if(this.props.allProps.allProps.currentUser) {
                // debugger
                let like = { "kind_of": `${ field }`, "likeable_id": `${ this.props.reply.id }`, "likeable_type": "Comment", "liker_id": `${ this.props.allProps.allProps.currentUser }` }
                if(this.state.disliked_already) {
                    // debugger
                    const real = this.props.allProps.allProps.like.entities.users.commentDislikes[this.props.reply.id] ? this.props.allProps.allProps.like.entities.users.commentDislikes[this.props.reply.id] : this.props.allProps.allProps.like.entities.users.commentDislikes;
                    this.props.allProps.allProps.removeCommentLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.allProps.fetchUser(this.props.allProps.allProps.currentUser).then(() => {
                            this.props.allProps.allProps.fetchVideo(this.props.allProps.allProps.match.params.id).then(() => {
                                this.setState({
                                    [field]: this.props.reply.num_dislikes,
                                    disliked_already: false
                                })
                            })
                        })
                    })
                } else if(this.state.liked_already) {
                    const real = this.props.allProps.allProps.like.entities.users.commentLikes[this.props.reply.id] ? this.props.allProps.allProps.like.entities.users.commentLikes[this.props.reply.id] : this.props.allProps.allProps.like.entities.users.commentLikes;
                    this.props.allProps.allProps.removeCommentLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.allProps.createCommentLike(like, this.props.allProps.allProps.match.params.id).then(() => {
                        }, () => {
                            this.setState({
                                errors: this.props.allProps.allProps.errors
                            })
                        }).then(() => {
                            this.props.allProps.allProps.fetchUser(this.props.allProps.allProps.currentUser).then(() => {
                                this.props.allProps.allProps.fetchVideo(this.props.allProps.allProps.match.params.id).then(() => {
                                    this.setState({
                                        like: this.props.reply.num_likes,
                                        liked_already: false,
                                        [field]: this.props.reply.num_dislikes,
                                        disliked_already: true
                                    })
                                })
                            })
                        })
                    })
                } else {
                    this.props.allProps.allProps.createCommentLike(like, this.props.allProps.allProps.match.params.id).then(() => {
                    }, () => {
                        this.setState({
                            errors: this.props.allProps.allProps.errors
                        })
                    }).then(() => {
                        this.props.allProps.allProps.fetchUser(this.props.allProps.allProps.currentUser).then(() => {
                            this.props.allProps.allProps.fetchVideo(this.props.allProps.allProps.match.params.id).then(() => {
                                this.setState({
                                    [field]: this.props.reply.num_dislikes,
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
            <section className="likes-container2">
                <div className="like2">
                    { like }
                    { this.state.like }
                </div>
                <div className="dislike2">
                    { dislike }
                    { this.state.dislike }
                </div>
            </section>
        )
    }

}

export default ReplyLikes;