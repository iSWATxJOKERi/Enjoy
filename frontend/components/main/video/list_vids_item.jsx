import React from 'react';
import dateConverter from '../../../util/date_converter';

export default (props) => {
    return (
        <div className="listed-vid" onClick={ () => props.history.push(`/videos/${ props.video.id }`) }>
            <img className="up-next-image" src={ props.video.photoUrl } />
            <div className="video-box-details">
                <h2 className="video-box-title">{ props.video.title }</h2>
                <span>{ props.video.uploader.username }</span>
                <div className="video-box-date">
                    <span>6M views &#8226;</span>
                    <span> { dateConverter(props.video.created_at) }</span>
                </div>
            </div>
        </div>
    )
}