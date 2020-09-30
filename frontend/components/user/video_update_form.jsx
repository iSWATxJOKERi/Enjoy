import React from 'react';

class VideoUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            photoFile: null,
            photoUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        // this.toggleVideos = this.toggleVideos.bind(this);
    }

    // componentDidMount() {
    //     this.toggleVideos();
    // }

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
            fileReader.onloadend = () => {
                this.setState({
                    [field]: file,
                    photoUrl: fileReader.result
                })
            }
            if(file) {
                fileReader.readAsDataURL(file);
            }
        }
    }

    // toggleVideos() {
    //     const videos = document.getElementsByClassName("abs-pos-modal")[0];
    //     const button = document.getElementsByClassName("edit-video")[0];
    //     const close = document.getElementsByClassName("close3")[0];

    //     button.onclick = function() {
    //         videos.style.display = "block";
    //     }

    //     close.onclick = function() {
    //         videos.style.display = "none";
    //     }

    // }

    handleSubmit(e) {
        e.preventDefault();
        const video = new FormData();
        video.append('video[title]', this.state.title);
        video.append('video[description]', this.state.description);
        video.append('video[thumbnail]', this.state.photoFile)
        this.props.allProps.processForm(video).then(() => this.props.allProps.history.push(`/users/${ this.props.allProps.currentUser.id }`));
    }

    render() {
        const preview1 = this.state.photoUrl ? <img className="thumbnail-preview" src={ this.state.photoUrl } /> : null;
        return (
            <section className="abs-pos-modal">
                <section className="update-modal">
                    <form onSubmit={ this.handleSubmit } className="update-section">
                        <span className="close3">&times;</span>
                        <div className="left-update">
                            <div className="update-inputs">
                                <input type="text" id="u-title" placeholder={ this.props.video.title } value={ this.state.title } onChange={ this.handleInput('title') } />
                                <textarea value={ this.state.description } id="u-description" placeholder={ this.props.video.description } onChange={ this.handleInput('description')} />
                            </div>
                        </div>
                        <div className="right-update">
                            <div className="update-buttons">
                                { preview1 }
                                <label>Upload Thumbnail<input type="file" onChange={ this.handleFile('photoFile') }/></label>
                            </div>
                            <button className="submit-the-video2" type="submit">Upload</button>
                        </div>
                    </form>
                </section>
            </section>
        )
    }
}

export default VideoUpdateForm;