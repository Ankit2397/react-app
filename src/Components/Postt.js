import React, { useEffect, useState } from 'react'
import axios from 'axios';
import jsPDF from 'jspdf'

function Postt() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [mobile,setMobile]=useState("");
 const [pdfData,setPdfData]=useState("")

//  const  generatePDF = () => {
//     var doc = new jsPDF('p', 'pt');
    
//     doc.text(20, 20,'pdfData')
//     doc.addFont('helvetica', 'normal')
//     doc.save('demo.pdf')
// } 

//  useEffect(() => {
//     axios.get('https://dummyjson.com/products')
//     .then(function (response) {
//       console.log(response.data);
//       console.log(response.status);
//       console.log(response.statusText);
//       console.log(response.headers);
//       console.log(response.config);
//       setPdfData(response.data)
//     });
//  }, []);

function saveData()
{
  let data={name,email,mobile}
// console.warn(data);
  fetch("http://localhost:4000/todo", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
    
  })
}
  return (
    <div className="App">
      <h1>POST API Example </h1>  
      <input type="text" name="name" className="border-2 border-black" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email" className="border-2 border-black" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="mobile" className="border-2 border-black" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
      {/* <div>
            <button onClick={generatePDF()} className="bg-red-500 ml-5 py-2 px-3 text-center text-white rounded-[5px]" type="primary">Download PDF</button> 
         </div> */}
    </div>
  );
}
export default Postt;
