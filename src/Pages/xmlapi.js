import React ,{ useState } from 'react';
import axios from 'axios';

export default function XmlData  (props){

    const [myData , setMyData] = useState([]);

 useEffect(() => {
    
    axios.get("")
    .then(()=>{
        setMyData()
    })

 }, []);
    
    return(
        <>
        <div>


        </div>
            

        </>
    )

}