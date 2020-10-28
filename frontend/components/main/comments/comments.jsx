import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import PrimaryComments from './primary_comments';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: true,
            comments: Object.values(this.props.comments).length
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.comments !== prevProps.comments) {
            // debugger
            this.setState({
                comments: Object.values(this.props.comments).length
            })
        }
    }

    render() {
        let sort = <FontAwesomeIcon id="sort-btn" icon="sort-amount-up" />;
        let primary_comments = [];
        if(Object.values(this.props.comments).length > 0) {
            // debugger
            for(let i = 0; i < this.props.video.comments.length; i++) {
                // debugger
                if((this.props.comments && this.props.video.comments[i]) && this.props.comments[this.props.video.comments[i]]) {
                    debugger
                    if(!this.props.comments[this.props.video.comments[i]].parent_comment_id) {
                        debugger
                        primary_comments.push(<PrimaryComments allProps={ this.props } comment={ this.props.comments[this.props.video.comments[i]] } />)
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
                    <textarea rows="1" placeholder="Add a public comment..."/>
                    <div className="cmt">
                        <span className="make-comment">COMMENT</span>
                        <span className="cancel-comment">CANCEL</span>
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