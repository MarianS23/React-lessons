import '../App.css';
import React, { useRef } from 'react';

const CommentForm = () => {
    const commentRef = useRef();
    const submitForm = (e) => {
        e.preventDefault();
        
        console.log(commentRef.current.value);
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment: commentRef.current.value 
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
   
    return (
        <div className='form-tamplate'>
            <form onSubmit={submitForm}>
                <label>
                    comment
                    <input type="text" ref={commentRef} />
                </label>
                <input className='btn' type="submit" value="submit" />
            </form>
        </div>
    )
}

export default CommentForm