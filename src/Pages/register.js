import react, { useState, useEffect } from 'react'
// import { useHistory } from "react-router-dom";


function Form(){
    // let history = useHistory();
    const data={name:"" ,email:"",password:""};
    const [inputData,setInputData]=useState(data);
    const [flag,setFlag] = useState(false);
    	
// const [userName, setUserName] = useState("");
    

// useEffect(() => { 
// localStorage.setItem("name",JSON.stringify(name))
// }, [name]);



    useEffect(() =>{
     console.log("Registered")
    } ,[flag]);
    function handleData(e){
        setInputData({...inputData , [e.target.name]:e.target.value})
        const Store = localStorage.setItem("name",JSON.stringify(inputData.name  , inputData.email , inputData.password))
  console.log(inputData)
  console.log(Store)
    }

    // function Logout(){
    //     localStorage.clear();
    //     history.push("/about")
    // }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password )
        {
            alert("All fields are Mandatory")
        }
        else{
            setFlag(true)
        }

    }
    return(
        <>

<div>
<span className="w-1/2 my-0 mx-auto text-center text-blue-500">{(flag)?<h4>Hello {inputData.name}, You've Registered Successfully </h4> :""}</span>
        <form className="Container my-0 mx-auto" onSubmit={handleSubmit}>
            <div className="Header bg-blue-500 py-2">
            <h2 className="font-bold text-2xl text-center text-white text-center">Reigtration Form</h2>
            </div>
            <div className="py-2 border-[1px] focus:border-blue-500 border-gray-400 pl-2 mb-2 mt-2 rounded-[5px]">
                <input type="text" placeholder="Enter Your Name" className="w-full outline-none" value = {inputData.name} name="name" onChange={handleData}></input>
            </div>
            <div className="py-2 border-[1px] border-gray-400 pl-2 mb-2 rounded-[5px]">
            <input type="Email" placeholder="Enter Your Email" name="email" className="w-full outline-none" value = {inputData.email} onChange={handleData}></input>
 </div>
 <div className="py-2 border-[1px] border-gray-400 pl-2 mb-2 rounded-[5px]">
            <input type="Password" placeholder="Enter Your Password" className="w-full outline-none" value = {inputData.password} name="password" onChange={handleData}></input>
 </div>
 <div className="text-center my-0 mx-auto">
     <button type="submit"
     className="bg-green-500 w-[120px] py-2 px-3 text-white rounded-[5px]">
 Submit
     </button>
     <button type="reset" className="bg-red-500 w-[120px] ml-2 py-2 px-3 text-white rounded-[5px]">Reset</button>
     {/* <button onClick={Logout()} className="bg-red-500 w-[120px] ml-2 py-2 px-3 text-white rounded-[5px]">Logout</button> */}
 </div>
 <div>
     {inputData.name }
     <br></br>
     {inputData.email}
     <br></br>
      {inputData.password}
     <br></br>
 </div>
        </form>
        </div>    

    </>
    )
}
export default Form;