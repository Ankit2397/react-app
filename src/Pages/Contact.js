import React from 'react'; 
import FileSizeValidate  from '../Components/Filesizevalidate';
import UserForm  from '../Components/UserForm.js';
import Patternform from '../Components/Patternform';
import Lowercase from '../Components/Formerror';
import GeoChart from '../Components/Geocharts.js';
import Candle from '../Components/Candle.js';
import Treechart from '../Components/Treechart';

// import ConfirmPassword  from '../Components/ConfirmPassword';

const Contact = (Props) =>{
    return (
    <div>
     <h2 className="text-center my-2 mx-auto">Contact</h2>
     <UserForm />
     {/* <ConfirmPassword/> */}
    <FileSizeValidate/>
    <Patternform/>
    <Lowercase/>
    <GeoChart/>
    <Candle/>
    <Treechart/>
    </div>
    )
  }
  export default Contact;

