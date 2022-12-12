import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/Components/Navbar.js"
import Dogs from "../src/Pages/Dogs"
import Cats from "../src/Pages/Cats"
import Sheeps from "../src/Pages/Sheeps"
import Goats from "../src/Pages/Goats"
import Class from "../src/Components/class.js"
import Function from "../src/Components/Function.js"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route>
     <Route path="/" element={<Dogs num="2" />} />   
     <Route path="/cats" element={<Cats />} />  
     <Route path="/sheeps" element={<Sheeps  />} />  
     <Route path="/goats" element={<Goats color="Black"/>} />  
     <Route path="/class" element={<Class/>} />  
     <Route path="/function" element={<Function/>} />  

   </Route>
 </Routes>
</BrowserRouter>

  );
}

export default App;
