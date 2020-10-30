import React from 'react';
import dateConverter from '../../util/date_converter';

export default (props) => {
    return (
        <section className="studio-item">
            <img id="studio-vid-image" onClick={ () => props.history.push(`/videos/${ props.vid.id }`) } src={ `${ props.vid.photoUrl }` } />
            <div id="studio-words">
                <h1>{ props.vid.title }</h1>
                <div className="studio-date">
                    <span>6M views &#8226;</span>
                    <span> { dateConverter(props.vid.created_at) }</span>
                </div>
            </div>
        </section>
    )
}