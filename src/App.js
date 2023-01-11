import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import NavBar from "../src/Components/Navbar.js"
import Home from "../src/Pages/Home.js"
import Contact from "../src/Pages/Contact.js"
import About from "../src/Pages/About.js"
import Error from "../src/Pages/Error.js"
import LinkBtn from "../src/Components/LinkBtn.js"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
     <Route path="/" element={<Home num="2" />} />   
     <Route path="/contact" element={<Contact />} />  
     <Route path="/about" element={<About color="Black"/>} />  
     <Route path="*" element={<Error/>} />  
 </Routes>
 <LinkBtn/>
</BrowserRouter>

  );
}

export default App;
