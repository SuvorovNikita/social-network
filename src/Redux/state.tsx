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

let store: any = {

    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Obito', likeCount: 10},
                {id: 2, message: 'Pain', likeCount: 20}
            ],
            newPostText: ""
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
        },

    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {

    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 12
            };

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            rerenderEntireTree(this._state);
        }
    }
}

export default store;

