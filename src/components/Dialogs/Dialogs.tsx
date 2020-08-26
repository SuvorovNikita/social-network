import React from "react";

import classes from "./Dialogs.module.scss";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../Redux/state";


type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            {messagesElements}
        </div>
    </div>
}

export default Dialogs;