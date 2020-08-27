import React from 'react';

import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';

import {Route} from 'react-router-dom';
import {StateType} from "./Redux/state";

import classes from './App.module.scss';

type PropsType = {
    state: StateType
    addPost: (postMessage: any) => void
}

const App = (props: PropsType) => {
    return (
        <div className={classes.appWrapper}>
            <Header/>
            <Nav/>
            <div className={classes.appWrapperContent}>
                <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                              messages={props.state.dialogsPage.messages}/>}/>
                <Route path="/profile" render={() => <Profile
                                                                posts={props.state.profilePage.posts}
                                                                addPost={props.addPost}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
