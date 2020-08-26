import React from 'react';

import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';

import {BrowserRouter, Route} from 'react-router-dom';

import classes from './App.module.scss';
import {StateType} from "./Redux/state";

type PropsType = {
    state: StateType
}


const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className={classes.appWrapper}>
                <Header/>
                <Nav/>
                <div className={classes.appWrapperContent}>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  messages={props.state.dialogsPage.messages}/>}/>
                    <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
