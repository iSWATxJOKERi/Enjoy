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
        this.toggleVideos = this.toggleVideos.bind(this);
    }

    componentDidMount() {
        this.toggleVideos();
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

    toggleVideos() {
        const videos = document.getElementsByClassName("abs-pos-modal")[0];
        const button = document.getElementsByClassName("edit-video")[0];
        const close = document.getElementsByClassName("close3")[0];

        button.onclick = function() {
            videos.style.display = "block";
        }

        close.onclick = function() {
            videos.style.display = "none";
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        const video = new FormData();
        video.append('video[title]', this.state.title);
        video.append('video[description]', this.state.description);
        video.append('video[thumbnail]', this.state.photoFile)
        this.props.allProps.processForm(video).then(() => this.props.allProps.history.push(`/users/${ this.props.allProps.currentUser.id }`));
    }

    render() {
        return (
            <section className="abs-pos-modal">
                <section className="update-modal">
                    <form onSubmit={ this.handleSubmit } className="update-section">
                        <span className="close3">&times;</span>
                        <label>Change Title<input type="text" id="form-title" value={ this.state.title } placeholder={ this.props.video.title } onChange={ this.handleInput('title') } /></label>
                        <label>Change Description<textarea value={ this.state.description } placeholder={ this.props.video.description } id="form-description"  onChange={ this.handleInput('description')} /></label>
                        <label>Change Thumbnail<input type="file" onChange={ this.handleFile('photoFile') }/></label>
                        <button type="submit-update">Update</button>
                    </form>
                </section>
            </section>
        )
    }
}

export default VideoUpdateForm;