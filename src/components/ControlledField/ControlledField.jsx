import React, { useState } from 'react';

const ControlledField = () => {
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('shanto');
        if(password.length <6){
            setError('error')
        }
        else{
            setError('')
        }
    }
    const handleOnSubmit = e =>{
        console.log(e.target.value);
        setPassword(e.target.value)

        // if(password.length < 6){
        //     setError('Password must be 6 characters or longer.')
        // }
        // else{
        //     setError('')
        // }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="email" name="email" id="" placeholder='Email' required/>
                <br />
                <input type="password" name="password" onChange={handleOnSubmit} defaultValue={password} id="" placeholder='password' required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;