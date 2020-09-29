import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import UserIconDropdown from './user_icon_dropdown';
import VideoUploadDropdown from '../main/video/upload_dropdown';
import '../../font_awesome';


class EENavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
            up: false
        }
        this.toggleClass = this.toggleClass.bind(this);
        this.toggleUpload = this.toggleUpload.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleClass() {
        const cs = this.state.online
        this.setState({
            online: !cs
        })
    }

    toggleUpload() {
        const cs = this.state.up
        this.setState({
            up: !cs
        })
    }

    componentDidMount() {
        this.toggleModal();
    }

    toggleModal() {
        const modal = document.getElementsByClassName("show-modal")[0];
        const content = document.getElementsByClassName("show-modal-content")[0];
        const button = document.getElementById("show-modal-btn");

        button.onclick = function() {
            if(modal.style.display == "none") {
                modal.style.display = "block";
            } else {
                modal.style.display = "none";
            }
        }

        content.onclick = function(e) {
            if(e.target == content) {
                modal.style.display = "none";
            }
        }
    }

    render() {
        const bar = <FontAwesomeIcon id="show-modal-btn" onClick={ this.toggleModal } icon="bars" />
        const user = <FontAwesomeIcon icon="user-circle" />
        const clickableUser = <FontAwesomeIcon id="user" onClick={ this.toggleClass } icon="user-circle" />
        const upload = <FontAwesomeIcon onClick={ this.toggleUpload } icon="video" />
        const menu = <FontAwesomeIcon icon="th" />
        const settings = <FontAwesomeIcon icon="ellipsis-v" />
        const search = <FontAwesomeIcon icon="search" />
        const bell = <FontAwesomeIcon icon="bell" />
        const dropdown = <UserIconDropdown allProps={ this.props } state={ this.state } toggle={ this.toggleClass }/>
        const vdropdown = <VideoUploadDropdown allProps={ this.props } state={ this.state } toggle={ this.toggleUpload } />
        const display = this.props.currentUser ? clickableUser  :
            <div onClick={ () => this.props.history.push("/login") } className="sign-in">
                { user }
                <span>SIGN IN</span>
            </div>
        return (
            <header className="nav-bar">
                <div className="left-nav">
                    { bar }
                    <img onClick={ () => this.props.history.push("/") } className="logo" src={ window.logo } />
                </div>
                <div className="middle-nav">
                    <div className="search-container">
                        <input className="search-bar" placeholder="Search" type="text"/>
                        <div className="search-btn">
                            { search }
                        </div>
                    </div>
                </div>
                <div className="right-nav">
                    { upload }
                    { menu }
                    { this.props.currentUser ? bell : settings }
                    { display }
                    { this.props.currentUser ? dropdown : null }
                    { vdropdown }
                </div>
            </header>
        )
    }
}

export default EENavBar;

