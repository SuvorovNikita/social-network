import React from 'react';
import './App.css';

function App() {
    return (
        <div className='appWrapper'>
            <header className='header'>
                <img src="https://images6.alphacoders.com/896/896154.png" alt=""/>
            </header>
            <nav className='nav'>
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">New</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className='content'>
                <div><img src="https://pm1.narvii.com/6911/d76ea35645ae06a9fe61855ed6bfa59ee5d07b45r4-736-368_00.jpg" alt=""/></div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>New posts</div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
