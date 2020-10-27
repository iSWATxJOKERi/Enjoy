import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: true
        }
    }

    render() {
        let sort = <FontAwesomeIcon id="sort-btn" icon="sort-amount-up" />;
        let primary_comments = [];
        for(let i = 0; i < this.props.video.comments.length; i++) {
            if(!this.props.comments[this.props.video.comments[i]].parent_comment_id) {
                primary_comments.push(<PrimaryComment allProps={ this.props } comment={ this.props.comments[this.props.video.comments[i]] } />)
            }
        }
        return (
            <section className="right-content">
                <section className="comments-section">
                    <span className="comments-size">{ this.props.comments.length } Comments</span>
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
            </section>
        )
    }
}

export default Comments;