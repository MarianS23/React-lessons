import React, { useCallback, useEffect, useMemo, useState } from "react";
import NumberComponent from "./NumberComponent";
import useFetch from "../hooks/useFetch";

const heavyFunc = (num) => {
    console.log("Calculated...");
    for (let i = 0; i < 1000000000; i++) {
        num++
    };
    return num
}

const UseMemoComponent = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0);
    const [key, setKey] = useState([]);
   

    useFetch(key)
    

    

    const setUsers = () => {
        setKey(key => key = "users")
        

    }
    const setPosts = () => {
        setKey(key => key = "posts")

    }
    const setComments = () => {
        setKey(key => key = "comments")

    }

    console.log("render UseMemoComponent")
    const showCount = useMemo(() => heavyFunc(count), [count]);

    const addNum = useCallback(() => setNumber(number => number + 1), [number])


    const addCount = () => setCount(count => count + 1)


    return (
        <div>
            <NumberComponent number={number} addNum={addNum} />
            <p>{showCount}</p>
            <button onClick={addCount}>raise</button>
            <div>
                <button onClick={setUsers}>users</button>
                <button onClick={setPosts}>posts</button>
                <button onClick={setComments}>comments</button>
            </div>
        </div>
    )
}

export default UseMemoComponent;