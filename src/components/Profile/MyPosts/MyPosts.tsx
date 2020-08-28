import React from "react";
import Post from "./Post/Post";

import classes from "./MyPosts.module.scss";
import {PostsType} from "../../../Redux/state";


type PropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: any) => void
}


const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current && newPostElement.current.value;
        props.addPost(text)
        // @ts-ignore
        newPostElement.current.value = '';
    }

    return <div>
        <h3 className={classes.newPost}>New posts</h3>
        <div className={classes.wrapperText}>
            <textarea ref={newPostElement}></textarea>
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