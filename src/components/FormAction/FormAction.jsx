import React from 'react';

const FormAction = () => {
    const handleAction =(e)=>{
        console.log(e.get('name'));
        console.log(e.get('email'));
    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" name="name" id="" placeholder='Enter your name'/>
                <br />
                <input type="email" name="email" id="" placeholder='Enter your name'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;