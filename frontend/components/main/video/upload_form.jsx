import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';
import React from 'react';

export default class UploadForm extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            photoFile: null,
            videoFile: null,
            photoUrl: null,
            videoUrl: null,
            errors: this.props.errors
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        if(this._isMounted) {
            this.handleClear();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleClear() {
        const modal = document.getElementsByClassName("modal")[0];
        const button = document.getElementById("modal-btn");
        const x = document.getElementsByClassName("close2")[0];

        // debugger
        if(button) {
            button.onclick = function() {
                modal.style.display = "block";
            }
        }

        let that = this;
        x.addEventListener('click', function() {
            // debugger
            modal.style.display = "none";
            if(modal.style.display == "" || modal.style.display == "none") {
                // debugger
                if(this._isMounted) {
                    that.setState({
                        title: "",
                        description: "",
                        photoFile: null,
                        videoFile: null,
                        photoUrl: null,
                        videoUrl: null,
                        errors: that.props.errors
                    })
                }
            }
        })

        modal.addEventListener('click', function(e) {
            if(e.target == modal) {
                modal.style.display = "none";
                // debugger
                if(this._isMounted) {
                    that.setState({
                        title: "",
                        description: "",
                        photoFile: null,
                        videoFile: null,
                        photoUrl: null,
                        videoUrl: null,
                        errors: that.props.errors
                    })
                }
            }
        })
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }
  

    handleFile(field) {
        return (e) => {
            const file = e.currentTarget.files[0];
            const fileReader = new FileReader();
            if(field === "photoFile") {
                fileReader.onloadend = () => {
                    this.setState({
                        [field]: file,
                        photoUrl: fileReader.result
                    })
                }
                if(file) {
                    fileReader.readAsDataURL(file);
                }
            } else {
                fileReader.onloadend = () => {
                    this.setState({
                        [field]: file,
                        videoUrl: fileReader.result
                    })
                }
                if(file) {
                    fileReader.readAsDataURL(file);
                }
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const video = new FormData();
        this.state.title.length > 0 ? video.append('video[title]', this.state.title) : video.append('video[title]', "");
        this.state.description.length > 0 ? video.append('video[description]', this.state.description) : video.append('video[description]', "");
        this.state.photoFile ? video.append('video[thumbnail]', this.state.photoFile) : null;
        this.state.videoFile ? video.append('video[clip]', this.state.videoFile) : null;
        // debugger
        this.props.processForm(video).then(() => {
            window.location.href = "/";
        }, errors => {
            // debugger
            this.setState({
                errors: errors.errors
            })
        })
    }

    render() {
        const exclamation = <FontAwesomeIcon id="dot" icon="exclamation-circle" />;
        const check = <FontAwesomeIcon id="dot2" icon="check-circle" />;
        const images = <FontAwesomeIcon id="thumbnail-up" icon="images" onClick={ () => document.getElementById("photoFile").click() }/>
        const film = <FontAwesomeIcon id="clip-up" icon="film" onClick={ () => document.getElementById("videoFile").click() }/>
        // console.log(this.state)
        // debugger
        const preview1 = this.state.photoUrl ? <img height="50%" width="50%" className="thumbnail-preview" src={ this.state.photoUrl } /> : <div className="fluke2"></div>;
        const preview2 = this.state.videoUrl ? <video height="50%" width="50%" className="video-preview" controls><source src={ this.state.videoUrl }/></video>  : <div className="fluke"></div>;
        
        return (
            <form onSubmit={ this.handleSubmit } className={ this.props.state.uploading ? "modal-content2" : "hide" }>
                <span className="close2">&times;</span>
                <div className="top-of-form"><h1>{ this.state.title }</h1></div>
                <div className="bottom-of-form">
                    <div className="completion">
                        <div className="steps">
                            <span className="psu">Details</span>
                            <span>Thumbnail</span>
                            <span>Your Clip</span>
                        </div>
                        <div className="dots">
                            { this.state.title.length > 0 && this.state.description.length > 0 ? check : exclamation }
                            { this.state.photoFile ? check : exclamation }
                            { this.state.videoFile ? check : exclamation }
                        </div>
                    </div>
                    <div className="everythingelse">
                        <div className="inputs">
                            <h1>Details</h1>
                            <input className={ this.state.errors.title ? "field-errors" : ""} type="text" id="form-title" placeholder="Title" value={ this.state.title } onChange={ this.handleInput('title') } />
                            <p className="text-errors">{ this.state.errors.title ? this.state.errors.title : ""}</p>
                            <textarea className={ this.state.errors.description ? "field-errors" : ""} value={ this.state.description } id="form-description" placeholder="Description" onChange={ this.handleInput('description')} />
                            <p className="text-errors">{ this.state.errors.description ? this.state.errors.description : ""}</p>
                            <div className="buttons">
                                { preview1 }
                                <label id="hide" className={ this.state.errors.thumbnail ? "field-errors" : ""}>Upload Thumbnail<input id="photoFile" type="file" onChange={ this.handleFile('photoFile') }/></label>
                                { images }
                                <p className="text-errors">{ this.state.errors.thumbnail ? this.state.errors.thumbnail : ""}</p>
                            </div>
                        </div>
                        <div className="hurry">
                            { preview2 }
                            <label id="hide" className={ this.state.errors.clip ? "field-errors" : ""}>Upload Video<input id="videoFile" type="file" onChange={ this.handleFile('videoFile') }/></label>
                            { film }
                            <p className="text-errors">{ this.state.errors.clip ? this.state.errors.clip : ""}</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="submit-the-video" type="submit">Upload</button>
                </div>
            </form>
        )
    }
}