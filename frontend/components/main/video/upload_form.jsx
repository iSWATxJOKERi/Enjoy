import React from 'react';

export default class UploadForm extends React.Component {
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
        this.state.thumbnail ? video.append('video[thumbnail]', this.state.photoFile) : null;
        this.state.clip ? video.append('video[clip]', this.state.videoFile) : null;
        // debugger
        this.props.processForm(video).then(() => {
            this.props.history.push("/")
        }, errors => {
            // debugger
            this.setState({
                errors: errors.errors
            })
        })
    }

    render() {
        // console.log(this.state)
        // debugger
        const preview1 = this.state.photoUrl ? <img className="thumbnail-preview" src={ this.state.photoUrl } /> : null;
        const preview2 = this.state.videoUrl ? <video height="50%" width="50%" className="video-preview" controls><source src={ this.state.videoUrl }/></video>  : null;
        
        return (
            <form onSubmit={ this.handleSubmit } className={ this.props.state.uploading ? "modal-content2" : "hide" }>
                <span className="close2">&times;</span>
                <div className="left-upload">
                    <div className="inputs">
                        <input className={ this.state.errors.title ? "field-errors" : ""} type="text" id="form-title" placeholder="Title" value={ this.state.title } onChange={ this.handleInput('title') } />
                        <p className="text-errors">{ this.state.errors.title ? this.state.errors.title : ""}</p>
                        <textarea className={ this.state.errors.description ? "field-errors" : ""} value={ this.state.description } id="form-description" placeholder="Description" onChange={ this.handleInput('description')} />
                        <p className="text-errors">{ this.state.errors.description ? this.state.errors.description : ""}</p>
                    </div>
                </div>
                <div className="right-upload">
                    <div className="running">
                        <div className="buttons">
                            { preview1 }
                            <label className={ this.state.errors.thumbnail ? "field-errors" : ""}>Upload Thumbnail<input type="file" onChange={ this.handleFile('photoFile') }/></label>
                            <p className="text-errors">{ this.state.errors.thumbnail ? this.state.errors.thumbnail : ""}</p>
                        </div>
                        <div className="hurry">
                            { preview2 }
                            <label className={ this.state.errors.clip ? "field-errors" : ""}>Upload Video<input type="file" onChange={ this.handleFile('videoFile') }/></label>
                            <p className="text-errors">{ this.state.errors.clip ? this.state.errors.clip : ""}</p>
                        </div>
                    </div>
                    <button className="submit-the-video" type="submit">Upload</button>
                </div>
            </form>
        )
    }
}