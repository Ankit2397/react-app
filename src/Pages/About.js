import React, { useState } from 'react';

const About = (props) =>{
  const [count, setCount] = useState(0);
  return (
    <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">   
    <div className="mt-5">
      <h3> {props.color} About run  time {count}</h3>
     <button className="m-5 bg-blue-200 py-1 px-3 text-white" onClick={() => setCount(count + 1)}>Run</button>
    </div>
    </div>
  );
}
export default About;