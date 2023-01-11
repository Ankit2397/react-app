import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/Components/Navbar.js"
import Home from "../src/Pages/Home.js"
import Contact from "../src/Pages/Contact.js"
import About from "../src/Pages/About.js"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
     <Route path="/" element={<Home num="2" />} />   
     <Route path="/contact" element={<Contact />} />  
     <Route path="/about" element={<About color="Black"/>} />  
 </Routes>
</BrowserRouter>

  );
}

export default App;
