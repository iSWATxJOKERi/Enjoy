import React from 'react';

class SubsList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="list-of-subs">
                { this.props.channel.avatar ? 
                <img className="user-avatar" src={ `${ this.props.channel.avatar }` } onClick={ () => this.props.allProps.history.push(`/users/${ this.props.channel.id }`) } /> : 
                <span id="avatar2">{ this.props.channel.username[0] }</span> }
                <span id="sub-name">{ this.props.channel.username }</span>
                
            </section>
        )
    }
}

export default SubsList;