import React, { useEffect, useState } from "react";
import '../App.css';



const CapsulesComponent = (props) => {
    return (
        <div className="user-card">
            <p className="id">{props.cap.capsule_serial}</p>
            <h3 className="title">{props.cap.original_launch}</h3>
            <p className="body">landings:{props.cap.landings}</p>
            <p>{props.cap.status}</p>
        </div>
    )
}

export default CapsulesComponent;