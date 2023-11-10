
import './App.css';
import React, { useEffect, useState } from 'react';

import UsersComponent from './components/UsersComponent.js';
import PostsItemComponent from './components/PostItemComponent.js';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser,setUserName] = useState([]);
  const clickShow = () => {
    console.log('done');
  }

  useEffect(() => {
    getUsers();

  }, [])

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }

  const showPosts = (id,username) => {
    console.log(id,username)
    const posts = fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.filter(post => post.userId === id)));
    setUserName(username);
  }
  return (
    <div className='wrapper'>
      <div className='users'>
        <UsersComponent users={users} showPosts={showPosts} />
      </div>
      <div className='posts'>
        {posts.map(post => <PostsItemComponent key={post.id} post={post} username={currentUser}/>)}

      </div>
    </div>
  )
}

export default App;
