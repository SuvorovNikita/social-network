import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

let posts = [
    {id: 1, message: 'Obito', likeCount: 10},
    {id: 2, message: 'Pain', likeCount: 20}
];

let dialogs = [
    {id: 1, name: 'Tobi'},
    {id: 2, name: 'Pain'},
    {id: 3, name: 'Conan'},
    {id: 4, name: 'Itachi'},
    {id: 5, name: 'Hidan'}
];

let messages = [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Хай'},
    {id: 3, message: 'Пока'},
];


ReactDOM.render(<App
        posts={posts}
        dialogs={dialogs}
        messages={messages}
    />,
    document.getElementById('root'));





