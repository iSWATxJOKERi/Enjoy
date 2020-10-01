import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        // debugger
        const dir = this.props.allProps.location.pathname
        const home = <FontAwesomeIcon id={ dir === "/" ? "red" : "regular "} icon="home" />
        const trending = <FontAwesomeIcon icon="fire" />
        const subscriptions = <FontAwesomeIcon icon="users" />
        const library = <FontAwesomeIcon icon="photo-video" />
        const history = <FontAwesomeIcon icon="history" />
        return (
            <section className="sidebar">
                <section className="sidebar-items">
                    <div className={ dir === "/" ? "item home-item red" : "item home-item" }>
                        { home }
                        <span>Home</span>
                    </div>
                    <div className="item trending-item">
                        { trending }
                        <span>Trending</span>
                    </div>
                    <div className="item subs-item">
                        { subscriptions }
                        <span>Subscriptions</span>
                    </div>
                    <div className="item library-item">
                        { library }
                        <span>Library</span>
                    </div>
                    <div className="item history-item">
                        { history }
                        <span>History</span>
                    </div>
                </section>
            </section>
        )
    }
}

export default SideBar;