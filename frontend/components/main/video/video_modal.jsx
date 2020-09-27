import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import UploadForm from './upload_form';

class VideoModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploading: false
        }
        this.handleSelectFiles = this.handleSelectFiles.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.currentUser ? this.modal() : null 
    }

    modal() {
        // debugger
        const modal = document.getElementsByClassName("modal")[0];
        const button = document.getElementById("modal-btn");
        const x = document.getElementsByClassName("close2")[0];

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

    handleSelectFiles() {
        const cs = this.state.uploading;
        this.setState({
            uploading: !cs
        })
    }

    render() {
        const uploadsign = <FontAwesomeIcon id="center-modal" icon="upload" />
        // debugger
        return (
            <section className="modal">
                <div className={ this.state.uploading ? "hide" : "modal-content" }>
                    <span className="close">&times;</span>
                    <div className="middle-icon">
                        { uploadsign }
                        <h2>Drag and drop video  files to upload</h2>
                        <div className="submit-btn">
                            <button className="video-submit" onClick={ this.handleSelectFiles } type="submit">Select Files</button>
                        </div>
                    </div> 
                </div>
                <UploadForm history={ this.props.history } processForm={ this.props.processForm } state={ this.state } />
            </section>
        )
    }
}

export default VideoModal;