import { useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import Animation  from "./Animations.js";
import List  from "../Components/array.js";
import Panel from "./Acc.js";
import Perserve from "./Perserve.js";
import Page from "./Props/main.js";

const About = (props) =>{
  const [loggedIn,setLoggedIn]=useState(false);
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
       <Panel/>
       </div>
     <div>
       <Perserve/>
     </div>
     <div>
       <Page/>
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


