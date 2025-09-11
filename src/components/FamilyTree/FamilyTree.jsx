import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);
const FamilyTree = () => {
  const [money,setMoney] = useState(0)
  const asset = "diamond";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h4>Total Family Money : {money}</h4>
      <MoneyContext value={[money,setMoney]}>
        <AssetContext.Provider value={asset}>
          <Grandpa></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
