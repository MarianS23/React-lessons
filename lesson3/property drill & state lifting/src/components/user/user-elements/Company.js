import React from "react";
import '../../../App.css';



const Company   = (props) => {
    const {user} = props;
    return (
       <>
        <div className="company">
        <h3>suite: {user.company.name}</h3>
        <h3>catchPhrase: {user.company.catchPhrase}</h3>
        <h3>bs: {user.company.bs}</h3>
        </div>
       </>
    )
}

export default Company  ;