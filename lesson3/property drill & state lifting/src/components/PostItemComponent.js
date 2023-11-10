import React, { useEffect, useState } from "react";
import '../App.css';



const PostsItemComponent = (props) => {
    return (
        <div className="user-posts">
            <p className="username">Author:{props.username}</p>
            <h3 className="title">title:{props.post.title}</h3>
            <p className="body">{props.post.body}</p>
        </div>
    )
}

export default PostsItemComponent;