import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dateConverter from '../../util/date_converter';

export default (props) => {
    const edit = <FontAwesomeIcon id="std-edit-btn" onClick={ ()=> props.history.push(`/videos/${ props.vid.id }/edit`) } icon="edit" />;
    const remove = <FontAwesomeIcon id="std-del-btn" onClick={ ()=> props.history.push(`/videos/${ props.vid.id }/delete`) } icon="trash-alt" />;
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
            { edit }
            { remove }
        </section>
    )
}