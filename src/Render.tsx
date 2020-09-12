import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store, {StateType, updateNewPostTextActionCreator} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import Profile from "./components/Profile/Profile";


export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                updateNewPostTextActionCreator={updateNewPostTextActionCreator}
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}









