import React from "react";

import {NavLink} from "react-router-dom";

import classes from "./Dialogs.module.scss";

type messagesDataType = {
    // id:number
    message: string
}

type DialogsDataType = {
    id: number
    name: string
}

const Dialog = (props: DialogsDataType) => {
    let path = "dialogs/" + props.id;
    return <div className={classes.dialog}>
        <NavLink className={classes.link} to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: messagesDataType) => {
    return <div className={classes.message}>{props.message}</div>
}

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

    let dialogsElements = dialogs.map(d => <Dialog name={d.name} id={d.id}/>);

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