import React from 'react';  
import { useState} from "react";
import { useEffect} from "react";
// import axios from 'axios';  
import axios from './axios3.js'; 

// const API ="https://jsonplaceholder.typicode.com"

export default function Axioss  (props){

const [myData , setMyData] = useState([]);
// const [isError,setIsError] = usestate("");

// ##First Method

// useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) =>{
//       setMyData(res.data)
//     })
// }, []);


// ##Second Method

// const getApiData = async(url) =>{
//     try{
//         const res = await axios.get(url);
//         setMyData(res.data)
//     }catch (error){
// //  setIsError(error.message);
//     }
   
// }
// useEffect(() => {
//     getApiData(`${API}/posts`);
// }, []);

// ##Third Method

const getApiData = async() =>{
    try{
        const res = await axios.get("/posts");
        setMyData(res.data)
    }catch (error){
//  setIsError(error.message);
    }
   
}
useEffect(() => {
    getApiData();
}, []);

// useEffect(() => {
//     axios.post('./user', {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// }, []);

return(
    <>
<div>
{myData.slice(0 ,12).map((post)=>{
  const{id,title,body} = post;
  return <div className="card my-0 mx-auto text-center w-[800px] mb-2" key={id}>
<h2>{title.slice(0,15).toUpperCase()}</h2>
<p>{body.slice(0,150)}</p>
 </div>
    })}
</div>
    </>
)
}