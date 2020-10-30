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
        this.state = {
            avatar: null,
            avatarUrl: null
        }
        this.toggleSide = this.toggleSide.bind(this);
        this.uploadAvatar = this.uploadAvatar.bind(this);
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

    handleSubmit() {
        const user = new FormData();
        const id = this.props.match.params.id;
        this.state.avatar.name ? user.append('user[avatar]', this.state.avatar) : user.append('user[avatar]', "");
        // debugger
        this.props.processAvatar(user, id).then(() => {
            window.location.href = `/#/users/1`;
        }, errors => {
            this.setState({
                errors: errors.errors
            })
        })
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
        let vids = [];
        let show;
        let edit_avatar = <FontAwesomeIcon id="edit-avatar" icon="camera" onClick={ () => document.getElementById("avatar-upload").click() }/>
        let edit_avatar2 = <FontAwesomeIcon id="edit-avatar" icon="camera" onClick={ () => document.getElementById("avatar-upload").click() }/>
        if(this.props.user) {
            // debugger
            for(let i = 0; i < this.props.videos.length; i++) {
                if(this.props.videos[i].uploader.id === this.props.user.id) {
                    vids.push(<UserUploadedVids key={ this.props.videos[i].id } history={ this.props.history } vid={ this.props.videos[i] }/>)
                }
            }
            // debugger
            show = vids.slice(0,4)
        }
        return (
            <section className="main-content">
                <PopoutSidebar allProps={ this.props }/>
                <SideBar allProps={ this.props }/>
                <section className="user-main">
                    { this.props.user ? <>
                        <div className="user-header">
                            <div className="user-center-header">
                                <div className="left-header">
                                    { this.props.user.avatar ? 
                                    <div id="hoverme">
                                        { edit_avatar2 }
                                        <img className="user-avatar" src={ `${ this.props.user.avatar }` } onClick={ () => this.props.allProps.history.push(`/users/${ this.props.user.id }`) } />
                                    </div> : 
                                    <span id="avatar">{ this.props.user.username[0] }{ edit_avatar }</span> }
                                    <input id="avatar-upload" type="file" onChange={ this.uploadAvatar }/>
                                </div>
                                <div className="middle-header">
                                    <h1 className="user-username">{ this.props.user.username }</h1>
                                </div>
                                <div className="right-head">
                                    <div className="right-header">
                                        <button>CUSTOMIZE BANNER</button>
                                    </div>
                                    <div className="right-header">
                                        <button onClick={ () => this.props.allProps.history.push(`/users/${ this.props.user.id }/videos/edit`) }>MANAGE VIDEOS</button>
                                    </div>
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
                                    { show }
                                </div>
                            </div>
                            <Videos allProps={ this.props } />
                        </section> </> : null }
                </section> 
            </section>
        )
    }
}

export default UserShow;
