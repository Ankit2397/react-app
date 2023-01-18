import React, { useState } from 'react';
import Form from '../Components/PasswordForm';
import Formed from './Form';
import Postt from '../Components/Postt';
import PDF from '../Components/Pdf';

const Home = (Props) =>{

  return (
  <div>
  <h2 className="text-center my-2 mx-auto">Home</h2>
  <Form/>
  <Formed/>
  <Postt/>
  <PDF/>
  </div>
  )
}
export default Home;