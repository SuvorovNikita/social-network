import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./../Dialogs.module.scss";

type DialogsDataType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogsDataType) => {
    let path = "dialogs/" + props.id;
    return <div className={classes.dialog}>
        <NavLink className={classes.link} to={path}>{props.name}</NavLink>
    </div>
}