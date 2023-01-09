import { useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import Animation  from "./Animations.js";
import List  from "../Components/array.js";
import Perserve from "./Perserve.js";
import Page from "./Props/main.js";
import Axioss from "./axios2.js";
import { Outlet } from "react-router-dom";
import React from 'react';
import Parent from "./parent";
import Nested from "./nested";
import XmlData from "./xmlapi";
import Put from "./put";
import Toast from "./Toast.js";

const About = (props) =>{
  const [loggedIn,setLoggedIn]=useState(false);
  const [currentUser, setCurrentUser] = React.useState([]);

  // Array Of Objects
  var Student = [
   {name:"Rom", age:15},
   {name:"Rahul", age:25},
   {name:"Ronny", age:45},
  ];


  console.log(Student);
  for(var a=0; a< Student.length;a++){
    console.log(Student[a].name)
  }
  return (
    <div>
    <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">   
 
     <div className="mt-4 bg-blue-200 py-1 px-3 text-white w-[60px] text-center"><button onClick={()=>setLoggedIn(!loggedIn)}>click</button></div>
    </div>
    <div>
     {loggedIn==1?
      <h2>user1</h2>
      :loggedIn==2? <h2>user3</h2>
      :<h2>user2</h2>
}
      </div>
      <div>
        <Animation/>
      </div>
      <div className="my-2">
        <Allaccordian/>
      </div>
     <div>
       <List />
     </div>
     <div>
       <Perserve/>
     </div>
     <div>
       <Page/>
     </div>
     <div>
       {/* <Data/> */}
        <Axioss/>
     </div>
<div>
<Outlet context={[currentUser]}/>
</div>
<div>
  <Parent />
</div>
<div>
  <Nested/>
</div>
<div>
  <Toast/>
</div>
<div>
  <Put/>
</div>
<div>
  <XmlData/>
</div>
    </div>
  );
}
export default About;



function Allaccordian() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


