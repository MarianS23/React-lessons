import '../App.css';
import React, { useRef } from 'react';
import {postUser} from '../shared/service';
import { useForm } from 'react-hook-form';

const FormTamplate = () => {
    const { handleSubmit,register } = useForm();


    const emailRef = useRef();
    const nameRef = useRef();
    const usernameRef = useRef();
    const streetRef = useRef();
    const suiteRef = useRef();
    const cityRef = useRef();
    const phoneRef = useRef();
    const websiteRef = useRef();


    const submitForm = (data) => {
        postUser(data);
    }

    return (
        <div className='form-tamplate'>
            <form onSubmit={handleSubmit(submitForm)}>
                <label>
                    name
                    <input type="text"  {...register('name')}/>
                </label>
                <label>
                    username
                    <input type="text"  {...register('username')}/>
                </label>
                <label>
                    email
                    <input type="text"  {...register('email')}/>
                </label>
                <label>
                    address
                    <input type="text" placeholder='street'  {...register('street')}/>
                    <input type="text" placeholder='suite'  {...register('suite')}/>
                    <input type="text" placeholder='city'  {...register('city')}/>
                </label>
                <label>
                    phone
                    <input type="text" {...register('phone')}/>
                </label>
                <label>
                    website
                    <input type="text"  {...register('website')}/>
                </label>
                <input className='btn' type="submit" value="submit" />
            </form>
        </div>
    )
}

export default FormTamplate