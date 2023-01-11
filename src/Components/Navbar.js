import React, { useState } from 'react';
import { NavLink ,useNavigate  } from "react-router-dom";
import Signin from "./Signin.js"
import SignUp from "./Signup.js"

const Navbar= () =>{
  const [signin, setSignIn] = useState(true);
  const [signup, setSignUp] = useState(true);
  const nav =useNavigate();
  return (
    <div className="bg-[rgb(32,35,42)] w-full">
    <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">
  <div className="flex gap-5 justify-between py-[5px] items-center">
 
   <ul className="flex sm:hidden cursor-pointer flex-col gap-2 py-[5px]">
     <li className="bg-white w-[30px] h-[2px] "></li>
     <li className="bg-white w-[30px] h-[2px] "></li>
     <li className="bg-white w-[30px] h-[2px] "></li>
   </ul>
    <ul className="hidden sm:flex gap-5">
    
    <li>
      <NavLink to="/" className="text-white no-underline text-xl">Home</NavLink>
    </li>
    
    <li>
      <NavLink to="/contact" className="text-white no-underline text-xl">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/about" className="text-white no-underline text-xl">About Us</NavLink>
    </li>
    </ul>
    <ul className="hidden sm:flex gap-2 pr-2">
      <li><button className="bg-[rgb(147,197,253)] py-2 px-3 rounded-[5px]" onClick={() => setSignIn(!signin)}>Sign In</button></li>
      <li><button className="bg-[rgb(147,197,253)] py-2 px-3 rounded-[5px]" onClick={() => setSignUp(!signup)}>Sign Up</button></li>
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