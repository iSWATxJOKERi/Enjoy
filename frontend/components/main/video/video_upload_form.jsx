import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class VideoUpload extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
        const uploadsign = <FontAwesomeIcon id="center-modal" icon="upload" />
        return (
            <section className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    { uploadsign }
                    <h2>Drag and drop video  files to upload</h2>
                    <div className="submit-btn">
                        <button className="video-submit" type="submit">Select Files</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default VideoUpload;