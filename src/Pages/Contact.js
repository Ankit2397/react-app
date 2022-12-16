import React, { Component } from 'react';  
class Contact extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            companyName: ''  
        };  
        console.warn("constructor")
    }  
    changeText(event) {  
        this.setState({  
            companyName: event.target.value  
        });  
       
    }  
    componentDidMount(){
      console.warn("componentDidmount")
    }
    render() { 
      console.warn("render")
        return (  
            <div>
            <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">   

            <div className="mt-5 ml-2">  
                <h2 className="text-2xl text-center my-2">Component LifeCycle</h2>  
                <label htmlFor="name">Enter company name: </label>  
                <input type="text" className="border-2 text-gray-400 border-gray-400 focus:outline-[#FE4A2A] rounded-[5px]" id="companyName" onChange={this.changeText.bind(this)}/>  
                <h4 className="mt-2">You entered: <span className="text-[#FE4A2A]">{ this.state.companyName }</span></h4>  
            </div> 
 
 <div>
   <div className="my-2">
     <h2 className="text-center text-2xl mb-2">Slice() string Method</h2>
     {part} <span> ( Slice() with Positive Value )</span>
     <br></br>
     { npart}<span> ( Slice() with Negative Value ) </span>
   </div>

   <div className="my-2">
     <h2 className="text-center text-2xl mb-2">substring() string Method</h2>
     {subpart} <span> ( substring() with Positive Value )</span>
     <br></br>
      {nsubpart}<span> ( substring() with Positive Value )</span>
   </div>

   <div>
   <h2 className="text-center text-2xl mb-2">Replace() string Method</h2>
     {newText}
   </div>
   <div>
   <h2 className="text-center text-2xl mb-2">replaceAll() string Method</h2>
     {rpalltext}
   </div>

   <div>
   <h2 className="text-center text-2xl mb-2">Uppercase() string Method</h2>
   {updateupper}
   </div>

   <div>
   <h2 className="text-center text-2xl mb-2">Lowercase() string Method</h2>
   {updatelower}
   </div>
   <div>
   <h2 className="text-center text-2xl mb-2">concat() string Method</h2>
     {textnew}
   </div>
 </div>
 
 <div>
 <h2 className="text-center text-2xl mb-2">trim() string Method</h2>
   {texttrim2}
 </div>
<div>
 <h2 className="text-center text-2xl mb-2">padStart() string Method</h2>
  {paddedstr}
</div>
<div>
 <h2 className="text-center text-2xl mb-2">padEnd() string Method</h2>
  {paddedend}
</div>


 <div>
 <h2 className="text-center text-2xl mb-2">charAt() string Method</h2>
   {textcharAt}
 </div>
 <div>
 <h2 className="text-center text-2xl mb-2">charcodeAt() string Method</h2>
   {textcharcodeAt}
 </div>
 <div>
 <h2 className="text-center text-2xl mb-2">split() string Method</h2>
   {myArray}
 </div>

            </div>

            </div>
        );  
    }  
}  
export default Contact;

// slice string

let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);

let ntext = "index0, index1, index2";
let npart = ntext.slice(-14, -8);


// substring()

// The difference is that start and end values less than 0 are treated as 0 in substring()

let sub = "index01, index11, index22";
let subpart = sub.substring(9, 16);

let nsubpart = sub.substr(-7);

// replace()

let rptext = "Please visit Html and Html!";
let newText = rptext.replace("Html", "java");

//Replace all

let alltext = "Here is a cats. cats are very easy to love. cats are very popular."
let rpalltext = alltext.replaceAll("cats","dogs");

// Uppercase

let upper = "make text in capital letters!";
let updateupper = upper.toUpperCase();

// Lowercase

let lower = "MAKE TEXT IN SMALL LETTERS!";
let updatelower = lower.toLowerCase();

//concat

let textcon = "Concat";
let textstr = "String";
let  textnew= textcon.concat(" ", textstr);

// trim
let texttrim = "     Trim the text!     ";
let texttrim2 = texttrim.trim();

// trimStart() and trimEnd() to remove  the white space from start and end of the string.

// padstart

let textpad = "5";
let paddedstr = textpad.padStart(4,"0");
let paddedend = textpad.padEnd(4,"0");

//charAt

let textchar = "Text CharAt";
let textcharAt = textchar.charAt(0);

//charcodeAt

let textcharcodeAt = textchar .charCodeAt(0);

//split => to change a string in a array for and split

let textsplit = "a,b,c,d,e,f";
const myArray = textsplit.split(",");
