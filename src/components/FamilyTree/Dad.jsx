import React from 'react';
import Myself from './Myself';
import Sister from './Sister';

import Brother from './Brother';
const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;