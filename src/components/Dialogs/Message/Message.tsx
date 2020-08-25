import React from "react";

import classes from './../Dialogs.module.scss';

type PropsType = {
    message: string
}

export const Message = (props: PropsType) => {
    return <div className={classes.message}>{props.message}</div>
}