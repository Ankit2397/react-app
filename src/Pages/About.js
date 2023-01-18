import { useState} from "react";
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Profile from '../Components/Profile';
import LazyLoad from 'react-lazy-load';


const About = (props) =>{
  return (
  
    <div>
      <h2 className="text-center my-2 mx-auto">About</h2>
      <div className="product-nav mb-5 flex gap-2 none-underline">
        <Link to="/about/about1">About1</Link>
        <Link to="/about/about2">About2</Link>
      </div>
     
      <Outlet />

      <Profile/>
      <LazyLoad height={762}>
      <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
    </LazyLoad>
    </div>
  )
}
export default About;

