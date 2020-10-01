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
            liked_already: this.props.allProps.user.liked_videos.includes(Number(this.props.allProps.match.params.id)),
            disliked_already: this.props.allProps.user.disliked_videos.includes(Number(this.props.allProps.match.params.id))
        }
        this.handleClickOnLike = this.handleClickOnLike.bind(this);
        this.handleClickOnDislike = this.handleClickOnDislike.bind(this);
    }

    componentDidMount() {
        // debugger
    }

    handleClickOnLike(field) {
        return (e) => {
            if(this.props.allProps.currentUser) {
                let like = {"kind_of": `${field}`, "likeable_id": `${ this.props.allProps.video.id }`, "likeable_type": "Video", "liker_id": `${ this.props.allProps.currentUser }` }
                if(this.state.liked_already) {
                    // debugger
                    this.props.allProps.removeLike(like).then(() => {
                        this.setState({
                            [field]: this.props.allProps.video.num_likes - 1
                        })
                    }, errors => {
                            this.setState({
                                errors: errors.responseJSON
                            })
                    })
                } else {
                    this.props.allProps.createLike(like).then(() => {
                        // debugger
                        this.setState({
                            [field]: this.props.allProps.video.num_likes + 1
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
            if(this.props.allProps.currentUser) {
                // debugger
                let like = {"kind_of": `${field}`, "likeable_id": `${ this.props.allProps.video.id }`, "likeable_type": "Video", "liker_id": `${ this.props.allProps.currentUser }` }
                if(this.state.disliked_already) {
                    // debugger
                    this.props.allProps.removeLike(like).then(() => {
                        this.setState({
                            [field]: this.props.allProps.video.num_dislikes - 1
                        })
                    }, errors => {
                            this.setState({
                                errors: errors.responseJSON
                            })
                    })
                } else {
                    this.props.allProps.createLike(like).then(() => {
                        // debugger
                        this.setState({
                            [field]: this.props.allProps.video.num_dislikes + 1
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