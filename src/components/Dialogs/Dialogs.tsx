import React, {ChangeEvent} from "react";


import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogsPageType,
    MessagesType,
} from "../../Redux/state";

import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../Redux/dialogs-reducer";

import classes from "./Dialogs.module.scss";


type PropsType = {
    messages: Array<MessagesType>
    dialogsPage: DialogsPageType
    store: any
    dispatch: (action: any) => void
}

const Dialogs = (props: PropsType) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator)
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Введите сообщение'></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    </div>
}

export default Dialogs;