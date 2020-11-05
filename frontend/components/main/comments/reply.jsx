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
            comment: "",
            update: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.allProps.allProps.fetchCommentLikes(this.props.reply.id, this.props.allProps.allProps.video.id)
    }

    handleInput() {
        return (e) => {
            this.setState({
                comment: e.currentTarget.value
            })
        }
    }

    handleSubmit() {
        // debugger
        let comment = { body: this.state.comment, commenter_id: this.props.allProps.allProps.currentUser, video_id: this.props.allProps.allProps.match.params.id, parent_comment_id: this.props.reply.id, source: this.props.comment.id };
        // debugger
        this.props.allProps.allProps.createComment(comment).then(() => {
            // this.props.allProps.fetchUser(this.props.allProps.currentUser)
            this.setState({
                comment: "",
                edit: false,
                reply: false,
                update: false
            })
            document.getElementById(`comment-areas-${ this.props.reply.id }`).value = "";
        })
       
    }

    toggleEdit() {
        let ns = this.state.edit;
        this.setState({
            edit: !ns
        })
    }

    toggleReply() {
        let ns = this.state.reply;
        if(this.state.reply === true) {
            this.setState({
                comment: "",
                edit: false,
                reply: false,
                update: false
            })
            document.getElementById(`comment-areas-${ this.props.reply.id }`).value = "";
        }
        this.setState({
            reply: !ns
        })
    }

    handleEdit() {
        let ns = this.state.update;
        this.setState({
            update: !ns,
            edit: false
        })
    }

    handleUpdate() {
        let comment = { id: this.props.reply.id, body: this.state.comment, commenter_id: this.props.allProps.allProps.currentUser, video_id: this.props.allProps.allProps.match.params.id };
        // debugger
        this.props.allProps.allProps.updateComment(comment).then(() => {
            this.props.allProps.allProps.fetchComments(this.props.allProps.allProps.match.params.id).then(() => {
                document.getElementById(`update-comment-areas-${ this.props.reply.id }`).value = "";
                this.setState({
                    comment: "",
                    edit: false,
                    reply: false,
                    update: false
                })
            })
        })
    }

    handleDelete() {
        let comment = { id: this.props.reply.id, body: this.props.reply.body, commenter_id: this.props.allProps.allProps.currentUser, video_id: this.props.allProps.allProps.match.params.id };
        this.props.allProps.allProps.removeComment(comment).then(() => {
            this.props.allProps.allProps.fetchComments(this.props.allProps.allProps.match.params.id)
        })
    }

    render() {
        // debugger
        const options = <FontAwesomeIcon id="edit-comment" icon="ellipsis-v" onClick={ this.toggleEdit }/>;
        return (
            <>
                <section className="comment-box2">
                    { this.props.reply.avatarUrl ? 
                    <div id="user-pic6"><img src={ `${ this.props.reply.avatarUrl }` } onClick={ () => this.props.allProps.allProps.history.push(`/users/${ this.props.reply.commenter.id }`) } /></div> : 
                    <div className="commenter-avatar">A</div> }
                    <div className="actual-comment2">
                        { this.state.update ? 
                            <section className="update-comment-box">
                                <textarea id={ `update-areas-${ this.props.reply.id }`} rows="1" onChange={ this.handleInput() } defaultValue={ this.props.reply.body }/>
                                <div className="cmt2">
                                    <span onClick={ this.handleUpdate } className="make-comment2">SAVE</span>
                                    <span onClick={ this.state.update ? this.handleEdit : null }className="cancel-comment2">CANCEL</span>
                                </div>
                            </section> :
                            <>
                                <div className="commenter-date2">
                                    <span className="commenter2">{ this.props.reply.commenter.username }</span>
                                    <span className="commented2">{ dateConverter(this.props.reply.created_at) }</span>
                                </div>
                                <div className="the-comment2">
                                    { this.props.tagged ? 
                                    <div id="repliee-box">
                                        <span id="repliee">@{ this.props.reply.repliee }</span>
                                        <span id="repliee-body">{ this.props.reply.body }</span>
                                    </div> :
                                    <span>{ this.props.reply.body }</span> }
                                </div>
                                <div className="likes-reply2">
                                    <ReplyLikes psu={ this.props.psuedo[this.props.reply.id] } allProps={ this.props.allProps } reply={ this.props.reply }/>
                                    <span onClick={ this.toggleReply }>REPLY</span>
                                </div>
                                    </> }
                    </div>
                    { options }
                    <div className={ this.state.edit ? "update-comment2" : "hide" }>
                        <span onClick={ this.handleEdit } className="edit-comment">EDIT</span>
                        <span onClick={ this.handleDelete } className="delete-comment">DELETE</span>
                    </div>
                </section>
                <section className={ this.state.reply ? "create-comment3" : "hide" }>
                    <textarea id={ `update-comment-areas-${ this.props.reply.id }`} rows="1" onChange={ this.handleInput() } placeholder="Add a public reply..."/>
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