import React from 'react';
import dateConverter from '../../../util/date_converter';
import CommentLikes from '../likes/comment_likes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import Reply from './reply';

class PrimaryComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            reply: false,
            comment: "",
            showreplies: false,
            replies: this.props.comment.replies,
            len: this.props.comment.lengthofreplies
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.toggleReplies = this.toggleReplies.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.getAllReplies = this.getAllReplies.bind(this);
    }

    // componentDidMount() {
    //     this.props.allProps.fetchCommentLikes(this.props.comment.id, this.props.allProps.video.id)
    // }

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
            // this.props.allProps.fetchUser(this.props.allProps.currentUser)
            this.setState({
                comment: "",
                edit: false,
                reply: false,
                showreplies: true,
            })
            document.getElementById(`comment-areas-${ this.props.comment.id }`).value = "";
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
            if(this.props.comments[replies[i]]) {
                // debugger
                if(this.props.comments[replies[i]].replies.length > 0) {
                    // debugger
                    // console.log(arr)
                    arr.push(this.props.comments[replies[i]])
                    arr.push(this.getAllReplies(this.props.comments[replies[i]].replies))
                    // console.log(arr)
                } else {
                    // debugger
                    arr.push(this.props.comments[replies[i]])
                    // console.log("pushed")
                }
            }
        }
        // console.log(arr)
        return arr;
    }

    render() {
        // debugger
        let replies;
        let final;
        replies = this.getAllReplies(this.state.replies);
        // debugger
        // console.log(replies)
        let flattened = [].concat.apply([], replies);
        // console.log(flattened)
        final = flattened.map(replyy => {
            // debugger
            if(replyy.parent_comment_id !== this.props.comment.id) {
                return <Reply key={ replyy.id } tagged={ true } reply={ replyy } allProps={ this.props } comment={ this.props.comment }/>
            } else {
                return <Reply key={ replyy.id } tagged={ false } reply={ replyy } allProps={ this.props } comment={ this.props.comment }/>
            }
        })
        // console.log(final)
        const options = <FontAwesomeIcon id="edit-comment" icon="ellipsis-v" onClick={ this.toggleEdit }/>;
        let repl = this.state.showreplies ? 
            <span className="replies-btn" onClick={ this.toggleReplies }>&#9650;{ ` Hide ${ this.state.len } replies` }</span> : 
            <span className="replies-btn" onClick={ this.toggleReplies }>&#9660;{ ` View ${ this.state.len } replies` }</span>
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