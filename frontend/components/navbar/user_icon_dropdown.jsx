import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../font_awesome';

export default (props) => {
    const user = <FontAwesomeIcon icon="user-circle" />

    return (
        <section className={ props.state.online ? "drop profile-dropdown" : "hide"}>
            <div className="top">
                { user }
                <div className="manage">
                    <h2>{ props.allProps.currentUser.username }</h2>
                    <Link to={`/users/${ props.allProps.currentUser }` }>Manage your account</Link>
                </div>
            </div>
            <ul className="middle">
                <li>Your Channel</li>
                <li className="logout" onClick={ props.allProps.logout }>Logout</li>
            </ul>
        </section>
    )
}
