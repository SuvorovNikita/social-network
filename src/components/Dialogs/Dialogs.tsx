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

    let dialogsData = [
        {id: 1, name: 'Tobi'},
        {id: 2, name: 'Pain'},
        {id: 3, name: 'Conan'},
        {id: 4, name: 'Itachi'},
        {id: 5, name: 'Hidan'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'sdfadf'},
        {id: 3, message: 'afadf'},

    ];

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
            <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
            <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
            <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
            <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
            <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
        </div>
        <div className={classes.messages}>
            <Message message={messagesData[0].message}/>
            <Message message={messagesData[1].message}/>
            <Message message={messagesData[2].message}/>
        </div>
    </div>
}

export default Dialogs;