import React from "react";
import TodosComponent from "./TodosComponent";
import AlbumsComponent from "./AlbumsComponent";
import CardComponent from "./CardComponent";
import axios from "axios"
class ClassHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            albums: [],
            posts: []
        }
    }


    getPosts = () => {
        this.setState({comments:[]});
        this.setState({albums:[]});
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response.data)
                this.setState({ posts: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getComments = () => {
        this.setState({albums:[]});
        this.setState({posts:[]});
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response)=>{
                console.log(response.data)
                this.setState({ comments: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getAlbums = () => {
        this.setState({comments:[]});
        this.setState({posts:[]});
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((response)=>{
                console.log(response.data)
                this.setState({ albums: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    render() {
        return (
            <div className="main">
                <div className="navbar">
                    <button className="btn" onClick={this.getPosts}>posts</button>
                    <button className="btn" onClick={this.getAlbums}>albums</button>
                    <button className="btn" onClick={this.getComments}>comments</button>
                </div>
                <div className="list">
                    {this.state.comments.map(comment => <CardComponent key={comment.id} comment={comment} />)}
                </div>
                <div className="list">
                    {this.state.posts.map(post => <TodosComponent key={post.id} post={post} />)}

                </div>
                <div className="list">
                    {this.state.albums.map(album => <AlbumsComponent key={album.id} album={album} />)}
                </div>
            </div>
        )
    }
}

export default ClassHeader