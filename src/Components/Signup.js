import React, { useState, useEffect } from 'react';
const SignUp = (Props) =>{
    const [signbtn, setSignBtn] = useState(false);
    const [show, setShow] = useState(true);
    const[time,setTime] = useState(10);
    useEffect(()=>{
     setInterval(()=>{
       setTime((prev) => prev - 1);
        setShow(false);
      },10000)
    },[]);
  return (
    
   <div>  
     {!signbtn &&
     <div>
       {show &&
             <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">    
           
        <div className="fixed top-1/2 max-w-[400px] border-2 border-black max-h-[320px] min-w-[200px] min-h-[200px] w-full h-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[5px]  p-4 py-4  z-10"> 
    <span onClick={() => setSignBtn(true)} className="text-4xl fixed top-0 right-1 transform rotate-45 cursor-pointer">+</span><h2 className="text-2xl text-center mb-2">Sign Up</h2>
  <div className="flex flex-col gap-2"><label>Email</label>
   <input className="p-1 text-lg rounded-[5px] border-2 border-gray-300 focus:outline-[#FE4A2A]" type="text" placeholder="Enter your Email"></input>
   </div>
   <div className="flex flex-col gap-2"><label>Password</label>
   <input className="p-1 text-lg rounded-[5px] border-2 border-gray-300 focus:outline-[#FE4A2A]" type="password" placeholder="Enter your Password"></input>
   </div>
   <div className="flex flex-col gap-4">
   <a href="#" className="text-center text-lg mt-1  no-underline">Forget your Password?</a>
   <button className="bg-green-500 py-2 px-3 rounded-[5px] text-white">Sign Up</button>

   </div>
        </div>
    
    
    </div>
}
    </div>
}
        </div>
    
        );
  }
      

        export default SignUp;
        