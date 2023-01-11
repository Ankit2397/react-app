import React, { useState, useEffect } from 'react';
const Formed = (Props) =>{
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
    });

    let name , value;
   const getUserData =(event)=>{
       name=event.target.name;
       value=event.target.value
      setUser({...user,[name]:value});
 
   }

      const PostData =async (e) =>{
        e.preventDefault();
        const {name , email , phone , address } = user;

        if(name && email && phone && address ){

            const res=await
            fetch("https://reactform-72466-default-rtdb.firebaseio.com/reactform.json",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name,
              email,
              phone,
              address
          })
    });
    
    if(res){
        setUser({
            name:"",
            email:"",
            phone:"",
            address:"",
        });
        alert("Data Stored")
    }
        }
        else{
alert("Plz fill Data")
        }
      


      }
      
  
   
  return (
    
   <div> 
  
          <div>
         <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">  
      
           <form method="Post" >        <div className="fixed top-[60%] max-w-[400px] border-2 border-black max-h-[520px] min-w-[200px] min-h-[200px] w-full h-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[5px] p-4 py-4 z-10"> 
    <span className="text-4xl fixed top-0 right-1 transform rotate-45 cursor-pointer">+</span><h2 className="text-2xl text-center mb-2">Sign In</h2>
    <div className="flex flex-col gap-2"><label>Name</label>
   <input className="p-1 text-lg rounded-[5px] border-2 border-gray-300 focus:outline-[#FE4A2A]" name="name" type="text" value={user.name} onChange={getUserData} placeholder="Enter your Name"></input>
   </div>
  <div className="flex flex-col gap-2"><label>Email</label>
   <input className="p-1 text-lg rounded-[5px] border-2 border-gray-300 focus:outline-[#FE4A2A]" name="email" type="text" value={user.email} onChange={getUserData} placeholder="Enter your Email"></input>
   </div>
   <div className="flex flex-col gap-2"><label>Phone</label>
   <input className="p-1 text-lg rounded-[5px] border-2  border-gray-300 focus:outline-[#FE4A2A]" name="Phone" type="number" value={user.phone} onChange={getUserData} placeholder="Enter your Number"></input>
   </div>
   <div className="flex flex-col gap-2"><label>Address</label>
   <input className="p-1 text-lg rounded-[5px] border-2  border-gray-300 focus:outline-[#FE4A2A]" name="address" type="text" value={user.address} onChange={getUserData} placeholder="Enter your Address"></input>
   </div>
   <div className="flex flex-col gap-4">
   <a href="#" className="text-center  no-underline text-lg mt-1">Forget your Password?</a>
   <button onClick={PostData()} className="bg-green-500 py-2 px-3 rounded-[5px] text-white">Sign In</button>
   </div>
        </div>
        </form>

    
    </div>
     
          </div>

        </div>
    
        );
  }
      

        export default Formed;
        