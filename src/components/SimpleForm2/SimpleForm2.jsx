import React from 'react';

const SimpleForm2 = () => {
    const handleClicked =(e) =>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleClicked}>
                <input type="text" name='name' placeholder='name' />
                <br />
                <input type="email" name='email' placeholder='name' />
                <br />
                <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default SimpleForm2;