import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import UploadForm from './upload_form';

class VideoModal2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploading: false
        }
        this.handleSelectFiles = this.handleSelectFiles.bind(this)
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
                    <div className="top-of-modal"><h1>Upload videos</h1></div>
                    <span className="close">&times;</span>
                    <div className="second-part">
                        <div className="middle-icon">
                            { uploadsign }
                            <h2>Drag and drop video  files to upload</h2>
                            <div className="submit-btn">
                                <button className="video-submit" onClick={ this.handleSelectFiles } type="submit">Select Files</button>
                            </div>
                        </div> 
                    </div>
                </div>
                <UploadForm history={ this.props.history } errors={ this.props.errors } processForm={ this.props.processForm } state={ this.state } />
            </section>
        )
    }
}

export default VideoModal2;