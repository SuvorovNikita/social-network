import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import classes from "./Profile.module.scss";
import {PostsType, updateNewPostTextActionCreator} from "../../Redux/state";


type PropsType = {
    posts: Array<PostsType>
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch:(action:any)=>void
    updateNewPostTextActionCreator : (text:any)=>void

}

const Profile = (props: PropsType) => {
    return <div className={classes.bg}>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 updateNewPostTextActionCreator={updateNewPostTextActionCreator}
                 newPostText={props.newPostText}
                 dispatch={props.dispatch}/>
    </div>
}

export default Profile;