import React from 'react'; 
import FileSizeValidate  from '../Components/Filesizevalidate';
import UserForm  from '../Components/UserForm.js';
import Patternform from '../Components/Patternform';
import Lowercase from '../Components/Formerror';
import GeoChart from '../Components/Geocharts.js';
import Candle from '../Components/Candle.js';
import Table from '../Components/Tablechart';
import FilesUploadComponent from '../Components/Fileupload';
import Ternary from '../Components/Ternary';
import Logical from '../Components/Logical';
import Switch from '../Components/Switch';
import Ifelse from '../Components/ifelse';

// import ConfirmPassword  from '../Components/ConfirmPassword';

const Contact = (Props) =>{
    return (
    <div>
     <h2 className="text-center my-2 mx-auto">Contact</h2>
     <FilesUploadComponent/>
     <UserForm />
     {/* <ConfirmPassword/> */}
    <FileSizeValidate/>
    <Patternform/>
    <Lowercase/>
    {/* <GeoChart/> */}
    <Candle/>
    <Table/>
    <div>
    <Ternary  />
   <Logical />
   <Switch />
  <Ifelse />
    </div>
    </div>
    )
  }
  export default Contact;

