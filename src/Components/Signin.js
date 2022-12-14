import React, { useState } from 'react';
const Signin = (Props) =>{
    const [signbtn, setSignBtn] = useState(false);
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");

    function getFormData(event){
      console.warn(name,pswd)
      // event.preventDefault();
    }
    function  userHandler(e){
      let item=e.target.value;
      if(item.length<3 )
      {
        setName(true)
      }
      console.warn(e.target.value.length)
    }
  return (
    
   <div> 
          {!signbtn &&
         <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">  
      
           <form onSubmit={getFormData()}>        <div className="fixed top-1/2 max-w-[400px] border-2 border-black max-h-[320px] min-w-[200px] min-h-[200px] w-full h-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[5px] p-5 z-10"> 
    <span onClick={() => setSignBtn(true)} className="text-4xl fixed top-0 right-1 transform rotate-45 cursor-pointer">+</span><h2 className="text-2xl text-center mb-2">Sign In</h2>
  <div className="flex flex-col gap-2"><label>Email</label>
   <input className="p-1 text-lg rounded-[5px] border-2 border-gray-300 focus:outline-[#FE4A2A]" type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your Email"></input>
   </div>
   <div className="flex flex-col gap-2"><label>Password</label>
   <input className="p-1 text-lg rounded-[5px] border-2 border-gray-300 focus:outline-[#FE4A2A]" type="password" onChange={(event)=>setPswd(event.target.value)} placeholder="Enter your Password"></input>
   </div>
   <div className="flex flex-col gap-4">
   <a href="#" className="text-center text-lg mt-1">Forget your Password?</a>
   <button type="submit" className="bg-[#FE4A2A] py-2 px-3 rounded-[5px] text-white">Sign In</button>
   </div>
        </div>
        </form>

    
    </div>
}
        </div>
    
        );
  }
      

        export default Signin;
        