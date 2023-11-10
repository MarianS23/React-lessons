import React, { useEffect, useState } from "react";
import User from './user/User';
import '../App.css';



const UsersComponent = (props) => {
    return (
       <>
            {props.users.map(user=> <User key = {user.id} user={user} showPosts={props.showPosts}/>)}
       </>
    )
}

export default UsersComponent;