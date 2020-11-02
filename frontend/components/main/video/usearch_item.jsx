import React from 'react';

class USearchItem extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <section className="search-item">
                <img id="search-user-image" onClick={ () => this.props.history.push(`/users/${ this.props.user.id }`) } src={ `${ this.props.user.avatar }` } />
                <div id="search-words">
                    <h1 onClick={ () => this.props.history.push(`/users/${ this.props.user.id }`) }>{ this.props.user.username }</h1>
                </div>
            </section>
        )
    }
}

export default USearchItem;