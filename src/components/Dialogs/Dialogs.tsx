import React from "react";

import {NavLink} from "react-router-dom";

import classes from "./Dialogs.module.scss";

type DialogType = {
    name: string
    id: string
}

type MessageType = {
    message: string
}

const Dialog = (props: DialogType) => {
    let path = "dialogs/" + props.id;
    return <div className={classes.dialog}>
        <NavLink className={classes.link} to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessageType) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = () => {
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
            <Dialog name='Tobi' id='1'/>
            <Dialog name='Pain' id='2'/>
            <Dialog name='Conan' id='3'/>
            <Dialog name='Itachi' id='4'/>
            <Dialog name='Hidan' id='5'/>
        </div>
        <div className={classes.messages}>
            <Message message="Hi"/>
            <Message message="asdasdasdas"/>
            <Message message="gdsggfsdg"/>
        </div>
    </div>
}

export default Dialogs;