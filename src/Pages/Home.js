import React, { useState } from 'react';
import Drops from "../Components/dropdown.js";

const Home = (Props) =>{
  const [print, setPrint] = useState("");
    if(!print){
    console.log("abc")
  }
  else{
    console.log("def")
  
  }
  return (
    <div>
    <div className="relative"> 

     <div className="w-full">
      <img className="w-full min-h-[250px] max-h-[500px] object-cover h-full" src="./images/banner3.jpg" alt="banner"/>
      </div>
      <div className="absolute top-1/2 left-8 -translate-y-1/2">

        <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">  

      <div>
        <h2 className="text-2xl text-white"><a href="#" className="text-white text-2xl no-underline"> Limited offers</a>
        </h2>
        <p className="mt-2 mb-4 text-white
         w-full md:w-1/2">distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
        <a href="#" className="bg-[rgb(147,197,253)] py-2 px-3 rounded-[5px] text-black no-underline">Shop Now</a>
      </div>
    </div>

    </div>
    </div>
    <div className="flex gap-5">
      
 <div>
   <button className="text-center bg-[rgb(147,197,253)] py-2 px-4 w-[160px] my-4 mx-6" onClick={()=>setPrint(!print)}>Print Console</button>
 </div>
 <div className="mt-4">
   <Drops/>
 </div>

 </div>
    </div>
  );
}
export default Home;