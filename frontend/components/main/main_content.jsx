import React from 'react';
import SideBar from './sidebar/sidebar_content';

class MainContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="main-content">
                <SideBar />
                <section className="video-section">

                </section>
            </section>
        )
    }
}

export default MainContent;