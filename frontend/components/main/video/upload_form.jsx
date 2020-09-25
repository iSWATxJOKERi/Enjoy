import React from 'react';

export default class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            videoFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleFile(e) {
        this.setState({
            videoFile: e.currentTarget.files[0]
        })
    }

    handleSubmit() {

    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={ this.handleSubmit } className={ this.props.state.uploading ? "modal-content2" : "hide" }>
                <span className="close">&times;</span>
                <input type="text" id="form-title" placeholder="Title" value={ this.state.title } onChange={ this.handleInput('title') } />
                <textarea value={ this.state.description } id="form-description" placeholder="Description" onChange={ this.handleInput('description')} />
                <input type="file" onChange={ this.handleFile }/>
                <button>Upload Video</button>
            </form>
        )
    }
}