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
            videoUrl: null
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
        video.append('video[title]', this.state.title);
        video.append('video[description]', this.state.description);
        video.append('video[thumbnail]', this.state.photoFile)
        video.append('video[clip]', this.state.videoFile);
        // debugger
        this.props.processForm(video).then(() => this.props.history.push("/"));
    }

    render() {
        console.log(this.state)
        // debugger
        const preview1 = this.state.photoUrl ? <img className="thumbnail-preview" src={ this.state.photoUrl } /> : null;
        const preview2 = this.state.videoUrl ? <video height="50%" width="50%" className="video-preview" controls><source src={ this.state.videoUrl }/></video>  : null;
        
        return (
            <form onSubmit={ this.handleSubmit } className={ this.props.state.uploading ? "modal-content2" : "hide" }>
                <span className="close2">&times;</span>
                <div className="left-upload">
                    <div className="inputs">
                        <input type="text" id="form-title" placeholder="Title" value={ this.state.title } onChange={ this.handleInput('title') } />
                        <textarea value={ this.state.description } id="form-description" placeholder="Description" onChange={ this.handleInput('description')} />
                    </div>
                </div>
                <div className="right-upload">
                    <div className="running">
                        <div className="buttons">
                            { preview1 }
                            <label>Upload Thumbnail<input type="file" onChange={ this.handleFile('photoFile') }/></label>
                        </div>
                        <div className="hurry">
                            { preview2 }
                            <label>Upload Video<input type="file" onChange={ this.handleFile('videoFile') }/></label>
                        </div>
                    </div>
                    <button className="submit-the-video" type="submit">Upload</button>
                </div>
            </form>
        )
    }
}