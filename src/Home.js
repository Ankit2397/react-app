import React, { useContext } from 'react'
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";
import FeaturedProduct from "./Components/FeaturedProduct";
import { AppContext } from './Context/Productcontext';

function Home(props) {
  const { myName } = useContext(AppContext)

  const data = {
    name: "Shop.my Store",
  };
  return (
    <>
    {/* {myName} */}
    <HeroSection myData={data} />
    <FeaturedProduct/>
    <Services />
    <Trusted />
    </>
  )
}



export default Home


