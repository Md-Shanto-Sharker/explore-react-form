import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name}) => {
    const newAsset = useContext(AssetContext);
    console.log(newAsset);
    return (
        <div>
            <h3>Special  {name}</h3>
            <p>New Asset : {newAsset}</p>
        </div>
    );
};

export default Special;