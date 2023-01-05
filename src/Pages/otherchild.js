import React ,{useContext} from 'react';
import {GlobalInfo} from './parent';


function OtherChild(props) {
 const {appColor}=useContext(GlobalInfo);
    return(
        <div>
         <h1 style={{color:appColor}}>OtherChild component</h1>

        </div>
    )
}
export default OtherChild;