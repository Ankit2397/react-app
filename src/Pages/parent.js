import React from 'react'
import Child from './child'
import {useState} from 'react';
// import { createContext } from 'vm';

export const GlobalInfo =  React.createContext();
function Parent() {
  const [color,setColor]=useState('green');
  return (
      <GlobalInfo.Provider value={{appColor:color}}>
    <div className="">
      <Child/>
    </div>
    </GlobalInfo.Provider>
  );
}



export default Parent;
