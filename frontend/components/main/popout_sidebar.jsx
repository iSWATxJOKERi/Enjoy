import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../font_awesome';
import SubsList2 from './sublist';

export default (props) => {
    let subs;
    const dir = props.allProps.location.pathname
    const home = <FontAwesomeIcon className={ dir === "/" ? "red" : "nada" } id="smaller" icon="home" />
    const github = <FontAwesomeIcon id="smaller" icon={["fab", "github"]} />
    const linkedin = <FontAwesomeIcon id="smaller" icon={["fab", "linkedin"]} />
    const library = <FontAwesomeIcon className={ dir === `/users/${ props.allProps.currentUser }` ? "red" : "nada" } id="smaller" icon="photo-video" />
    if(Object.values(props.allProps.users).length > 1 && props.allProps.currentUser) {
        // debugger
        subs = props.allProps.users[props.allProps.currentUser].subscriptions.map(subscription => {
            return <SubsList2 key={ subscription.id } sub={ subscription } allProps={ props.allProps }/>
        })
    }
    
    return (
        <section className="pop">
            <section className="first-sidebar">
                <div onClick={ () => props.allProps.history.push("/") } className={ dir === "/" ? "li home-sb effect" : "li home-sb" }>
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
                <div onClick={ () => props.allProps.currentUser ? props.allProps.history.push(`/users/${ props.allProps.currentUser }`) : props.allProps.history.push(`/login`) } className={ dir === `/users/${ props.allProps.currentUser }` ? " effect li library-sb" : "li library-sb" }>
                    <div id="fifty">{ library }</div>
                    <span>Library</span>
                </div>
            </section>
            <section className="third-sidebar">
                <div id="fad">
                    <span id="spli">SUBSCRIPTIONS</span>
                    { subs ? subs.slice(0,5) : "" }
                </div>
            </section>
        </section>
    )
}