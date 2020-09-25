import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import MainContentContainer from './main/main_content_container';
import VideoModal from './main/video/video_modal';

const App = () => {
    return (
        <section className="application">
            <VideoModal />
            <Route exact path="/" component={ NavBarContainer } />
            <Route exact path="/" component={ MainContentContainer } />
            <AuthRoute path="/login" component={ LoginFormContainer } />
            <AuthRoute path="/signup" component={ SignupFormContainer } />
        </section>
    )
}

export default App;