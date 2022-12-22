import React, { Component } from 'react';  

class ForceUpdate extends React.Component {  
   constructor() {  
      super();            
      this.forceUpdateState = this.forceUpdateState.bind(this);  
   }  
   forceUpdateState() {  
      this.forceUpdate();  
   };  
   render() {  
      return (  
         <div className="border-black border-2 p-4 w-[400px] flex flex-col gap-5 my-4">  
             <h1>Example to generate random number</h1>  
             <h3>Random number:<span className="bg-yellow-200 p-2 ml-2 text-xl rounded-[10px]"> {Math.random()} </span></h3>  
             <button className="bg-blue-200 text-center py-2 px-4" onClick = {this.forceUpdateState}>ForceUpdate</button>  
         </div>  
      );  
   }  
}  
export default ForceUpdate;