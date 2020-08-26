import React from "react";

import classes from "./Dialogs.module.scss";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StateType} from "../../Redux/state";


type PropsType = {
    state: StateType
}
const Dialogs = (props: PropsType) => {

    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.dialogsPage.messages.map(m => <Message message={m.message}/>);

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