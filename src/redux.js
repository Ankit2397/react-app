import React from 'react'
import {useSelector , useDispatch} from "react-redux";
import {incNumber , decNumber} from "./Actions/index"
 
const Redux =()=>{
 const myState =useSelector((state) => state.changeTheNumber);
 const dispatch=useDispatch();
    return(
        <>
        <h2>Make a Counter in React React-Redux</h2>
        <div className="redux">
            <a title="decrement" className="redux-btn" onClick={() => dispatch(decNumber())}>
              <span>-</span>  
            </a>
            <input className="redux-input" type="text" value={myState}></input>
            <a className="redux-btn" onClick={() => dispatch(incNumber(5))}>
            <span>+</span>
            </a>
        </div>
       
<div>
    <p>
        Redux Store Value <br/>
        {myState}
            </p>
</div>

</>
    )
}
export default Redux;