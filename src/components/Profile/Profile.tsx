import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import classes from "./Profile.module.scss";
import {PostsType} from "../../index";

type PropsType = {
    posts: Array<PostsType>
}

const Profile = (props: PropsType) => {
    return <div className={classes.bg}>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>
}

export default Profile;