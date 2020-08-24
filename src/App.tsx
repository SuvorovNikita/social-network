import React from 'react';

import Nav from "./components/Nav/Nav";


import classes from './App.module.scss';
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
    return (
        <div className={classes.appWrapper}>
            <Header/>
            <Nav/>
            <div className={classes.appWrapperContent}>
                <Dialogs/>
            </div>
            {/*<Profile/>*/}
        </div>
    );
}

export default App;
