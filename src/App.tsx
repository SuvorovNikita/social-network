import React from 'react';

import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import MyPosts from "./components/Profile/MyPosts/MyPosts";

import classes from './App.module.scss';
import Profile from "./components/Profile/Profile";

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
