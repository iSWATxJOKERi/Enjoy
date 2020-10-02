import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

export default (props) => {
    const home = <FontAwesomeIcon id="smaller" icon="home" />
    const github = <FontAwesomeIcon id="smaller" icon={["fab", "github"]} />
    const linkedin = <FontAwesomeIcon id="smaller" icon={["fab", "linkedin"]} />
    const library = <FontAwesomeIcon id="smaller" icon="photo-video" />
    const history = <FontAwesomeIcon icon="history" />
    const bar = <FontAwesomeIcon id="show-close" icon="bars" />
    const dir = props.location.pathname

    return (
        <section className="show-modal">
            <section className="show-modal-content">
                <section className="pop2">
                    <section className="logo-bar">
                        <div id="left">{ bar }</div>
                        <div id="right"><img onClick={ () => this.props.history.push("/") } className="logo" src={ window.logo } /></div>
                    </section>
                    <section className="first-sidebar">
                        <div onClick={ () => props.history.push("/") } className={ dir === "/" ? "li home-sb effect" : "li home-sb" }>
                            <div id="fifty">{ home }</div>
                            <span>Home</span>
                        </div>
                        <div onClick={ () => window.location.href = "https://github.com/iSWATxJOKERi" } className="li trending-sb">
                            <div id="fifty">{ github }</div>
                            <span>Github</span>
                        </div>
                        <div onClick={ () => window.location.href = "https://www.linkedin.com/in/lawrence-menyah-448597117/" } className="li subscriptions-sb">
                            <div id="fifty">{ linkedin }</div>
                            <span>LinkedIn</span>
                        </div>
                    </section>
                    <section className="second-sidebar">
                        <div onClick={ () => props.history.push(`/users/${ props.currentUser }`) } className={ dir === `/users/${ props.currentUser }` ? " effect li library-sb" : "li library-sb" }>
                            <div id="fifty">{ library }</div>
                            <span>Library</span>
                        </div>
                        <div className="li history-sb">
                            <div id="fifty">{ history }</div>
                            <span>History</span>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )

}