import React, { useState } from 'react';

const About = (props) =>{
  const [count, setCount] = useState(0);
  const [loggedIn,setLoggedIn]=useState(false);
  // if(!loggedIn){
  //   console.log("Profile Component")
  // }
  // else{
  //   console.log("return Component")
  
  // }
  return (
    <div>
    <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">   
    <div className="mt-5">
      <h3> {props.color} Condition Rendring run  time {count}</h3>
     <button className="m-5 bg-blue-200 py-1 px-3 text-white" onClick={() => setCount(count + 1)}>Run</button>
    </div>
     <div className="mt-4 bg-blue-200 py-1 px-3 text-white w-[60px] text-center"><button onClick={()=>setLoggedIn(!loggedIn)}>click</button></div>
    </div>
    <div>
     {loggedIn==1?
      <h2>user1</h2>
      :loggedIn==2? <h2>user2</h2>
      :<h2>user3</h2>
}
      </div>
    </div>
  );
}
export default About;