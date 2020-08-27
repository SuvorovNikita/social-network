import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import classes from "./Profile.module.scss";
import {PostsType} from "../../Redux/state";


type PropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: any) => void
}

const Profile = (props: PropsType) => {
    return <div className={classes.bg}>
        <ProfileInfo/>
        <MyPosts posts={props.posts} addPost={props.addPost}/>
    </div>
}

export default Profile;