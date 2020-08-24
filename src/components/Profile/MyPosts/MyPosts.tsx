import React from "react";
import Post from "./Post/Post";

import classes from "./MyPosts.module.scss";


const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Obito', likeCount: 10},
        {id: 2, message: 'Pain', likeCount: 20}
    ];
    let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    return <div>
        <h3 className={classes.newPost}>New posts</h3>
        <div className={classes.wrapperText}>
            <textarea>Что то написано</textarea>
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