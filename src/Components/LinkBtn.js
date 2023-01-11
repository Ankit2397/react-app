import { useState} from "react";
import React from 'react';
import {useNavigate  } from "react-router-dom";


const LinkBtn = (props) =>{

  const nav =useNavigate();
  return (
  
    <div className="flex gap-5 w-full px-5 justify-between items-center fixed bottom-2 z-10">
      <button className="btn btn-primary" onClick={() => nav(1)}>
          Go forward
        </button>
        <button className="btn btn-dark" onClick={() => nav(-1)}>
          Back Page
        </button>
    </div>
  )
}
export default LinkBtn;