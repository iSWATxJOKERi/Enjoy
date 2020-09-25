import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './util/session_api_util';
import { createVideo, fetchVideo } from './util/video_api_util';
import { fetchVideos, receiveVideos } from './actions/video_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if(window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    window.createVideo = createVideo;
    window.fetchVideos = fetchVideos;
    window.fetchVideo = fetchVideo;
    window.receiveVideos = receiveVideos;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store } />, root)
})