import React, { useState } from 'react';

const Goats = (props) =>{
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3> {props.color} Goat run  time {count}</h3>
     <button className="m-5 bg-blue-200 py-1 px-3 text-white" onClick={() => setCount(count + 1)}>Run</button>
    </div>
  );
}
export default Goats;