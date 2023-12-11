import React from "react";
import '../App.css';

const AlbumsComponent = (props) =>{
    return (
        <div className="card">
            <h3 className="cardName">{props.album.title}</h3>
            <h3 className="cardName">{props.album.id}</h3>
        </div>
    )
}
export default AlbumsComponent;