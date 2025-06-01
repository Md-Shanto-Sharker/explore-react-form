import React, { useState } from 'react';

const ControlledField = () => {
    const [password,setPassword] = useState('')
   
    const handleSubmit =(e)=>{
        e.preventDefault()
       
    }
    const handleOnChange =(e)=>{
        setPassword(e.target.value);
    }
    console.log(password);
   
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="email" name="email" id="" placeholder='Email' required/>
                <br />

                <input type="password" onChange={handleOnChange} defaultValue={password} name="password" id="" placeholder='Password' required/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledField;