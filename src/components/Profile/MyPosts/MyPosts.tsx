import React from "react";
import Post from "./Post/Post";

import classes from "./MyPosts.module.scss";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../Redux/state";


type PropsType = {
    posts: Array<PostsType>
    // addPost: () => void
    // updateNewPostText: (newText: any) => void
    newPostText: any
    dispatch: (action: any) => void
    // updateNewPostTextActionCreator: (text: any) => void
}


const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id}
                                                   message={p.message}
                                                   likeCount={p.likeCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onPostChange = () => {
        let text = newPostElement.current && newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator())
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