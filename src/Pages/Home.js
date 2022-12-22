import React, { useState } from 'react';
import Table from "./table.js"
 
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

     <div className="w-full ">
      <img className="w-full min-h-[250px] h-full" src="./images/banner1.jpg" alt="banner"/>
      </div>
      <div className="absolute top-1/2 left-8 -translate-y-1/2">

        <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">  

      <div>
        <h2 className="text-2xl text-white"><a href="#"> Limited offers</a>
        </h2>
        <p className="mt-4 mb-4 text-white
         w-full md:w-1/2">distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
        <a href="#" className="bg-blue-100 py-1 px-3 rounded-[5px]">Shop Now</a>
      </div>
    </div>

    </div>
    </div>
 <div>
   <button className="text-center bg-blue-200 py-2 px-4 w-[160px] my-4 mx-6" onClick={()=>setPrint(!print)}>Print Console</button>
 </div>
<div>
  <Table/>
</div>
    </div>
  );
}
export default Home;