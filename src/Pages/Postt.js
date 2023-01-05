import React, { useEffect, useState } from 'react'
function Postt() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [mobile,setMobile]=useState("");
function SaveData()
{
  let data={name,email,mobile}
// console.warn(data);
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json()
    .then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="App">
      <h1>POST API Example </h1>  
      <input type="text" className="border-2 border-black" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" className="border-2 border-black" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" className="border-2 border-black" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
      <button type="button" className="border-2 border-black py-2 px-3" onClick={SaveData} >Save New User</button>
    </div>
  );
}
export default Postt;
