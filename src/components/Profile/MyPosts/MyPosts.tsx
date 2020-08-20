import React from "react";
import Post from "./Post/Post";

import classes from "./MyPosts.module.scss";




const MyPosts = () => {
    return <div>
        <textarea></textarea>
        <button>Add Post</button>
        <div>New posts</div>
        <div className={classes.posts}>
            <Post message="Obito" likeCount={15}/>
            <Post message="Pain" likeCount={20}/>
            <Post message="Pain" likeCount={20}/>
        </div>
    </div>
}

export default MyPosts;