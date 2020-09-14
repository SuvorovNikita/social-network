const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 12
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber();
            this.rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
            this.rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber();
            this.rerenderEntireTree(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 5, message: body},)
            this._callSubscriber();
            this.rerenderEntireTree(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: any) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: any) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;

