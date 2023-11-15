import '../App.css';
import React, { useRef } from 'react';

const FormTamplate = () => {
    const emailRef = useRef();
    const nameRef = useRef();
    const usernameRef = useRef();
    const streetRef = useRef();
    const suiteRef = useRef();
    const cityRef = useRef();
    const phoneRef = useRef();
    const websiteRef = useRef();


    const submitForm = (e) => {
        e.preventDefault();
        // const user = JSON.stringify({
        //     name: nameRef.current.value,
        //         username: usernameRef.current.value,
        //         email: emailRef.current.value,
        //         address: {
        //             street:streetRef.current.value,
        //             suite:suiteRef.current.value,
        //             city:cityRef.current.value
        //         },
        //         phone: phoneRef.current.value,
        //         website: websiteRef.current.value
        // })

        
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body:JSON.stringify({
                name: nameRef.current.value,
                username: usernameRef.current.value,
                email: emailRef.current.value,
                address: {
                    street:streetRef.current.value,
                    suite:suiteRef.current.value,
                    city:cityRef.current.value
                },
                phone: phoneRef.current.value,
                website: websiteRef.current.value
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
                    name
                    <input type="text" ref={nameRef} />
                </label>
                <label>
                    username
                    <input type="text" ref={usernameRef} />
                </label>
                <label>
                    email
                    <input type="text" ref={emailRef} />
                </label>
                <label>
                    address
                    <input type="text" placeholder='street' ref={streetRef} />
                    <input type="text" placeholder='suite' ref={suiteRef} />
                    <input type="text" placeholder='city' ref={cityRef} />
                </label>
                <label>
                    phone
                    <input type="text" ref={phoneRef} />
                </label>
                <label>
                    website
                    <input type="text" ref={websiteRef} />
                </label>
                <input className='btn' type="submit" value="submit" />
            </form>
        </div>
    )
}

export default FormTamplate