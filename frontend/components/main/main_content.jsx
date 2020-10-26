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
        const videos = this.props.getVideos();
        this.toggleSidebar();
        this.setState({
            allVideos: videos,
        })
    }

    toggleSidebar() {
        const popbar = document.getElementsByClassName("pop")[0];
        const button = document.getElementById("side-bar-pop");
        const videos = document.getElementsByClassName("index-section")[0];
        const dup = document.getElementsByClassName("dup")[0];
        const sidebar = document.getElementsByClassName("sidebar")[0];

        button.onclick = function() {
            if(popbar.style.display == "flex" || popbar.style.display == "block") {
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
        }
    }

    render() {
        const popout = <PopoutSidebar allProps={ this.props } />

        return (
            <section className="main-content">
                { popout }
                <SideBar allProps={ this.props }/>
                <section className="index-section">
                    <section className="video-section">
                        <VideoIndex allProps={ this.props } videos={ this.props.videos } />
                    </section>
                </section>
            </section>
        )
    }
}

export default MainContent;