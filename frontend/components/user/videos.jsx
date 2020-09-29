import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import EditVids from './edit_vids_item';
export default class Videos extends React.Component {
    constructor(props) {
        super(props);
        // this.toggleVideos = this.toggleVideos.bind(this);
    }

    componentDidMount() {
        // debugger
        // this.props.fetchUser(this.props.match.params.id);
        // this.props.fetchVideos();
        this.toggleVideos();
    }

    toggleVideos() {
        const videos = document.getElementsByClassName("all-user-vids")[0];
        const item = document.getElementById("show-all-vids");
        const uploads = document.getElementsByClassName("uploads-section")[0];
        const home = document.getElementById("back-home");

        item.onclick = function() {
            uploads.style.display = "none";
            videos.style.display = "flex";
        }

        home.onclick = function() {
            uploads.style.display = "flex";
            videos.style.display = "none";
        }
    }

    render() {
        let vids;
        if(this.props.videos.length > 0) {
            vids = this.props.videos.map(video => {
                if(video.uploader.id === this.props.user.id) {
                    return <EditVids key={ video.id } vid={ video }/>
                }
            })
        }
        return (
            <section className="all-user-vids">
                <h1 className="videos-name">Videos</h1>
                <div className="all-videos">
                    { vids }
                </div>
            </section>
        )
    }
}