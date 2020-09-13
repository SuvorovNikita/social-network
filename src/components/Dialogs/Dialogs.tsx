import React, {ChangeEvent} from "react";


import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType, sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/state";

import classes from "./Dialogs.module.scss";


type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    store:any

}
const Dialogs = (props: PropsType) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator)
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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