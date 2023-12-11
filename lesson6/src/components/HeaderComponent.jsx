import React, { useEffect, useState } from "react";
import '../App.css';

import CardComponent from "./CardComponent";
import TodosComponent from "./TodosComponent";
import AlbumsComponent from "./AlbumsComponent";
import axios from "axios"

const HeaderComponent = () => {
    const [comments, setComments] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [todos, setTodos] = useState([]);
    const [post, setPost] = useState([]);
    const [id,setId] = useState(0);
    
    const setCurPost = (id) =>{
        setId(id);
        
    }
    useEffect(()=>{
        getPost()
    },[id])

    const getPost = () =>{
        if(id){
            axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(function (response) {
                console.log(response.data)
                setPost(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        
    }
    const getTodos = () => {
        setComments([]);
        setAlbums([]);
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                console.log(response.data)
                setTodos(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const getAlbums = () => {
        setTodos([]);
        setComments([]);
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(function (response) {
                console.log(response.data)
                setAlbums(response.data)

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const getComments = () => {
         setAlbums([]);
         setTodos([]);
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(function (response) {
                console.log(response.data)
                setComments(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="main">
            <div className="navbar">
                <button className="btn" onClick={getTodos}>todos</button>
                <button className="btn" onClick={getAlbums}>albums</button>
                <button className="btn" onClick={getComments}>comments</button>
            </div>
            <div className="currentPost">
                <h4>{post.userId}</h4>
                <p>{post.title}</p>
                
            </div>
            <div className="list">
                {comments.map(comment => <CardComponent key={comment.id} comment={comment} setCurPost={setCurPost}/>)}
            </div>
            <div className="list">
                {todos.map(todo => <TodosComponent key={todo.id} todo={todo}/>)}
            </div>
            <div className="list">
                {albums.map(album => <AlbumsComponent key={album.id} album={album}/>)}
            </div>
        </div>
    )
}
export default HeaderComponent;