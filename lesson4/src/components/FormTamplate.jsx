import '../App.css';
import React, { useRef } from 'react';

const FormTamplate = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const submitForm = (e) => {
        e.preventDefault();

        console.log(emailRef.current.value, passwordRef.current.value);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
                userId: 1
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
                    email
                    <input type="text" ref={emailRef} />
                </label>
                <label>
                    password
                    <input type="text" ref={passwordRef} />
                </label>
                <input className='btn' type="submit" value="submit" />
            </form>
        </div>
    )
}

export default FormTamplate