import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import classes from "./Profile.module.scss";


const Profile = () => {
    return <div className={classes.bg}>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}

export default Profile;