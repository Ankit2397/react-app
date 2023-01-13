import React from 'react'; 
import FileSizeValidate  from '../Components/Filesizevalidate';
import UserForm  from '../Components/UserForm.js';
import ConfirmPassword  from '../Components/ConfirmPassword';

const Contact = (Props) =>{
    return (
    <div>
     <h2 className="text-center my-2 mx-auto">Contact</h2>
     <UserForm />
     <ConfirmPassword/>
    <FileSizeValidate/>
    </div>
    )
  }
  export default Contact;

