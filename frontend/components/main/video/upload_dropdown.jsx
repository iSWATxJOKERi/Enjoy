import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class VideoUploadDropdown extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.allProps.currentUser ? this.modal() : null
    }

    modal() {
        const modal = document.getElementsByClassName("modal")[0];
        const button = document.getElementById("modal-btn");
        const x = document.getElementsByClassName("close")[0];

        button.onclick = function() {
            modal.style.display = "block";
        }

        x.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(e) {
            if(e.target == modal) {
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