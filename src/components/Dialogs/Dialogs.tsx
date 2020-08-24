import React from "react";

import classes from "./Dialogs.module.scss";

const Dialogs = () => {
    return <div className={classes.dialogs}>

        <div className={classes.dialogsItem}>
            <div className={classes.dialog + ' ' + classes.active}>
                Tobi
            </div>
            <div className={classes.dialog}>
                Pain
            </div>
            <div className={classes.dialog}>
                Conan
            </div>
            <div className={classes.dialog}>
                Itachi
            </div>
            <div className={classes.dialog}>
                Hidan
            </div>
        </div>

        <div className={classes.messages}>
            <div className={classes.message}>Hi</div>
            <div className={classes.message}>asdasd</div>
            <div className={classes.message}>gdsggfsdg</div>
        </div>

    </div>
}

export default Dialogs;