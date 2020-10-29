import React from 'react';
import dateConverter from '../../../util/date_converter';
import ReplyLikes from '../likes/reply_likes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class Reply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            reply: false,
            options: false,
            comment: ""
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput() {
        return (e) => {
            this.setState({
                comment: e.currentTarget.value
            })
        }
    }

    handleSubmit() {
        let comment = { body: this.state.comment, commenter_id: this.props.allProps.currentUser, video_id: this.props.allProps.match.params.id, parent_comment_id: this.props.comment.id };
        // debugger
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

    render() {
        // debugger
        const options = <FontAwesomeIcon id="edit-comment" icon="ellipsis-v" onClick={ this.toggleEdit }/>;
        return (
            <>
                <section className="comment-box2">
                    { this.props.reply.avatarUrl ? 
                    <div id="user-pic6"><img src={ `${ this.props.reply.avatarUrl }` } onClick={ () => this.props.history.push(`/users/${ this.props.reply.commenter.id }`) } /></div> : 
                    <div className="commenter-avatar">A</div> }
                    <div className="actual-comment2">
                        <div className="commenter-date2">
                            <span className="commenter2">{ this.props.reply.commenter.username }</span>
                            <span className="commented2">{ dateConverter(this.props.reply.created_at) }</span>
                        </div>
                        <div className="the-comment2">
                            <span>{ this.props.reply.body }</span>
                        </div>
                        <div className="likes-reply2">
                            <ReplyLikes allProps={ this.props.allProps } reply={ this.props.reply }/>
                            <span onClick={ this.toggleReply }>REPLY</span>
                        </div>
                    </div>
                    { options }
                    <div className={ this.state.edit ? "update-comment2" : "hide" }>
                        <span className="edit-comment">EDIT</span>
                        <span className="delete-comment">DELETE</span>
                    </div>
                </section>
                <section className={ this.state.reply ? "create-comment3" : "hide" }>
                    <textarea id="comment-area2" rows="1" onChange={ this.handleInput() } placeholder="Add a public reply..."/>
                    <div className={ "cmt3" }>
                        <span onClick={ this.handleSubmit } className="make-comment3">REPLY</span>
                        <span onClick={ this.state.reply ? this.toggleReply : null }className="cancel-comment3">CANCEL</span>
                    </div>
                </section>
            </>
        )
    }
}

export default Reply;