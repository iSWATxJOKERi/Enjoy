import React from 'react';

class SubsList2 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        // debugger
        let whoopty = this.props.sub ? <>
                        { this.props.allProps.users[this.props.sub.id].avatar ? 
                            <img className="ua3" src={ `${ this.props.allProps.users[this.props.sub.id].avatar }` } onClick={ () => this.props.allProps.history.push(`/users/${ this.props.sub.id }`) } /> : 
                            <span id="avatar-bar">{ this.props.sub.username[0] }</span> }
                            <span id="sub-name3">{ this.props.sub.username }</span>
                        </> : "" 
        return (
            <div onClick={ () => this.props.allProps.history.push(`/users/${ this.props.sub.id }`) } className="li2">
                { whoopty }
            </div>
        )
    }
}

export default SubsList2;