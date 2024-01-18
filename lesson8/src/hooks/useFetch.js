import React, { useEffect } from "react";


const useFetch = (key)=>{
    useEffect(() => {
        if(key.length > 0){
            getData(key)   
        }
    }, [key])

    // const getData = (key) => {
    //     fetch(`https://jsonplaceholder.typicode.com/${key}`)
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }
    const getData = async(key)=>{
        try{
            let response = await fetch(`https://jsonplaceholder.typicode.com/${key}`)
            let data = await response.json();
            console.log(data)
        }catch{
            console.log("error")
        }
    }
    

}
export default useFetch;