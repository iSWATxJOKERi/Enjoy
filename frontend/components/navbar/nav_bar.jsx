import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../font_awesome';


export default (props) => {
    const bar = <FontAwesomeIcon icon="bars" />
    const user = <FontAwesomeIcon icon="user-circle" />
    const upload = <FontAwesomeIcon icon="video" />
    const menu = <FontAwesomeIcon icon="th" />
    const settings = <FontAwesomeIcon icon="ellipsis-v" />
    const search = <FontAwesomeIcon icon="search" />
    return (
        <header className="nav-bar">
            <div className="left-nav">
                { bar }
                <img onClick={ () => props.history.push("/") } className="ytlogo" src={ window.ytLogo } />
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
                { settings }
                <div onClick={ () => props.history.push("/login") }className="sign-in">
                    { user }
                    <span>SIGN IN</span>
                </div>
            </div>
        </header>
    )
}

