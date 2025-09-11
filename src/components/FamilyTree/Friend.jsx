import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
    const[money,setMoney] = use(MoneyContext)
    return (
        <div>
            <h3>Friends : {money}</h3>
            <button onClick={()=>setMoney(money+1)}>
                click
            </button>
        </div>
    );
};

export default Friend;