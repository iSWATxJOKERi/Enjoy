import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class CommentLikes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.props.allProps.comment.num_likes,
            dislike: this.props.allProps.comment.num_dislikes,
            errors: this.props.allProps.errors,
            liked_already: null,
            disliked_already: null,
        }
        this.handleClickOnLike = this.handleClickOnLike.bind(this);
        this.handleClickOnDislike = this.handleClickOnDislike.bind(this);
    }

    componentDidMount() {
        if(this.props.allProps.user) {
            if(this.props.allProps.user.liked_comments || this.props.allProps.disliked_comments) {
                this.setState({
                    liked_already: this.props.allProps.user.liked_comments.includes(this.props.comment.id),
                    disliked_already: this.props.allProps.user.disliked_comments.includes(this.props.comment.id)
                })
            }
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.comment !== prevProps.comment) {
            this.setState({
                like: this.props.allProps.comment.num_likes,
            dislike: this.props.allProps.comment.num_dislikes
            })
            if(this.props.allProps.user) {
                if(this.props.allProps.user.liked_comments || this.props.allProps.disliked_comments) {
                    this.setState({
                        liked_already: this.props.allProps.user.liked_comments.includes(this.props.comment.id),
                        disliked_already: this.props.allProps.user.disliked_comments.includes(this.props.comment.id)
                    })
                }
            }
        }
    }

    handleClickOnLike(field) {
        return (e) => {
            if(this.props.allProps.currentUser) {
                let like = { "kind_of": `${ field }`, "likeable_id": `${ this.props.comment.id }`, "likeable_type": "Comment", "liker_id": `${ this.props.allProps.currentUser }` }
                if(this.state.liked_already) {
                    const real = this.props.allProps.like.entities.users.commentLikes[this.props.comment.id] ? this.props.allProps.like.entities.users.commentLikes[this.props.comment.id] : this.props.allProps.like.entities.users.commentLikes;
                    // debugger
                    this.props.allProps.removeCommentLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser)
                    }).then(() => {
                        this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                            this.setState({
                                [field]: this.props.allProps.comment.num_likes,
                                liked_already: false
                            })
                        })
                    })
                } else if(this.state.disliked_already) {
                    const real = this.props.allProps.like.entities.users.commentLikes[this.props.comment.id] ? this.props.allProps.like.entities.users.commentLikes[this.props.comment.id] : this.props.allProps.like.entities.users.commentLikes;
                    this.props.allProps.removeCommentLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.createCommentLike(like).then(() => {
                        }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                        }).then(() => {
                            this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                                this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                                    this.setState({
                                        dislike: this.props.allProps.comment.num_dislikes,
                                        disliked_already: false,
                                        [field]: this.props.allProps.comment.num_likes,
                                        liked_already: true
                                    })
                                })
                            })
                        })
                    })
                } else {
                    this.props.allProps.createCommentLike(like).then(() => {
                        // debugger
                    }, () => {
                        this.setState({
                            errors: this.props.allProps.errors
                        })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                            this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                                this.setState({
                                    [field]: this.props.allProps.comment.num_likes,
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
                let like = { "kind_of": `${ field }`, "likeable_id": `${ this.props.comment.id }`, "likeable_type": "Comment", "liker_id": `${ this.props.allProps.currentUser }` }
                if(this.state.disliked_already) {
                    // debugger
                    const real = this.props.allProps.like.entities.users.commentLikes[this.props.comment.id] ? this.props.allProps.like.entities.users.commentLikes[this.props.comment.id] : this.props.allProps.like.entities.users.commentLikes;
                    this.props.allProps.removeCommentLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                            this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                                this.setState({
                                    [field]: this.props.allProps.comment.num_dislikes,
                                    disliked_already: false
                                })
                            })
                        })
                    })
                } else if(this.state.liked_already) {
                    const real = this.props.allProps.like.entities.users.commentLikes[this.props.comment.id] ? this.props.allProps.like.entities.users.commentLikes[this.props.comment.id] : this.props.allProps.like.entities.users.commentLikes;
                    this.props.allProps.removeCommentLike(real).then(() => {
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.createCommentLike(like).then(() => {
                        }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                        }).then(() => {
                            this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                                this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                                    this.setState({
                                        like: this.props.allProps.comment.num_likes,
                                        liked_already: false,
                                        [field]: this.props.allProps.comment.num_dislikes,
                                        disliked_already: true
                                    })
                                })
                            })
                        })
                    })
                } else {
                    this.props.allProps.createCommentLike(like).then(() => {
                    }, () => {
                        this.setState({
                            errors: this.props.allProps.errors
                        })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                            this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                                this.setState({
                                    [field]: this.props.allProps.comment.num_dislikes,
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

export default CommentLikes;