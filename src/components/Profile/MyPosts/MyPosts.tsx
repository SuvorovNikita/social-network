import React from "react";
import Post from "./Post/Post";

import classes from "./MyPosts.module.scss";
import {PostsType} from "../../../Redux/state";


type PropsType = {
    posts: Array<PostsType>
}


const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    return <div>
        <h3 className={classes.newPost}>New posts</h3>
        <div className={classes.wrapperText}>
            <textarea>Введите сообщение</textarea>
        </div>
        <div className={classes.wrapperBtn}>
            <button>Add Post</button>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;