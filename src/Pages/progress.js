import React, { useEffect, useState } from 'react';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 90) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div style={{textAlign:"center"}}>
      <h4>Circular progress bar in React js</h4>
      <div style={{ width: 150}}>
        <CircularProgressbar 
        value={percentage} 
        text={`${percentage}%`
       

        }
        styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0
            ,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            stroke: "rgb(233 0 47 / 90%)",
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: `rgb(239,68,68, ${percentage / 100})`,
            textColor: 'black',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
 />
      </div>
    </div>
  );
}
export default CircularProgressBar;