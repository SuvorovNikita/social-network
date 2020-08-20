import React from "react";


import classes from "./Post.module.scss";


const Post = () => {
    return <div className={classes.item}>
        <img className={classes.avatar}
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPmeVA7-9PgEZEKzr2bK6y-2fcHFfUbP_liQ&usqp=CAU"
             alt=""/>
        Post 1
        <div>Like</div>
    </div>
}

export default Post;