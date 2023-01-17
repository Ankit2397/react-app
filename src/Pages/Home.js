import React, { useState } from 'react';
import Form from '../Components/PasswordForm';
import ConnectionSpeed from '../Components/ConnectionSpeed';
import Formed from './Form';
import Popover from '../Components/Popover.jsx';
import Copy from '../Components/Copy';
import Googlemap from '../Components/Googlemap';

const Home = (Props) =>{

  return (
  <div>
  <h2 className="text-center my-2 mx-auto">Home</h2>
  <Form/>
  {/* <ConnectionSpeed/> */}
  {/* <Formed/> */}
  {/* <Popover/> */}
  <Copy/>
  {/* <Googlemap/> */}
  </div>
  )
}
export default Home;