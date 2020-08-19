import React from 'react';

import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

import classes from './App.module.scss';

const App = () => {
    return (
        <div className={classes.appWrapper}>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
