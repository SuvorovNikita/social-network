import React from "react";
import Post from "./Post/Post";

import classes from "./MyPosts.module.scss";
import {PostsType} from "../../../Redux/state";


type PropsType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (newText: any) => void
    newPostText: any
}


const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onPostChange = () => {
        let text = newPostElement.current && newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let addPost = () => {
        props.addPost()
    }

    return <div>
        <h3 className={classes.newPost}>New posts</h3>
        <div className={classes.wrapperText}>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
        </div>
        <div className={classes.wrapperBtn}>
            <button onClick={addPost}>Add Post</button>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;