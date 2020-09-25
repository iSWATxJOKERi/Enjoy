import React from 'react';

export default (props) => {
    return(
        <div className="video-clip">
            <img id={ props.video.id } src={ props.video.videoUrl } />
        </div>
    )
}