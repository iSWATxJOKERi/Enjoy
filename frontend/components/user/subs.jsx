import React from 'react';
import UserSub2 from './subs2';

class SubsList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        // debugger
        let whoopty = this.props.channel ? <>
                        { this.props.channel.avatar ? 
                            <img className="user-avatar" src={ `${ this.props.channel.avatar }` } onClick={ () => this.props.allProps.history.push(`/users/${ this.props.channel.id }`) } /> : 
                            <span id="avatar2">{ this.props.channel.username[0] }</span> }
                            <span id="sub-name">{ this.props.channel.username }</span>
                            { this.props.allProps.currentUser ? 
                            <UserSub2 id="user-sub" channel={ this.props.channel.id } user={ this.props.allProps.currentUser } allProps={ this.props.allProps }/> :
                            "" }
                        </> : "" 
        return (
            <section className="list-of-subs">
                { whoopty }
            </section>
        )
    }
}

export default SubsList;