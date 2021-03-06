import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainContentContainer from './main/main_content_container';
import UserShowContainer from './user/user_show_container';
import VideoUploadContainer from './main/video/video_upload_container';
import VideoShowContainer from './main/video/video_show_container';
import EENavBarContainer from './navbar/eenb_container';
import ShowPageContainer from './main/video/show_modal_container';
import VideoUpdateContainer from './user/update_container';
import DeleteContainer from './user/delete_container';
import UserStudioContainer from './user/user_studio_container';
import VideoSearchContainer from './main/video/video_search_container';
import vuc from './main/video/vuc';

const App = () => {
    return (
        <section className="application">
            <Switch>
                <Route exact path="/" component={ NavBarContainer } />
                <Route exact path="/users/:id" component={ NavBarContainer } />
                <Route exact path="/users/:id/videos/edit" component={ NavBarContainer } />
                <Route exact path="/search" component={ NavBarContainer } />
            </Switch>
            <Route exact path="/" component={ MainContentContainer } />
            <AuthRoute path="/login" component={ LoginFormContainer } />
            <AuthRoute path="/signup" component={ SignupFormContainer } />
            <Route exact path="/videos/:id" component={ ShowPageContainer } />
            <Route exact path="/videos/:id" component={ EENavBarContainer } />
            <Route exact path="/videos/:id" component={ VideoShowContainer } />
            <Route exact path="/users/:id" component={ UserShowContainer } />
            <ProtectedRoute exact path="/users/:id/videos/edit" component={ UserStudioContainer } />
            <Route exact path="/videos/:id/edit" component={ VideoUpdateContainer } />
            <Route exact path="/videos/:id/delete"component={ DeleteContainer } />
            <Route exact path="/search" component={ VideoSearchContainer } />
            <Switch>
                <Route exact path="/" component={ VideoUploadContainer } />
                <Route exact path="/users/:id" component={ VideoUploadContainer } />
                <Route exact path="/users/:id/videos/edit" component={ VideoUploadContainer } />
                <Route exact path="/search" component={ VideoUploadContainer } />
            </Switch>
            <Route exact path="/videos/:id" component={ vuc } />
        </section>
    )
}

export default App;