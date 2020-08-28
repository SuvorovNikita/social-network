import {rerenderEntireTree} from "../Render";

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

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: StateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'Obito', likeCount: 10},
            {id: 2, message: 'Pain', likeCount: 20}
        ],
        newPostText: "Value1"
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Tobi'},
            {id: 2, name: 'Pain'},
            {id: 3, name: 'Conan'},
            {id: 4, name: 'Itachi'},
            {id: 5, name: 'Hidan'}
        ],
        messages: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Хай'},
            {id: 3, message: 'Пока'},
        ]
    }

}

export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 12
    };

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText: any) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;

