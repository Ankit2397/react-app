import React from 'react';
import './DarkMode.css';
// import './global.css';
import { IonToggle} from "@ionic/react";



const DarkMode = () => {
        
const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");

};
  return (
    <div className="container">
      <div className="wrapper">
     

           <IonToggle slot="end"
name="darkMode"
onIonChange={toggleDarkModeHandler}
/>

    </div>
    </div>
  );
};

export default DarkMode;
