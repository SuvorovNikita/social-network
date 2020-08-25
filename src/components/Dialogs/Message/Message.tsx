import React from "react";

import classes from './../Dialogs.module.scss';

type messagesDataType = {
    // id:number
    message: string
}

export const Message = (props: messagesDataType) => {
    return <div className={classes.message}>{props.message}</div>
}