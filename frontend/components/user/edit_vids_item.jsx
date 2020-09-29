import React from 'react';
import dateConverter from '../../util/date_converter';
import VideoUpdateForm from './video_update_form';

export default (props) => {
    return (
        <section className="edit-item">
            <img id="user-video-images" onClick={ () => props.allProps.history.push(`/videos/${ props.vid.id }`) } src={ props.vid.photoUrl } />
            <h1>{ props.vid.title }</h1>
            <div className="-uploaded-box-date">
                <span>6M views &#8226;</span>
                <span> { dateConverter(props.vid.created_at) }</span>
            </div>
            {/* { props.allProps.currentUser ?  */}
            <div className="edit-delete-hover">
                <button className="edit-video">EDIT</button>
                <button className="delete-video">DELETE</button>
                <VideoUpdateForm allProps={ props.allProps } video={ props.vid }/>
            </div> 
            {/* : null } */}
        </section>
    )
}