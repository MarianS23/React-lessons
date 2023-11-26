import '../App.css';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {postComment} from '../shared/service';

const CommentForm = () => {
    const { handleSubmit,register } = useForm();
    const submitForm = (data) => {
        postComment(data);
    }

    return (
        <div className='form-tamplate comment'>
            <form onSubmit={handleSubmit(submitForm)}>
                <label>
                    comment
                    <input type="text" {...register('comment')} />
                </label>
                <input className='btn' type="submit" value="submit" />
            </form>
        </div>
    )
}

export default CommentForm