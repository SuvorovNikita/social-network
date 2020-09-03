import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store, {StateType} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
               />
        </BrowserRouter>,
        document.getElementById('root'));
}









