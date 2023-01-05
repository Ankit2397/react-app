import React ,{useContext} from 'react';
import {GlobalInfo} from './parent';
import OtherChild from './otherchild';

function SupperChild(props) {
 const {appColor}=useContext(GlobalInfo);
    return(
        <div>
         <h1 style={{color:appColor}}>SupperChild component</h1>
   <OtherChild/>
        </div>
    )
}
export default SupperChild;