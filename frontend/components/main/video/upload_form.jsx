import React from 'react';

export default class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            photoFile: null,
            videoFile: null,
            photoUrl: null
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
                this.setState({
                    [field]: e.currentTarget.files[0]
                })
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
        const preview = this.state.photoUrl ? <img className="thumbnail-preview" src={ this.state.photoUrl } /> : null;
        return (
            <form onSubmit={ this.handleSubmit } className={ this.props.state.uploading ? "modal-content2" : "hide" }>
                <span className="close2">&times;</span>
                <div className="left-upload">
                    <div className="inputs">
                        <input type="text" id="form-title" placeholder="Title" value={ this.state.title } onChange={ this.handleInput('title') } />
                        <textarea value={ this.state.description } id="form-description" placeholder="Description" onChange={ this.handleInput('description')} />
                    </div>
                    <div className="buttons">
                        <label>Upload Thumbnail<input type="file" onChange={ this.handleFile('photoFile') }/></label>
                        { preview }
                    </div>
                </div>
                <div className="right-upload">
                    <label>Upload Video<input type="file" onChange={ this.handleFile('videoFile') }/></label>
                    <button type="submit">Upload</button>
                </div>
            </form>
        )
    }
}