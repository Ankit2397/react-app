import { useState} from "react";
import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const About = (props) =>{
  return (
  
    <div>
      <h2 className="text-center my-2 mx-auto">About</h2>
      <div className="product-nav mb-5 flex gap-2 none-underline">
        <Link to="/about/about1">About1</Link>
        <Link to="/about/about2">About2</Link>
      </div>
      <Outlet />
    </div>
  )
}
export default About;

