import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const like = <FontAwesomeIcon id="like-button" icon="thumbs-up" />
        const dislike = <FontAwesomeIcon id="dislike-button" icon="thumbs-down" />
        return (
            <section className="likes-container">
                <div className="like">
                    { like }
                </div>
                <div className="dislike">
                    { dislike }
                </div>
            </section>
        )
    }

}

export default Likes;