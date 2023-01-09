import React  from 'react';
import axios from 'axios';
import { useState} from "react";
import { useEffect} from "react";
import XMLDataa from './List.xml';
import parse from 'xml-parser';
import { Router } from 'react-router';

export default function XmlData  (props){

    const [myData , setMyData] = useState([]);

const getApiData = async(url) =>{
    try{
        const res = await axios.get(url);
        setMyData(res.data)
    }catch (error){
//  setIsError(error.message);
    }
   
}
useEffect(() => {
    axios.get(XMLDataa, {
       "Content-Type": "application/xml; charset=utf-8"
    })
    .then((res) => {
        console.log(res.data)
       setMyData(res.data);
    //    console.log(response.statusText); depend on status code
    //    res.redirect("/")
    // Router.push("/")
    // console.log(response.ok); // returns true if the response returned successfully


    //    var xmlData = res.data;
    //    parseString(xmlData,function(err,result){
    //     var data=JSON.stringify(result);
    //     console.log(data);
    //    })
    })
    // .then((res) => {
    //     console.log(res.data)
    //    setMyData(res.data)
    //    var xmlData = res.data;
 
    // .then(res=>res.text())
    //         .then(data=>{
    //             let parser = new DOMParser();
    //             let xml = parser.parseFromString(data, "application/xml");
    //             var obj = parse(xml);
    //             console.log(obj);
    //         })

}, []);
    
    return(
        <>
     
        {/* {myData.map((post)=>{
  const{id,Name,Artist} = post;
  return <div className="card my-0 mx-auto text-center w-[800px] mb-2" key={id}>
<h2>{Name.toUpperCase()}</h2>
<p>{Artist}</p>
 </div>
    })} */}


            

        </>
    )

}


// let url = "read.xml";
// fetch(url)
// .then(response=>response.text())
// .then(data=>{
//     //console.log(data);  //string
//     let parser = new DOMParser();
//     let xml = parser.parseFromString(data, "application/xml");
//     document.getElementById('output').textContent = data;
//     console.log(xml);
    

// })