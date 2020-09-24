import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../font_awesome';
import SideBar from './sidebar/sidebar_content';
import PopoutSidebar from './popout_sidebar';


class MainContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pop: false
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        const cs = this.state.pop
        this.setState({
            pop: !cs
        })
    }

    render() {
        const bar = <FontAwesomeIcon id="side" onClick={ this.toggleSidebar } icon="bars" />
        const popout = <PopoutSidebar allProps={ this.props } state={ this.state } toggle={ this.toggleSidebar } />
        return (
            <section className="main-content">
                { bar }
                { this.state.pop ? popout : <SideBar /> }
                <section className="video-section">

                </section>
            </section>
        )
    }
}

export default MainContent;