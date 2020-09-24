import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class VideoUploadDropdown extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        const uploadicon = <FontAwesomeIcon id="video-up" icon="upload" />
        let choose = this.props.allProps.currentUser ? 
        <span id="modal-btn" className="up-video">Upload video</span> : <Link id="up-sign-in" to="/login">Sign in to upload</Link>
        return (
            <section className={ this.props.state.up ? "video-drop" : "hide"}>
                { uploadicon }
                { choose }
            </section>
        )
    }
}

export default VideoUploadDropdown;