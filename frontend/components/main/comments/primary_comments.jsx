import React from 'react';
import dateConverter from '../../../util/date_converter';

class PrimaryComments extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="comment-box">
                <div className="avatar"></div>
                <div className="actual-comment">
                    <div className="commenter-date">
                        <span>{ this.props.comment.commenter.username }</span>
                        <span>{ dateConverter(this.props.comment.created_at) }</span>
                    </div>
                    <div className="the-comment">
                        <span>{ this.props.comment.body }</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default PrimaryComments;