import React from 'react';
import PopoutSidebar from '../popout_sidebar';
import SideBar from '../sidebar/sidebar_content';
import USearchItem from './usearch_item';
import SearchItem from './vsearch_item';

class VideoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSide = this.toggleSide.bind(this);
    }

    componentDidMount() {
        this.toggleSide();
    }

    toggleSide() {
        const popbar = document.getElementsByClassName("pop")[0];
        const button = document.getElementById("side-bar-pop");
        const user = document.getElementsByClassName("search-main")[0];
        const sidebar = document.getElementsByClassName("sidebar")[0];

        button.addEventListener('click', function() {
            if(popbar.style.display == "flex" || popbar.style.display == "block") {
                popbar.style.display = "none";
                user.style.marginLeft = "4.02%";
                sidebar.style.display = "flex";
            } else {
                sidebar.style.display = "none";
                popbar.style.display = "block";
                user.style.marginLeft = "12.6%";
            }
        })
    }

    render() {
        let videos;
        let users;
        videos = Object.values(this.props.videos).map(vid => {
            return <SearchItem key={ vid.id } history={ this.props.history } vid={ vid } />
        })
        users = Object.values(this.props.users).map(user => {
            return <USearchItem key={ user.username } history={ this.props.history } user={ user } />
        })
        return (
            <section className="search-content">
                <PopoutSidebar allProps={ this.props }/>
                <SideBar allProps={ this.props }/>
                <section className="search-main">
                    <div className="search-header"><h1>Search Results</h1></div>
                    <div className="search-videos">
                        { videos.length > 0 ? videos : <span>No videos found matching that criteria</span> }
                        { users.length > 0 ? users : <span>No users found matching that criteria</span> }
                    </div>
                </section> 
            </section>
        )
    }
}

export default VideoSearch;