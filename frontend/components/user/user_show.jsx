import React from 'react';
import PopoutSidebar from '../main/popout_sidebar';
import SideBar from '../main/sidebar/sidebar_content';
import UserUploadedVids from './user_uploaded_vids_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Videos from './videos';
import '../../font_awesome';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSide = this.toggleSide.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchUser(this.props.match.params.id);
        this.props.fetchVideos();
        this.toggleSide();
    }

    
    toggleSide() {
        const popbar = document.getElementsByClassName("pop")[0];
        const button = document.getElementById("side-bar-pop");
        const user = document.getElementsByClassName("user-main")[0];
        const sidebar = document.getElementsByClassName("sidebar")[0];

        button.onclick = function() {
            if(popbar.style.display == "flex" || popbar.style.display == "block") {
                popbar.style.display = "none";
                user.style.marginLeft = "4.02%";
                sidebar.style.display = "flex";
            } else {
                sidebar.style.display = "none";
                popbar.style.display = "block";
                user.style.marginLeft = "12.6%";
            }
        }
    }

    render() {
        const icon = <FontAwesomeIcon id="avatar" icon="user-circle" />
        let vids;
        if(this.props.videos.length > 0) {
            // debugger
            vids = this.props.videos.map(video => {
                if(video.uploader.id === this.props.user.id) {
                    return <UserUploadedVids key={ video.id } vid={ video }/>
                }
            })
        }
        return (
            <section className="main-content">
                <PopoutSidebar />
                <SideBar />
                <section className="user-main">
                    { this.props.user ? <>
                        <div className="user-header">
                            <div className="user-center-header">
                                <div className="left-header">
                                    { icon }
                                </div>
                                <div className="middle-header">
                                    <h1 className="user-username">{ this.props.user.username }</h1>
                                </div>
                                <div className="right-header">
                                    <button>CUSTOMIZE BANNER</button>
                                </div>
                            </div>
                            <div className="parts-of-header">
                                <li id="back-home">Home</li>
                                <li id="show-all-vids">Videos</li>
                                <li>About</li>
                            </div>
                        </div>
                        <section className="user-content">
                            <div className="uploads-section">
                                <span className="upload-title">Uploads</span>
                                <div className="uploads">
                                    { vids }
                                </div>
                            </div>
                            <Videos user={ this.props.user } videos={ this.props.videos } cu={ this.props.currentUser } />
                        </section> </> : null }
                </section> 
            </section>
        )
    }
}

export default UserShow;
