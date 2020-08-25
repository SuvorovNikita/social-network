import React from 'react';

import Nav from "./components/Nav/Nav";


import classes from './App.module.scss';
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";

import {BrowserRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';


const App = () => {
    return (
        <BrowserRouter>
            <div className={classes.appWrapper}>
                <Header/>
                <Nav/>
                <div className={classes.appWrapperContent}>
                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
