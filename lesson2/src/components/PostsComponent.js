import React, { useEffect, useState } from "react";

import '../App.css';
import PostsItemComponent from "./PostItemComponent.js";
import CapsulesComponent from "./CapsulesComponent.js";

const PostsComponent = () => {

    const [posts, setPosts] = useState([]);
    const [capsules, setCaps] = useState([]);

    useEffect(() => {
        getPosts();
        getCaps();
    }, []);

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(responce => responce.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
    }
    const getCaps = () => {
        fetch('https://api.spacexdata.com/v3/capsules/')
            .then(responce => responce.json())
            .then(data => {
                let active = [];
                data.forEach(item => {
                    if (item.status === 'active'){
                        active.push(item);
                    }
                })
                console.log(active)
                setCaps(active);
            })
    }

    return (
       <>
        <div className="posts">
            {posts.map(post => <PostsItemComponent key={post.id} post={post}/>)}
        </div>
        <div className="posts">
            {capsules.map(cap => <CapsulesComponent key={cap.capsule_serial} cap={cap}/>)}
        </div>
       </>
        


    )
}

export default PostsComponent;