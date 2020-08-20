import React from 'react';

import Nav from "./components/Nav/Nav";


import classes from './App.module.scss';
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";


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
