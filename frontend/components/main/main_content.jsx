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
            pop: false,
            allVideos: []
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidMount() {
        // debugger
        const videos = this.props.getVideos()
        this.setState({
            allVideos: videos,
        })
    }

    toggleSidebar() {
        const cs = this.state.pop
        this.setState({
            pop: !cs
        })
    }

    render() {
        const bar = <FontAwesomeIcon id="side" onClick={ this.toggleSidebar } icon="bars" />
        const popout = <PopoutSidebar allProps={ this.props } pop={ this.state.pop } toggle={ this.toggleSidebar } />
        return (
            <section className="main-content">
                { bar }
                { this.state.pop ? popout : <SideBar /> }
                <section className="video-section">
                    <VideoIndex videos={ this.props.videos } />
                </section>
            </section>
        )
    }
}

export default MainContent;