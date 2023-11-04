import React, { useEffect, useState } from "react";
import '../App.css';



const PostsItemComponent = (props) => {
    const [showBody, setShowBody] = useState(false);
    return (
        <div className="user-card">
            <p className="id">id:{props.post.id}</p>
            <h3 className="title">title:{props.post.title}</h3>
            <button className="show-body" onClick={() => {
                showBody ? setShowBody(false) : setShowBody(true)
            }}>Show more</button>
            {showBody && <p className="body">{props.post.body}</p>}
        </div>
    )
}

export default PostsItemComponent;