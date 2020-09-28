import React from 'react';
import PopoutSidebar from '../main/popout_sidebar';
import SideBar from '../main/sidebar/sidebar_content';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
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
        const user = document.getElementsByClassName("user-main")[0];
        // const dup = document.getElementsByClassName("dup")[0];
        const sidebar = document.getElementsByClassName("sidebar")[0];

        button.onclick = function() {
            if(popbar.style.display == "flex" || popbar.style.display == "block") {
                popbar.style.display = "none";
                user.style.marginLeft = "4.02%";
                // dup.style.flexWrap = "wrap";
                // dup.style.paddingLeft = "0";
                sidebar.style.display = "flex";
            } else {
                sidebar.style.display = "none";
                popbar.style.display = "block";
                user.style.marginLeft = "285px";
                // dup.style.flexWrap = "wrap";
                // dup.style.paddingLeft = "60px";
            }
        }

        window.onclick = function(e) {
            if(e.target == popbar) {
                popbar.style.display = "none";
            }
        }
    }

    render() {
        const popout = <PopoutSidebar />

        return (
            <section className="main-content">
                { popout }
                <SideBar />
                <section className="user-main">
                    <div className="user-header">
                        
                    </div>
                    <section className="user-content">
                        
                    </section>
                </section>
            </section>
        )
    }
}

export default UserShow;
