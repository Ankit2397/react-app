import React, { useState } from 'react';
import { NavLink  } from "react-router-dom";
import Signin from "./Signin.js"
import SignUp from "./Signup.js"

const Navbar= () =>{
  const [signin, setSignIn] = useState(true);
  const [signup, setSignUp] = useState(true);
  return (
    <div className="bg-[rgb(32,35,42)] w-full">
    <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">
  <div className="flex gap-5 justify-between py-2 items-center">
   <ul className="flex sm:hidden cursor-pointer flex-col gap-2 py-2">
     <li className="bg-white w-[30px] h-[2px] "></li>
     <li className="bg-white w-[30px] h-[2px] "></li>
     <li className="bg-white w-[30px] h-[2px] "></li>
   </ul>
    <ul className="hidden sm:flex gap-5">
    
    <li className="text-white">
      <NavLink to="/">Home</NavLink>
    </li>
    
    <li className="text-white">
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li className="text-white">
      <NavLink to="/about">About Us</NavLink>
    </li>
    </ul>
    <ul className="hidden sm:flex gap-2 pr-2">
      <li><button className="bg-blue-100 py-1 px-3 rounded-[5px]" onClick={() => setSignIn(!signin)}>Sign In</button></li>
      <li><button className="bg-blue-100 py-1 px-3 rounded-[5px]" onClick={() => setSignUp(!signup)}>Sign Up</button></li>
    </ul>

  </div>
  {!signin&& 
    <div><Signin/>
     </div>
  }
  
   

  {!signup&& 
   <div> <SignUp/> </div>
  }
  </div>
  </div>
  );
}
export default Navbar;