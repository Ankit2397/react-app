
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import NavBar from "../src/Components/Navbar.js"
import Home from "../src/Pages/Home.js"
import Contact from "../src/Pages/Contact.js"
import About from "../src/Pages/About.js"
import About1 from "../src/Pages/About1.js"
import About2 from "../src/Pages/About2.js"
import Error from "../src/Pages/Error.js"
import Protected from "../src/Components/Protected"
export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }

  return (
    <div className="">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/home"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Home />
               </Protected>
            }
          />
          <Route
            path="/contact"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Contact />
               </Protected>
            }
          />
           <Route
            path="/about"
            element={
              <Protected isSignedIn={isSignedIn}>
                <About/>
               </Protected>
            }
          />
           <Route path="*" element={<Error/>} />  
        </Routes>
        {isSignedIn ? (
          <div className="my-2">
            <button className="text-center bg-red-400 py-2 px-4 rounded-[5px]" onClick={signout}>
              Sign out
            </button>
          </div>
        ) : (
          <div className="my-2">
            <button className="text-center bg-green-400 py-2 px-4 rounded-[5px]" onClick={signin}>
              Sign in
            </button>
          </div>
        )}
      </BrowserRouter>
    </div>
  )
}
