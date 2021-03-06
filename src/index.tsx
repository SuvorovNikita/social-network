import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store, {StateType} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import Profile from "./components/Profile/Profile";


let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);









