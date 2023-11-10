import React from "react";
import '../../../App.css';



const UserDetails  = (props) => {
    
    const {user} = props;
    
    return (
       <>
        <div className="details">
        <p>id: {user.id}</p>
        <h3>name: {user.name}</h3>
        <h3>username: {user.username}</h3>
        <h3>email: {user.email}</h3>
        <h3>phone: {user.phone}</h3>
        <h3>website: {user.website}</h3>
        </div>
       </>
    )
}

export default UserDetails ;