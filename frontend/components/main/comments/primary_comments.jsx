import React from 'react';
import dateConverter from '../../../util/date_converter';
import CommentLikes from '../likes/comment_likes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class PrimaryComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            reply: false,
            options: false,
            comment: "",
            showreplies: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.toggleReplies = this.toggleReplies.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    // componentDidMount() {
    //     this.props.allProps.fetchCommentLikes(this.props.comment.id, this.props.allProps.video.id)
    // }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.comment !== this.props.comment) {
    //         this.props.allProps.fetchCommentLikes(this.props.comment.id, this.props.allProps.video.id)
    //     }
    // }
    handleInput() {
        return (e) => {
            this.setState({
                comment: e.currentTarget.value
            })
        }
    }

    handleSubmit() {
        let comment = { body: this.state.comment, commenter_id: this.props.allProps.currentUser, video_id: this.props.allProps.match.params.id, parent_comment_id: this.props.comment.id };
        this.props.allProps.createComment(comment)
    }

    toggleEdit() {
        let ns = this.state.edit;
        this.setState({
            edit: !ns
        })
    }

    toggleReply() {
        let ns = this.state.reply;
        this.setState({
            reply: !ns
        })
    }

    toggleReplies() {
        let ns = this.state.showreplies;
        this.setState({
            showreplies: !ns
        })
    }

    render() {
        // debugger
        const options = <FontAwesomeIcon id="edit-comment" icon="ellipsis-v" onClick={ this.toggleEdit }/>;
        let repl = this.state.showreplies ? 
            <span className="replies-btn" onClick={ this.toggleReplies }>&#9650;{ ` Hide ${ this.props.comment.replies.length } replies` }</span> : 
            <span className="replies-btn" onClick={ this.toggleReplies }>&#9660;{ ` View ${ this.props.comment.replies.length } replies` }</span>
        return (
            <section>
                <section className="comment-box">
                    { this.props.comment.avatarUrl ? 
                    <img id="user-pic5" src={ `${ this.props.comment.avatarUrl }` } onClick={ () => this.props.history.push(`/users/${ this.props.comment.commenter.id }`) } /> : 
                    <div className="commenter-avatar">A</div> }
                    <div className="actual-comment">
                        <div className="commenter-date">
                            <span className="commenter">{ this.props.comment.commenter.username }</span>
                            <span className="commented">{ dateConverter(this.props.comment.created_at) }</span>
                        </div>
                        <div className="the-comment">
                            <span>{ this.props.comment.body }</span>
                        </div>
                        <div className="likes-reply">
                            <CommentLikes allProps={ this.props } comment={ this.props.comment }/>
                            <span onClick={ this.toggleReply }>REPLY</span>
                        </div>
                    </div>
                    { options }
                    <div className={ this.state.edit ? "update-comment" : "hide" }>
                        <span className="edit-comment">EDIT</span>
                        <span className="delete-comment">DELETE</span>
                    </div>
                </section>
                <section className={ this.state.reply ? "create-comment2" : "hide" }>
                    <textarea id="comment-area2" rows="1" onChange={ this.handleInput() } placeholder="Add a public reply..."/>
                    <div className={ "cmt2" }>
                        <span onClick={ this.handleSubmit } className="make-comment2">REPLY</span>
                        <span onClick={ this.state.reply ? this.toggleReply : null }className="cancel-comment2">CANCEL</span>
                    </div>
                </section>
                { repl }
            </section>
        )
    }
}

export default PrimaryComments;