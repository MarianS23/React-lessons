import React from "react";
import '../../../App.css';



const UserAddress   = (props) => {
    const {user} = props;
    return (
       <>
        <div className="address">
        <h3>suite: {user.address.suite}</h3>
        <h3>street: {user.address.street}</h3>
        <h3>city: {user.address.city}</h3>
        </div>
       </>
    )
}

export default UserAddress  ;