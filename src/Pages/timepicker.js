
import react , {useState} from 'react'; 
import Timepickerr from 'react-time-picker';
 
function Timepicker() {  
    const [value, onChange] = useState('10:00');  
    return (  
      <div>  
        <Timepickerr onchange={onchange} value={value} /> 
      </div>  
    );  
};  
export default Timepicker;