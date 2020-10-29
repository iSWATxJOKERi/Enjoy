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
            primary_comments: []
        }
        this.toggleOptions = this.toggleOptions.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    // componentDidMount() {
    //     this.props.allProps.fetchComments(this.props.allProps.match.params.id);
    // }

    componentDidUpdate(prevProps) {
        if(this.props.comments !== prevProps.comments) {
            // debugger
            this.props.allProps.fetchCommentLikes(this.props.allProps.currentUser, this.props.allProps.match.params.id).then(() => {
                this.setState({
                    comments: Object.values(this.props.comments).length

                })
            })
        }
    }

    toggleOptions() {
        // debugger
        let ns = this.state.options;
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
        this.props.allProps.createComment(comment)
    }

    render() {
        let sort = <FontAwesomeIcon id="sort-btn" icon="sort-amount-up" />;
        let primary_comments = [];
        if(Object.values(this.props.comments).length > 0) {
            // debugger
            for(let i = 0; i < this.props.video.comments.length; i++) {
                // debugger
                if((this.props.comments && this.props.video.comments[i]) && this.props.comments[this.props.video.comments[i]]) {
                    // debugger
                    if(!this.props.comments[this.props.video.comments[i]].parent_comment_id) {
                        // debugger
                        primary_comments.push(<PrimaryComments key={ i } comments={ this.props.comments } allProps={ this.props.allProps } comment={ this.props.comments[this.props.video.comments[i]] } />)
                    }
                }
            }
        }
        return (
            <section className="right-content">
                <section className="comments-section">
                    <span className="comments-size">{ this.state.comments } Comments</span>
                    { sort }
                    <span className="sort">{ this.state.sort ? "Newest First" : "Oldest First" }</span>
                </section>
                <section className="create-comment">
                    <textarea id="comment-area" onClick={ this.state.options ? null : this.toggleOptions } rows="1" onChange={ this.handleInput() } placeholder="Add a public comment..."/>
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