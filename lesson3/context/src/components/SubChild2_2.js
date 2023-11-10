import React, { useContext, useEffect } from "react";
import { appContext } from "../App";


const SubChild2_2 = () => {
    const someData = 'DATA'
    const context = useContext(appContext);
    useEffect(()=>{
        postSomeData();
    },[])

    const postSomeData = ()=>{
        context.setValue(someData);
    }
    return (
        <></>
    )
}

export default SubChild2_2;