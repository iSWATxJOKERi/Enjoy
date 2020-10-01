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
        const github = <FontAwesomeIcon icon={["fab", "github"]} />
        const linkedin = <FontAwesomeIcon icon={["fab", "linkedin"]} />
        const library = <FontAwesomeIcon icon="photo-video" />
        const history = <FontAwesomeIcon icon="history" />
        return (
            <section className="sidebar">
                <section className="sidebar-items">
                    <div onClick={ () => this.props.allProps.history.push("/") } className={ dir === "/" ? "item home-item red" : "item home-item" }>
                        { home }
                        <span>Home</span>
                    </div>
                    <div onClick={ () => window.location.href = "https://github.com/iSWATxJOKERi" } className="item trending-item">
                        { github }
                        <span>Github</span>
                    </div>
                    <div onClick= { () => window.location.href = "https://github.com/iSWATxJOKERi" }className="item subs-item">
                        { linkedin }
                        <span>LinkedIn</span>
                    </div>
                    <div onClick={ () => this.props.allProps.history.push(`/users/${ this.props.allProps.currentUser }`) } className={ dir === `/users/${ this.props.allProps.currentUser }` ? "red item library-item" : "item library-item" }>
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