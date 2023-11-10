import React, { useContext, useEffect } from "react";
import { appContext } from "../App";


const SubChild1_1 = ()=>{
    const context = useContext(appContext);
    
    const getData =()=>{
        return context.value
    }
    return(
        <div>SubChild1_1 get this:"{getData()}" from SubChild2_2</div>
    )
}

export default SubChild1_1;