import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import classes from "./Profile.module.scss";
import {PostsType} from "../../Redux/state";


type PropsType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (newText: any) => void
    newPostText: any
}

const Profile = (props: PropsType) => {
    return <div className={classes.bg}>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 updateNewPostText={props.updateNewPostText}
                 newPostText={props.newPostText}
                 addPost={props.addPost}/>
    </div>
}

export default Profile;