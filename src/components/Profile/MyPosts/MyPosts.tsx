import React from "react";
import Post from "./Post/Post";

import classes from "./MyPosts.module.scss";


const MyPosts = () => {
    return <div>
        <h3 className={classes.newPost}>New posts</h3>
        <div className={classes.wrapperText}>
            <textarea></textarea>
        </div>
        <div className={classes.wrapperBtn}>
            <button>Add Post</button>
        </div>
        <div className={classes.posts}>
            <Post message="Obito" likeCount={15}/>
            <Post message="Pain" likeCount={20}/>
            <Post message="Pain" likeCount={20}/>
        </div>
    </div>
}

export default MyPosts;