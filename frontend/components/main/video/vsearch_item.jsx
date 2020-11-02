import React from 'react';
import dateConverter from '../../../util/date_converter';

class SearchItem extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <section className="search-item">
                <img id="search-vid-image" onClick={ () => this.props.history.push(`/videos/${ this.props.vid.id }`) } src={ `${ this.props.vid.photoUrl }` } />
                <div id="search-words">
                    <h1>{ this.props.vid.title }</h1>
                    <span onClick={ () => this.props.history.push(`/users/${ this.props.vid.uploader.id }`) }>{ this.props.vid.uploader.username }</span>
                    <div className="search-date">
                        <span>6M views &#8226;</span>
                        <span>{ dateConverter (this.props.vid.created_at) }</span>
                    </div>
                </div>
            </section> 
        )
    }
}

export default SearchItem;