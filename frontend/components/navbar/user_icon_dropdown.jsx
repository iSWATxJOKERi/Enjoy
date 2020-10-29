import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../font_awesome';

export default class UserIconDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.allProps.user.avatar ? 
        <img id="user-pic3" src={ `${ this.props.allProps.user.avatar }` } onClick={ () => this.props.allProps.history.push(`/users/${ this.props.allProps.currentUser }`) } /> : 
        <span id="user2">{ this.props.allProps.user.username[0] }</span>
        return (
            <section className={ this.props.state.online ? "drop profile-dropdown" : "hide"}>
                <div className="top">
                    { user }
                    <div className="manage">
                        <h2 onClick={ () => this.props.allProps.history.push(`/users/${ this.props.allProps.currentUser }`)}>{ this.props.allProps.user.username }</h2>
                        <Link to={`/users/${ this.props.allProps.currentUser }` }>Manage your account</Link>
                    </div>
                </div>
                <ul className="middle">
                    <li id="li-1" onClick={ () => this.props.allProps.history.push(`/users/${ this.props.allProps.currentUser }`)}>Your Channel</li>
                    <li className="logout" onClick={ this.props.allProps.logout }>Logout</li>
                </ul>
            </section>
        )
    }
}
