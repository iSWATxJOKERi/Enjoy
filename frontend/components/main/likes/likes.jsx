import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        // debugger 
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
            if(this.props.allProps.user.liked_videos || this.props.allProps.disliked_videos) {
                this.setState({
                    liked_already: this.props.allProps.user.liked_videos.includes(Number(this.props.allProps.match.params.id)),
                    disliked_already: this.props.allProps.user.disliked_videos.includes(Number(this.props.allProps.match.params.id))
                })
            }
            this.props.allProps.fetchLike(this.props.allProps.match.params.id)
        }
    }

    handleClickOnLike(field) {
        return (e) => {
            if(this.props.allProps.currentUser) {
                let like = { "kind_of": `${ field }`, "likeable_id": `${ this.props.allProps.video.id }`, "likeable_type": "Video", "liker_id": `${ this.props.allProps.currentUser }` }
                if(this.state.liked_already) {
                    const real = this.props.allProps.like.entities.users.like[0] ? this.props.allProps.like.entities.users.like[0] : this.props.allProps.like.entities.users.like;
                    // debugger
                    this.props.allProps.removeLike(real).then(() => {
                        this.setState({
                            [field]: this.props.allProps.video.num_likes - 1,
                            liked_already: false
                        })
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser)
                    }).then(() => {
                        this.props.allProps.fetchVideo(this.props.allProps.match.params.id)
                    })
                } else if(this.state.disliked_already) {
                    const real = this.props.allProps.like.entities.users.like[0] ? this.props.allProps.like.entities.users.like[0] : this.props.allProps.like.entities.users.like;
                    this.props.allProps.removeLike(real).then(() => {
                        this.setState({
                            [field]: this.props.allProps.video.num_dislikes - 1,
                            disliked_already: false
                        })
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.createLike(like).then(() => {
                            // debugger
                            this.setState({
                                [field]: this.props.allProps.video.num_likes + 1,
                                liked_already: true
                            })
                        }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                        })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser)
                    }).then(() => {
                        this.props.allProps.fetchVideo(this.props.allProps.match.params.id)
                    })
                } else {
                    this.props.allProps.createLike(like).then(() => {
                        // debugger
                        this.setState({
                            [field]: this.props.allProps.video.num_likes + 1,
                            liked_already: true
                        })
                    }, () => {
                        this.setState({
                            errors: this.props.allProps.errors
                        })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser)
                    }).then(() => {
                        this.props.allProps.fetchVideo(this.props.allProps.match.params.id)
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
                    const real = this.props.allProps.like.entities.users.like[0] ? this.props.allProps.like.entities.users.like[0] : this.props.allProps.like.entities.users.like;
                    this.props.allProps.removeLike(real).then(() => {
                        this.setState({
                            [field]: this.props.allProps.video.num_dislikes - 1,
                            disliked_already: false
                        })
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser)
                    }).then(() => {
                        this.props.allProps.fetchVideo(this.props.allProps.match.params.id)
                    })
                } else if(this.state.liked_already) {
                    const real = this.props.allProps.like.entities.users.like[0] ? this.props.allProps.like.entities.users.like[0] : this.props.allProps.like.entities.users.like;
                    this.props.allProps.removeLike(real).then(() => {
                        this.setState({
                            [field]: this.props.allProps.video.num_likes - 1,
                            liked_already: false
                        })
                    }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                    }).then(() => {
                        this.props.allProps.createLike(like).then(() => {
                            // debugger
                            this.setState({
                                [field]: this.props.allProps.video.num_dislikes + 1,
                                disliked_already: true
                            })
                        }, () => {
                            this.setState({
                                errors: this.props.allProps.errors
                            })
                        }).then(() => {
                            this.props.allProps.fetchUser(this.props.allProps.currentUser)
                        }).then(() => {
                            this.props.allProps.fetchVideo(this.props.allProps.match.params.id)
                        })
                    })
                } else {
                    this.props.allProps.createLike(like).then(() => {
                        // debugger
                        this.setState({
                            [field]: this.props.allProps.video.num_dislikes + 1,
                            disliked_already: true
                        })
                    }, () => {
                        this.setState({
                            errors: this.props.allProps.errors
                        })
                    }).then(() => {
                        this.props.allProps.fetchUser(this.props.allProps.currentUser)
                    }).then(() => {
                        this.props.allProps.fetchVideo(this.props.allProps.match.params.id)
                    })
                }
            } else {
                alert("Please sign-in");
            }
        }
    }

    render() {
        const like = <FontAwesomeIcon onClick={ this.handleClickOnLike('like') } id="like-button" className={ this.state.liked_already ? "blue" : "black" } icon="thumbs-up" />
        const dislike = <FontAwesomeIcon onClick={ this.handleClickOnDislike('dislike') } id="dislike-button" className={ this.state.liked_already ? "blue" : "black" } icon="thumbs-down" />
 
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