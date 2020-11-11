import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import PrimaryComments from './primary_comments';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: true,
            comments: Object.values(this.props.comments).length,
            options: false,
            comment: "",
            primary_comments: this.props.comments
        }
        this.toggleOptions = this.toggleOptions.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    // componentDidMount() {
    //     this.setState({
    //         comments: Object.values(this.props.comments).length,
    //         primary_comments: this.props.comments
    //     })
    // }

    componentDidUpdate(prevProps) {
        // debugger
        if(Object.values(this.props.comments).length !== Object.values(prevProps.comments).length) {
            // debugger
            this.props.allProps.fetchComments(this.props.allProps.match.params.id).then(() => {
                this.setState({
                    comments: Object.values(this.props.comments).length,
                    primary_comments: this.props.comments
                })
            })
        }
    }

    toggleOptions() {
        // debugger
        let ns = this.state.options;
        if(this.state.options === true) {
            this.setState({
                comment: "",
            })
            document.getElementById("comment-area").value = "";
        }
        this.setState({
            options: !ns
        })
    }

    handleInput() {
        return (e) => {
            this.setState({
                comment: e.currentTarget.value
            })
        }
    }

    handleSubmit() {
        let comment = { body: this.state.comment, commenter_id: this.props.allProps.currentUser, video_id: this.props.allProps.match.params.id };
        this.props.allProps.createComment(comment).then(() => {
            this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                this.props.allProps.fetchVideo(this.props.allProps.match.params.id).then(() => {
                    this.setState({
                        comment: "",
                        options: false
                    })
                    document.getElementById("comment-area").value = "";
                })
            })
        })
    }

    render() {
        let sort = <FontAwesomeIcon id="sort-btn" icon="sort-amount-up" />;
        let primary_comments = [];
        // debugger
        if(Object.values(this.state.primary_comments).length > 0) {
            // debugger
            for(let i = 0; i < Object.values(this.props.comments).length; i++) {
                // debugger
                if((this.state.primary_comments && this.props.video.comments[i]) && this.state.primary_comments[this.props.video.comments[i]]) {
                    // debugger
                    if(!this.state.primary_comments[this.props.video.comments[i]].parent_comment_id) {
                        // debugger
                        primary_comments.push(<PrimaryComments key={ i } psuedo={ this.props.comments } comments={ this.state.primary_comments } allProps={ this.props.allProps } comment={ this.props.comments[this.props.video.comments[i]] } />)
                        // console.log(this.props.comments)
                    }
                }
            }
            // console.log(Object.values(this.props.comments).length)
        }
        return (
            <section className="right-content">
                <section className="comments-section">
                    <span className="comments-size">{ this.state.comments } Comments</span>
                    { sort }
                    <span className="sort">{ this.state.sort ? "Newest First" : "Oldest First" }</span>
                </section>
                <section className="create-comment">
                    { this.props.allProps.user.avatar ? 
                        <img id="user-pic5" src={ `${ this.props.allProps.user.avatar }` } onClick={ () => this.props.allProps.history.push(`/users/${ this.props.allProps.user.id }`) } /> : 
                        <span id="user5">{ this.props.allProps.user.username[0] }</span> }
                    <textarea id="comment-area" onClick={ () => this.props.allProps.currentUser ? (this.state.options ? null : this.toggleOptions()) : window.location.href = "#/login" } rows="1" onChange={ this.handleInput() } placeholder="Add a public comment..."/>
                    <div className={ this.state.options ? "cmt" : "hide" }>
                        <span onClick={ this.handleSubmit } className="make-comment">COMMENT</span>
                        <span onClick={ this.state.options ? this.toggleOptions : null }className="cancel-comment">CANCEL</span>
                    </div>
                </section>
                <section className="comments-list">
                    { primary_comments }
                </section>
            </section>
        )
    }
}

export default Comments;