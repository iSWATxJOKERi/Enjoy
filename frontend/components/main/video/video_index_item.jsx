import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import dateConverter from '../../../util/date_converter';

export default (props) => {
    const user = <span id="user3">{ props.video.uploader.username[0] }</span>
    return(
        <div className="video-clip">
            <img id={ props.video.id } src={ props.video.photoUrl } onClick={ () => props.allProps.history.push(`/videos/${ props.video.id }`) } />
            <div className="title-desc">
                <div onClick={ () => props.allProps.history.push(`/users/${ props.video.uploader.id }`) } className="left-part-of-clip-box">{ user }</div>
                <div className="right-part-of-clip-box">
                    <h1 onClick={ () => props.allProps.history.push(`/videos/${ props.video.id }`) }>{ props.video.title }</h1>
                    <span onClick={ () => props.allProps.history.push(`/users/${ props.video.uploader.id }`) }>{ props.video.uploader.username }</span>
                    <div className="details">
                        <span>400 views</span>
                        <span id="date">{ dateConverter(props.video.created_at) }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}