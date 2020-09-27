import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../font_awesome';

export default (props) => {
    const home = <FontAwesomeIcon id="smaller" icon="home" />
    const trending = <FontAwesomeIcon id="smaller" icon="fire" />
    const subscriptions = <FontAwesomeIcon id="smaller" icon="users" />
    const library = <FontAwesomeIcon id="smaller" icon="photo-video" />
    const history = <FontAwesomeIcon icon="history" />
    const bar = <FontAwesomeIcon id="show-close" icon="bars" />


    return (
        <section className="show-modal">
            <section className="show-modal-content">
                <section className="pop2">
                    <section className="logo-bar">
                        <div id="left">{ bar }</div>
                        <div id="right"><img onClick={ () => this.props.history.push("/") } className="logo" src={ window.logo } /></div>
                    </section>
                    <section className="first-sidebar">
                        <div className="li home-sb">
                            <div id="fifty">{ home }</div>
                            <span>Home</span>
                        </div>
                        <div className="li trending-sb">
                            <div id="fifty">{ trending }</div>
                            <span>Trending</span>
                        </div>
                        <div className="li subscriptions-sb">
                            <div id="fifty">{ subscriptions }</div>
                            <span>Subscriptions</span>
                        </div>
                    </section>
                    <section className="second-sidebar">
                        <div className="li library-sb">
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