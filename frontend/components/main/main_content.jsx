import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../font_awesome';
import SideBar from './sidebar/sidebar_content';
import PopoutSidebar from './popout_sidebar';
import VideoIndex from './video/video_index';


class MainContent extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = {
            allVideos: []
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.getVideos().then(videos => {
            if(this.props.currentUser) {
                this.props.fetchSubscriptions(this.props.currentUser).then(() => {
                    // this.props.fetchUsers().then(() => {
                        this.toggleSidebar();
                        this.setState({
                            allVideos: videos,
                        })
                    // })
                })
            } else {
                this.toggleSidebar();
                this.setState({
                    allVideos: videos,
                })
            }
        })
    }

    toggleSidebar() {
        const popbar = document.getElementsByClassName("pop")[0];
        const button = document.getElementById("side-bar-pop");
        const videos = document.getElementsByClassName("index-section")[0];
        const dup = document.getElementsByClassName("dup")[0];
        const sidebar = document.getElementsByClassName("sidebar")[0];

        // debugger
        button.addEventListener('click', function() {
            if(popbar.style.display == "flex" || popbar.style.display == "block" || popbar.style.display == "") {
                popbar.style.display = "none";
                videos.style.marginLeft = "4.02%";
                dup.style.flexWrap = "wrap";
                dup.style.paddingLeft = "0";
                sidebar.style.display = "flex";
            } else {
                sidebar.style.display = "none";
                popbar.style.display = "block";
                videos.style.marginLeft = "12.6%";
                dup.style.flexWrap = "wrap";
                dup.style.paddingLeft = "80px";
            }
        })
    }

    render() {
        const popout = <PopoutSidebar allProps={ this.props } />

        return (
            <section className="main-content">
                { popout }
                <SideBar allProps={ this.props }/>
                <section className="index-section">
                    <div className="list-of-tags">
                        <li>All</li>
                        <li>Rapping</li>
                        <li>Lo-fi music</li>
                        <li>Indie Music</li>
                        <li>Electronic Music</li>
                        <li>Thrillers</li>
                        <li>Soul Music</li>
                        <li>Comedy</li>
                        <li>Transfer</li>
                        <li>JavaScript</li>
                        <li>Championships</li>
                        <li>Trailers</li>
                        <li>Football</li>
                        <li>Xbox</li>
                        <li>Halo</li>
                    </div>
                    <section className="video-section">
                        <VideoIndex allProps={ this.props } videos={ this.props.videos } />
                    </section>
                </section>
            </section>
        )
    }
}

export default MainContent;