import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class VideoUpload extends React.Component {
    constructor(props) {
        super(props);
    }

 

    render() {
        const uploadsign = <FontAwesomeIcon id="center-modal" icon="upload" />
        return (
            <section className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <div className="middle-icon">
                        { uploadsign }
                        <h2>Drag and drop video  files to upload</h2>
                        <div className="submit-btn">
                            <button className="video-submit" type="submit">Select Files</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default VideoUpload;