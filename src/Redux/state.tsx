import {rerenderEntireTree} from "../Render";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


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
                {id: 2, message: 'Pain', likeCount: 20},
                {id: 2, message: 'Pain', likeCount: 20},
                {id: 2, message: 'Pain', likeCount: 20},
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

    dispatch(action: any) {
        if (action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 12
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            rerenderEntireTree(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text: any) => ({  type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;

