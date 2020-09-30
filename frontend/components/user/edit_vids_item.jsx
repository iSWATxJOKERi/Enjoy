import React from 'react';
import dateConverter from '../../util/date_converter';
import VideoUpdateForm from './video_update_form';

export default class EditVids extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVideos = this.toggleVideos.bind(this);
    }

    componentDidMount() {
        this.toggleVideos();
    }
    
    toggleVideos() {
        const videos = document.getElementsByClassName("abs-pos-modal")[0];
        // const button = document.getElementsByClassName("edit-video");
        // debugger
        const close = document.getElementsByClassName("close3")[0];

        document.querySelectorAll('.edit-video').forEach(item => {
            item.addEventListener('click', e => {
                debugger
                videos.style.display = "block";
            })
        }) 

        close.onclick = function() {
            videos.style.display = "none";
        }

    }

    render() {
        let update;
        if(this.props.allProps.currentUser && (this.props.vid.uploader.id === this.props.allProps.currentUser)) {
            // debugger
            update = <div className="edit-delete-hover">
                <button className="edit-video">EDIT</button>
                <button className="delete-video">DELETE</button>
                <VideoUpdateForm allProps={ this.props.allProps } video={ this.props.vid }/>
            </div>
        }
        return (
            <section className="edit-item">
                <img id="user-video-images" onClick={ () => this.props.allProps.history.push(`/videos/${ this.props.vid.id }`) } src={ this.props.vid.photoUrl } />
                <h1>{ this.props.vid.title }</h1>
                <div className="-uploaded-box-date">
                    <span id="deets">6M views &#8226;</span>
                    <span id="deets"> { dateConverter(this.props.vid.created_at) }</span>
                </div>
                { update }
            </section>
        )
    }
}