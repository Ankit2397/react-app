import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function  Toast(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button className="bg-green-300 py-2 px-3 text-center" onClick={notify}>Notify!</button>
      <ToastContainer className="fixed left-[10%] " />
    </div>
  );
}
export default Toast;
