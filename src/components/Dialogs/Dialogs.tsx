import React from "react";

import classes from "./Dialogs.module.scss";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


const Dialogs = () => {

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

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

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