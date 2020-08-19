import React from "react";

import classes from "./Profile.module.scss";


const Profile = () => {
    return <div className={classes.content}>
        <div><img src="https://pm1.narvii.com/6911/d76ea35645ae06a9fe61855ed6bfa59ee5d07b45r4-736-368_00.jpg" alt=""/></div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>New posts</div>
            <div className={classes.posts}>
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>Post 2</div>
            </div>
        </div>
    </div>
}

export default Profile;