import React ,{useContext} from 'react';
import {GlobalInfo} from './parent';
import SupperChild from './supperchild';


function Child(props) {
 const {appColor}=useContext(GlobalInfo);
    return(
        <div>
         <h1 style={{color:appColor}}>child component</h1>
   <SupperChild/>
        </div>
    )
}
export default Child;