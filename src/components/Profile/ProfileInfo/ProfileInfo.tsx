import React from "react";

import classes from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
    return <div>
        <img className={classes.bgImage}
             src="https://pm1.narvii.com/6911/d76ea35645ae06a9fe61855ed6bfa59ee5d07b45r4-736-368_00.jpg" alt=""/>
        <div className={classes.discriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;