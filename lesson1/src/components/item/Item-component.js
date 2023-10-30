import React from 'react';
import '../../App.css';
const Item = (props)=>{
    console.log(props)
    return(
        <div className='itemCard'>
            <div className='idName'>
            <h4>{props.charId.id}</h4>
            <h1>{props.charId.name}</h1>
            </div>
            <div className='moreInfo'>
            <p>status: {props.charId.status}</p>
            <p>species: {props.charId.species}</p>
            <p>gender: {props.charId.gender}</p>
            </div>
            
            <img src={`${props.charId.image}`}></img>
        </div>
        
    )
}
export default Item;