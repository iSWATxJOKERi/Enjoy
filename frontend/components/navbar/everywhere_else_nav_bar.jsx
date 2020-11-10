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
            up: false,
            search: ""
        }
        this.toggleClass = this.toggleClass.bind(this);
        this.toggleUpload = this.toggleUpload.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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
        document.getElementById("vid-icon2").addEventListener('click', () => {
            document.addEventListener('click', (e) => {
                const v = document.getElementsByClassName("video-drop")[0];
                // debugger
                if(v) {
                    // debugger
                    if(e.target !== v && e.target !== document.getElementById("vid-icon2").children[0] && 
                        e.target !== document.getElementById("video-up").children[0] && 
                        e.target !== document.getElementById("video-up") &&
                        e.target !== document.getElementById("vid-icon") &&
                        e.target !== document.getElementById("modal-btn")) {
                        // debugger
                        this.setState({
                            up: false
                        })
                    } else {
                        this.setState({
                            up: true
                        })
                    }
                }
            })
        })
        if(document.getElementById("user-pic2")) {
            // debugger
            document.getElementById("user-pic2").addEventListener('click', () => {
                // debugger
                document.addEventListener('click', (e) => {
                    const v = document.getElementsByClassName("drop")[0];
                    // debugger
                    if(v) {
                        // debugger
                        if(e.target !== v && e.target !== document.getElementById("user-pic2") && 
                            e.target !== document.getElementById("user-pic3") && 
                            e.target !== document.getElementById("user2") &&
                            e.target !== document.getElementById("unid") &&
                            e.target !== document.getElementById("link") &&
                            e.target !== document.getElementById("li-1") &&
                            e.target !== document.getElementById("log")) {
                            // debugger
                            this.setState({
                                online: false
                            })
                        } else {
                            this.setState({
                                online: true
                            }) 
                        }
                    }
                })
            })
        } else {
            document.getElementById("user").addEventListener('click', () => {
                // debugger
                document.addEventListener('click', (e) => {
                    const v = document.getElementsByClassName("drop")[0];
                    // debugger
                    if(v) {
                        // debugger
                        if(e.target !== v && e.target !== document.getElementById("user") && 
                            e.target !== document.getElementById("user-pic3") && 
                            e.target !== document.getElementById("user2") &&
                            e.target !== document.getElementById("unid") &&
                            e.target !== document.getElementById("link") &&
                            e.target !== document.getElementById("li-1") &&
                            e.target !== document.getElementById("log")) {
                            // debugger
                            this.setState({
                                online: false
                            })
                        } else {
                            this.setState({
                                online: true
                            }) 
                        }
                    }
                })
            })
        }
    }

    handleChange() {
        return (e) => {
            this.setState({
                search: e.currentTarget.value
            })
        }
    }

    handleSearch(query) {
        this.props.getSearchVideos(query).then(() => {
            this.props.getSearchUser(query).then(() => {
                this.props.history.replace("/search")
            })
        })
    }

    toggleModal() {
        const modal = document.getElementsByClassName("show-modal")[0];
        const content = document.getElementsByClassName("show-modal-content")[0];
        const button = document.getElementById("show-modal-btn");
        const button2 = document.getElementById("show-close");

        button.onclick = function() {
            if(modal.style.display == "none" || modal.style.display == "") {
                modal.style.display = "block";
            } 
        }

        button2.onclick = function() {
            if(modal.style.display == "block") {
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
        let clickableUser;
        if(this.props.currentUser) { 
            clickableUser= this.props.user.avatar ? 
            <img id="user-pic2" src={ `${ this.props.user.avatar }` } onClick={ this.toggleClass } /> : 
            <span id="user" onClick={ this.toggleClass }>{ this.props.currentUser ? this.props.user.username[0] : "" }</span>
        }
        const upload = <FontAwesomeIcon id="vid-icon2" onClick={ this.toggleUpload } icon="video" />
        const menu = <FontAwesomeIcon icon="th" />
        const settings = <FontAwesomeIcon icon="ellipsis-v" />
        const search = <FontAwesomeIcon icon="search" onClick={ () => this.handleSearch(this.state.search) }/>
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
                        <input className="search-bar" placeholder="Search" type="text" onChange={ this.handleChange() }/>
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

