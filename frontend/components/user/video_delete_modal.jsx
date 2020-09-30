import React from 'react';

class VideoDeleteModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteVids = this.deleteVids.bind(this);
    }

    deleteVids() {
        const videos = document.getElementsByClassName("delete-modal")[0];

        document.querySelectorAll('.delete-video').forEach(item => {
            item.addEventListener('click', e => {
                // debugger
                videos.style.display = "block";
            })
        })
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id);
        this.deleteVids();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteVideo(this.props.match.params.id).done(() => this.props.history.push(`/users/${ this.props.currentUser }`));
    }

    render() {
        const preview1 = this.props.video ? <video className="thumbnail-preview" autoPlay src={ this.props.video.videoUrl } controls/> : null;
        return (
            <section className="delete-modal">
                { this.props.video ? 
                <form onSubmit={ this.handleSubmit } className="delete-section">
                    <div className="delete-middle">
                        <span>Delete this video? You sure ?</span>
                        { preview1 }
                        <div className="delete-buttons">
                            <button onClick={ this.handleSubmit }>Yes</button>
                            <button onClick={ () => this.props.history.push(`/users/${ this.props.currentUser }`) } className="no-mas">No</button>
                        </div>
                    </div>
                </form> : null }
            </section>
        )
    }
}

export default VideoDeleteModal;
