import React from "react";

import classes from "./Post.module.scss";

type PostDataType = {
    // id:number
    message: string
    likeCount: number
}

const Post = (props: PostDataType) => {
    return <div className={classes.item}>
        <img className={classes.avatar}
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPmeVA7-9PgEZEKzr2bK6y-2fcHFfUbP_liQ&usqp=CAU"
             alt=""/>
        {props.message}
        <div>Like {props.likeCount}</div>
    </div>
}

export default Post;