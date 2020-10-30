import React from 'react';
import PopoutSidebar from '../main/popout_sidebar';
import SideBar from '../main/sidebar/sidebar_content';
import StudioVids from './studio_vids';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../font_awesome';

class UserStudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: null,
            avatarUrl: null
        }
        this.toggleSide = this.toggleSide.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchUser(this.props.match.params.id).then(() => {
            this.props.fetchVideos().then(() => {
                this.toggleSide();
            })
        })
    }

    uploadAvatar(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                avatar: file,
                avatarUrl: fileReader.result
            })
        }
        if(file) {
            fileReader.readAsDataURL(file);
            this.handleSubmit();
        }
    }

    toggleSide() {
        const popbar = document.getElementsByClassName("pop")[0];
        const button = document.getElementById("side-bar-pop");
        const user = document.getElementsByClassName("studio-main")[0];
        const sidebar = document.getElementsByClassName("sidebar")[0];

        button.addEventListener('click', function() {
            if(popbar.style.display == "flex" || popbar.style.display == "block") {
                popbar.style.display = "none";
                user.style.marginLeft = "4.02%";
                sidebar.style.display = "flex";
            } else {
                sidebar.style.display = "none";
                popbar.style.display = "block";
                user.style.marginLeft = "12.6%";
            }
        })
    }

    render() {
        let vids = [];
        let show;
        if(this.props.user) {
            // debugger
            for(let i = 0; i < this.props.videos.length; i++) {
                if(this.props.videos[i].uploader.id === this.props.user.id) {
                    vids.push(<StudioVids key={ this.props.videos[i].id } history={ this.props.history } vid={ this.props.videos[i] }/>)
                }
            }
            // debugger
        }    
        return (
            <section className="studio-content">
                <PopoutSidebar allProps={ this.props }/>
                <SideBar allProps={ this.props }/>
                <section className="studio-main">
                    <div className="studio-header"><h1>Channel Videos</h1></div>
                    <div className="studio-videos">
                        { vids }
                    </div>
                </section> 
            </section>
        )
    }
}

export default UserStudio;