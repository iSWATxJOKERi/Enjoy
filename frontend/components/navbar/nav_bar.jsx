import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import UserIconDropdown from './user_icon_dropdown';
import '../../font_awesome';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false
        }
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        const cs = this.state.online
        this.setState({
            online: !cs
        })
    }

    render() {
        const bar = <FontAwesomeIcon icon="bars" />
        const user = <FontAwesomeIcon icon="user-circle" />
        const clickableUser = <FontAwesomeIcon id="user" onClick={ this.toggleClass } icon="user-circle" />
        const upload = <FontAwesomeIcon icon="video" />
        const menu = <FontAwesomeIcon icon="th" />
        const settings = <FontAwesomeIcon icon="ellipsis-v" />
        const search = <FontAwesomeIcon icon="search" />
        const bell = <FontAwesomeIcon icon="bell" />
        const dropdown = <UserIconDropdown allProps={ this.props } state={ this.state } toggle= { this.toggleClass }/>
        const display = this.props.currentUser ? clickableUser  :
            <div onClick={ () => this.props.history.push("/login") } className="sign-in">
                { user }
                <span>SIGN IN</span>
            </div>
        return (
            <header className="nav-bar">
                <div className="left-nav">
                    { bar }
                    <img onClick={ () => this.props.history.push("/") } className="ytlogo" src={ window.ytLogo } />
                </div>
                <div className="middle-nav">
                    <div className="search-container">
                        <input className="search-bar" type="text"/>
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
                </div>
            </header>
        )
    }
}

export default NavBar;

