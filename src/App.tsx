import React from 'react';

import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';

import {Route} from 'react-router-dom';
import store, {StateType, updateNewPostTextActionCreator} from "./Redux/state";

import classes from './App.module.scss';

type PropsType = {
    state: StateType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch:(action:any)=>void
    // updateNewPostTextActionCreator : (text:any)=>void
    store:any
}

const App = (props: PropsType) => {
    return (
        <div className={classes.appWrapper}>
            <Header/>
            <Nav/>
            <div className={classes.appWrapperContent}>
                <Route path="/dialogs" render={() => <Dialogs store={props.store}
                                                              messages={props.state.dialogsPage.messages}/>}/>
                <Route path="/profile" render={() => <Profile
                                                              newPostText={props.state.profilePage.newPostText}
                                                              posts={props.state.profilePage.posts}
                                                              dispatch={props.dispatch}/>}
                />
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
