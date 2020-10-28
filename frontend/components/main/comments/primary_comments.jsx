import React from 'react';
import dateConverter from '../../../util/date_converter';
import CommentLikes from '../likes/comment_likes';

class PrimaryComments extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.allProps.fetchCommentLikes(this.props.comment.id, this.props.allProps.video.id)
    }

    // componentDidUpdate() {
    //     if(prevProps.comment !== this.props.comment) {
    //         this.props.allProps.fetchCommentLikes(this.props.comment.id, this.props.allProps.video.id)
    //     }
    // }

    render() {
        return (
            <section className="comment-box">
                <div className="avatar">A</div>
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
            </section>
        )
    }
}

export default PrimaryComments;