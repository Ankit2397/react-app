import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div className="app">
      <h1>App page </h1>
      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes> */}
    </div>
  );
};

export default App;
