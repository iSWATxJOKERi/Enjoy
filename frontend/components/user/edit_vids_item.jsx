import React from 'react';
import dateConverter from '../../util/date_converter';

export default class EditVids extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="edit-item">
                <img id="user-video-images" onClick={ () => this.props.allProps.history.push(`/videos/${ this.props.vid.id }`) } src={ this.props.vid.photoUrl } />
                <h1>{ this.props.vid.title }</h1>
                <div className="uploaded-box-date">
                    <span id="deets">6M views &#8226;</span>
                    <span id="deets"> { dateConverter(this.props.vid.created_at) }</span>
                </div>
                {/* { (this.props.allProps.currentUser && (this.props.vid.uploader.id === this.props.allProps.currentUser)) ?
                <div className="edit-delete-hover">
                    <button onClick={ ()=> this.props.allProps.history.push(`/videos/${ this.props.vid.id }/edit`) } className="edit-video">EDIT</button>
                    <button onClick={ ()=> this.props.allProps.history.push(`/videos/${ this.props.vid.id }/delete`) } className="delete-video">DELETE</button>
                </div> : null } */}
            </section>
        )
    }
}