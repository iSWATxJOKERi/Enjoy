import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class VideoUploadDropdown extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.modal = this.modal.bind(this);
    }
    
    componentDidMount() {
        // debugger
        this._isMounted = true;
        this.props.allProps.currentUser && this._isMounted ? this.modal() : null
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    modal() {
        const modal = document.getElementsByClassName("modal")[0];
        const x = document.getElementsByClassName("close")[0];

        if(x) {
            x.onclick = function() {
                modal.style.display = "none";
            }
        }
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