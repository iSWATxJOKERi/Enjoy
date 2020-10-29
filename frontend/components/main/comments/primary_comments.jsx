import React from 'react';
import dateConverter from '../../../util/date_converter';
import CommentLikes from '../likes/comment_likes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class PrimaryComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    // componentDidMount() {
    //     this.props.allProps.fetchCommentLikes(this.props.comment.id, this.props.allProps.video.id)
    // }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.comment !== this.props.comment) {
    //         this.props.allProps.fetchCommentLikes(this.props.comment.id, this.props.allProps.video.id)
    //     }
    // }

    toggleEdit() {
        let ns = this.state.edit;
        this.setState({
            edit: !ns
        })
    }

    render() {
        const options = <FontAwesomeIcon id="edit-comment" icon="ellipsis-v" onClick={ this.toggleEdit }/>;
        return (
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
                    </div>
                </div>
                { options }
                <div className={ this.state.edit ? "update-comment" : "hide" }>
                    <span className="edit-comment">EDIT</span>
                    <span className="delete-comment">DELETE</span>
                </div>
            </section>
        )
    }
}

export default PrimaryComments;