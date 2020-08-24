import React from "react";
import Post from "./Post/Post";

import classes from "./MyPosts.module.scss";



const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Obito', likeCount: 10},
        {id: 2, message: 'Pain', likeCount: 20}
    ];

    return <div>
        <h3 className={classes.newPost}>New posts</h3>
        <div className={classes.wrapperText}>
            <textarea>Что то написано</textarea>
        </div>
        <div className={classes.wrapperBtn}>
            <button>Add Post</button>
        </div>
        <div className={classes.posts}>
            <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
            <Post message={postData[1].message} likeCount={postData[1].likeCount}/>
        </div>
    </div>
}

export default MyPosts;