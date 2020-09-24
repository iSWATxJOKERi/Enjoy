import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import MainContent from './main/main_content';
import VideoUpload from './main/video/video_upload_form';

const App = () => {
    return (
        <section className="application">
            <VideoUpload />
            <Route exact path="/" component={ NavBarContainer } />
            <Route exact path="/" component={ MainContent } />
            <AuthRoute path="/login" component={ LoginFormContainer } />
            <AuthRoute path="/signup" component={ SignupFormContainer } />
        </section>
    )
}

export default App;