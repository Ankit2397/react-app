import React, { useState } from 'react';
import Form from '../Components/PasswordForm';
import ConnectionSpeed from '../Components/ConnectionSpeed';
import Formed from './Form'

const Home = (Props) =>{

   
  return (
  <div>
  <h2 className="text-center my-2 mx-auto">Home</h2>
  <Form/>
  {/* <ConnectionSpeed/> */}
  <Formed />
  </div>
  )
}
export default Home;