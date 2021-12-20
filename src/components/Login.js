import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login(){
    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const { push } = useHistory();

// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'User 1'
//     })
// }).then(res => {
//     return res.json()
// })
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', form)
    .then( res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        push('/')
    })
    .catch(err => console.log(err));
};

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name='username' placeholder='username' onChange={handleChange} />
            <input name='password' placeholder='password' onChange={handleChange} />
            <button type='submit'>Login</button>
        </form>
    </div>
);
}