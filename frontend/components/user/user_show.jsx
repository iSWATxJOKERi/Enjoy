import React from 'react';
import PopoutSidebar from '../main/popout_sidebar';
import SideBar from '../main/sidebar/sidebar_content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../font_awesome';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchUser(this.props.match.params.id);
        this.toggleSidebar();
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
        const icon = <FontAwesomeIcon id="avatar" icon="user-circle" />
        return (
            <section className="main-content">
                { popout }
                <SideBar />
                { this.props.user ? 
                    <section className="user-main">
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
                                <li>Home</li>
                                <li>Videos</li>
                                <li>About</li>
                            </div>
                        </div>
                        <section className="user-content">
                            
                        </section>
                    </section> : null 
                }   
            </section>
        )
    }
}

export default UserShow;
