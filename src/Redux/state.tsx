import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



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
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


let store: any = {
    _state: {
        profilePage: {
            posts: [],
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
            ],
            newMessageBody: ""
        },
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this.rerenderEntireTree = observer;
    },
    _callSubscriber() {
        console.log('state')
    },

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
        this.rerenderEntireTree(this._state)
    }
}




export default store;

