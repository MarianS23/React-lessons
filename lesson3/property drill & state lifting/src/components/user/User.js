import React from "react";
import UserDetails from "./user-elements/UserDetails ";
import UserAddress from "./user-elements/UserAddress";
import Company from "./user-elements/Company";
import Button from "./user-elements/Button";
import '../../App.css';



const User = (props) => {
    return (
       <>
        <div className="user-card">
            <UserDetails user={props.user}/>
            <UserAddress user={props.user}/>
            <Company user={props.user}/>
            <button className="btn-info" onClick={()=>props.showPosts(props.user.id,props.user.username)}>show posts</button>
        </div>
       </>
    )
}

export default User;