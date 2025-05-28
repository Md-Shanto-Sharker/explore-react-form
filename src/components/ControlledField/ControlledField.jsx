import React, { useState } from 'react';

const ControlledField = () => {
    const [password,setPassword] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('shanto');
    }
    const handleOnSubmit = e =>{
        console.log(e.target.value);
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
        </div>
    );
};

export default ControlledField;