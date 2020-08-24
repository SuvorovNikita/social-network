import React from "react";

import MyPosts from "./MyPosts/MyPosts";

import classes from "./Profile.module.scss";


const Profile = () => {
    return <div>
        <div><img className={classes.bgImage}
                  src="https://pm1.narvii.com/6911/d76ea35645ae06a9fe61855ed6bfa59ee5d07b45r4-736-368_00.jpg" alt=""/></div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;