import React from 'react';

class VideoUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            photoFile: null
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
            this.setState({
                [field]: e.currentTarget.files[0]
            })
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const video = new FormData();
        video.append('video[title]', this.state.title);
        video.append('video[description]', this.state.description);
        video.append('video[thumbnail]', this.state.photoFile)
        this.props.processForm(video).then(() => this.props.history.push(`/users/${ this.props.currentUser.id }`));
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } className="update-section">
                <input type="text" id="form-title" value={ this.state.title } placeholder={ this.props.video.title } onChange={ this.handleInput('title') } />
                <textarea value={ this.state.description } placeholder={ this.props.video.description } id="form-description"  onChange={ this.handleInput('description')} />
                <label>Upload Thumbnail<input type="file" onChange={ this.handleFile('photoFile') }/></label>
                <label>Upload Video<input type="file" onChange={ this.handleFile('videoFile') }/></label>
                <button type="submit">Upload</button>
            </form>
        )
    }
}