import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import MainContentContainer from './main/main_content_container';
import UserShowContainer from './user/user_show_container';
import VideoUploadContainer from './main/video/video_upload_container';
import VideoShowContainer from './main/video/video_show_container';
import EENavBarContainer from './navbar/eenb_container';
import ShowPageModal from './main/video/show_page_modal';


const App = () => {
    return (
        <section className="application">
            <Switch>
                <Route exact path="/" component={ VideoUploadContainer } />
                <Route exact path="/videos/:id" component={ VideoUploadContainer } />
            </Switch>
            <Switch>
                <Route exact path="/" component={ NavBarContainer } />
                <Route exact path="/users/:id" component={ NavBarContainer } />
            </Switch>
            <Route exact path="/" component={ MainContentContainer } />
            <AuthRoute path="/login" component={ LoginFormContainer } />
            <AuthRoute path="/signup" component={ SignupFormContainer } />
            <Route exact path="/videos/:id" component={ ShowPageModal } />
            <Route exact path="/videos/:id" component={ EENavBarContainer } />
            <Route exact path="/videos/:id" component={ VideoShowContainer } />
            <Route exact path="/users/:id" component={ UserShowContainer } />
        </section>
    )
}

export default App;