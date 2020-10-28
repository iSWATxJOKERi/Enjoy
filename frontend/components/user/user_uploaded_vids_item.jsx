import React from 'react';
import dateConverter from '../../util/date_converter';

export default (props) => {
    return (
        <section className="uploaded-item">
            <img id="user-video-images" onClick={ () => props.history.push(`/videos/${ props.vid.id }`) } src={ `${ props.vid.photoUrl }` } />
            <h1>{ props.vid.title }</h1>
            <div className="uploaded-box-date">
                <span>6M views &#8226;</span>
                <span> { dateConverter(props.vid.created_at) }</span>
            </div>
        </section>
    )
}