import React from 'react';
import { NavLink  } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <ul className="flex gap-5 mb-5 py-2 bg-red-100 pl-2">
    <li>
    <NavLink className="navbar-items" to="/">
                        Dogs
                      </NavLink>
    </li>
    <li>
      <NavLink to="/cats">Cats</NavLink>
    </li>
    <li>
      <NavLink to="/sheeps">Sheeps</NavLink>
    </li>
    <li>
      <NavLink to="/goats">Goats</NavLink>
    </li>
    <li>
      <NavLink to="/class">Class</NavLink>
    </li>
    <li>
      <NavLink to="/function">Function</NavLink>
    </li>
    </ul>
  </div>
  );
}
export default navbar;