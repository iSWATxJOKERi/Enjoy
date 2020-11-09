import React from 'react';
import dateConverter from '../../../util/date_converter';
import CommentLikes from '../likes/comment_likes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import Reply from './reply';
import { myFlatten } from '../../../util/utils';

class PrimaryComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            reply: false,
            comment: "",
            showreplies: false,
            replies: this.props.comment.replies,
            len: this.props.comment.lengthofreplies,
            update: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.toggleReplies = this.toggleReplies.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.getAllReplies = this.getAllReplies.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.allProps.fetchCommentLikes(this.props.comment.id, this.props.allProps.video.id)
    }

    componentDidUpdate(prevProps) {
        // debugger
        if(Object.values(this.props.comments).length !== Object.values(prevProps.comments).length) {
            // debugger
            this.setState({
                replies: this.props.comment.replies,
                len: this.props.comment.lengthofreplies
            })
        }
    }

    handleInput() {
        return (e) => {
            this.setState({
                comment: e.currentTarget.value
            })
        }
    }

    handleSubmit() {
        let comment = { body: this.state.comment, commenter_id: this.props.allProps.currentUser, video_id: this.props.allProps.match.params.id, parent_comment_id: this.props.comment.id, source: this.props.comment.id };
        // debugger
        this.props.allProps.createComment(comment).then(() => {
            this.props.allProps.fetchComments(this.props.allProps.match.params.id).then(() => {
                this.setState({
                    comment: "",
                    edit: false,
                    reply: false,
                    showreplies: true,
                    update: false
                })
                document.getElementById(`comment-areas-${ this.props.comment.id }`).value = "";
            })
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
                showreplies: true,
                update: false
            })
            document.getElementById(`comment-areas-${ this.props.comment.id }`).value = "";
        }
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

    getAllReplies(replies) {
        let arr = [];
        // debugger
        // console.log(replies)
        for(let i = 0; i < replies.length; i++) {
            // debugger
            if(this.props.psuedo[replies[i]]) {
                // debugger
                if(this.props.psuedo[replies[i]].replies.length > 0) {
                    // debugger
                    // console.log(arr)
                    arr.push(this.props.psuedo[replies[i]])
                    arr.push(this.getAllReplies(this.props.psuedo[replies[i]].replies))
                    // console.log(arr)
                } else {
                    // debugger
                    arr.push(this.props.psuedo[replies[i]])
                    // console.log("pushed")
                }
            }
        }
        // console.log(arr)
        return arr;
    }

    handleEdit() {
        let ns = this.state.update;
        this.setState({
            update: !ns,
            edit: false
        })
    }

    handleUpdate() {
        let comment = { id: this.props.comment.id, body: this.state.comment, commenter_id: this.props.allProps.currentUser, video_id: this.props.allProps.match.params.id };
        // debugger
        this.props.allProps.updateComment(comment).then(() => {
            this.props.allProps.fetchComments(this.props.allProps.match.params.id).then(() => {
                document.getElementById(`update-areas-${ this.props.comment.id }`).value = "";
                this.setState({
                    comment: "",
                    edit: false,
                    reply: false,
                    update: false,
                    showreplies: true,
                })
            })
        })
    }

    handleDelete() {
        let comment = { id: this.props.comment.id, body: this.props.comment.body, commenter_id: this.props.allProps.currentUser, video_id: this.props.allProps.match.params.id };

        this.props.allProps.removeComment(comment).then(() => {
            this.props.allProps.fetchComments(this.props.allProps.match.params.id)
        })
    }

    render() {
        // debugger
        let replies;
        let final;
        replies = this.getAllReplies(this.state.replies);
        // debugger
        // console.log(replies)
        let flattened = myFlatten(replies);
        // console.log(flattened)
        final = flattened.map(replyy => {
            // debugger
            if(replyy.parent_comment_id !== this.props.comment.id) {
                return <Reply psuedo={ this.props.psuedo } key={ replyy.id } tagged={ true } reply={ replyy } allProps={ this.props } comment={ this.props.comment }/>
            } else {
                return <Reply psuedo={ this.props.psuedo } key={ replyy.id } tagged={ false } reply={ replyy } allProps={ this.props } comment={ this.props.comment }/>
            }
        })
        // console.log(final)
        const options = <FontAwesomeIcon id="edit-comment" icon="ellipsis-v" onClick={ this.toggleEdit }/>;
        let repl = this.state.showreplies ? 
            <span className="replies-btn" onClick={ this.toggleReplies }>&#9650;{ ` Hide ${ this.state.len } replies` }</span> : 
            <span className="replies-btn" onClick={ this.toggleReplies }>&#9660;{ ` View ${ this.state.len } replies` }</span>
        // debugger
        return (
            <section>
                <section className="comment-box">
                    { this.props.comment.avatarUrl ? 
                    <img id="user-pic5" src={ `${ this.props.comment.avatarUrl }` } onClick={ () => this.props.history.push(`/users/${ this.props.comment.commenter.id }`) } /> : 
                    <div className="commenter-avatar">{ this.props.comment.commenter.username[0] }</div> }
                    <div className="actual-comment">
                        { this.state.update ? 
                            <section className="update-comment-box">
                                <textarea id={ `update-areas-${ this.props.comment.id }`} rows="1" onChange={ this.handleInput() } defaultValue={ this.props.comment.body }/>
                                <div className="cmt2">
                                    <span onClick={ this.handleUpdate } className="make-comment2">SAVE</span>
                                    <span onClick={ this.state.update ? this.handleEdit : null }className="cancel-comment2">CANCEL</span>
                                </div>
                            </section> :
                        <>
                            <div className="commenter-date">
                                <span className="commenter">{ this.props.comment.commenter.username }</span>
                                <span className="commented">{ dateConverter(this.props.comment.created_at) }</span>
                            </div>
                            <div className="the-comment">
                                <span>{ this.props.comment.body }</span>
                            </div>
                            <div className="likes-reply">
                                <CommentLikes psu={ this.props.psuedo[this.props.comment.id] } allProps={ this.props } comment={ this.props.comment }/>
                                <span onClick={ this.toggleReply }>REPLY</span>
                            </div> 
                        </>}
                    </div>
                    { options }
                    <div className={ this.state.edit ? "update-comment" : "hide" }>
                        <span onClick={ this.handleEdit } className="edit-comment">EDIT</span>
                        <span onClick={ this.handleDelete } className="delete-comment">DELETE</span>
                    </div>
                </section>
                <section className={ this.state.reply ? "create-comment2" : "hide" }>
                    <textarea id={ `comment-areas-${ this.props.comment.id }`} rows="1" onChange={ this.handleInput() } placeholder="Add a public reply..."/>
                    <div className={ "cmt2" }>
                        <span onClick={ this.handleSubmit } className="make-comment2">REPLY</span>
                        <span onClick={ this.state.reply ? this.toggleReply : null }className="cancel-comment2">CANCEL</span>
                    </div>
                </section>
                { repl }
                <div className={ this.state.showreplies ? "showingreplies" : "hide"}>
                    { final }
                </div>
            </section>
        )
    }
}

export default PrimaryComments;