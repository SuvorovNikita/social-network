import React from 'react';

import Header from './components/Header';
import Nav from "./components/Nav";
import Profile from "./components/Profile";

import './App.css';

const App = () => {
    return (
        <div className='appWrapper'>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
