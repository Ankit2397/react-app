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
         <h2 className="text-2xl text-center my-2">key()</h2>  
         <MenuBlog data={data} />
         </div>
        
<div>
  <h3 className="text-2xl my-4 text-center">Map() Method</h3>
  {myList}
</div>
<div>
<h3 className="text-2xl my-4 text-center">Concat() method</h3>
  {childs}
</div>

<div>
<h3 className="text-2xl my-4 text-center">Filter() method</h3>
  {result}
</div>
<div>
<h3 className="text-2xl my-4 text-center">Slice() method</h3>
  {citrus}
</div>
<div>
<h3 className="text-2xl my-4 text-center">Push() method</h3>
  {pushed}
</div>

<div>
<h3 className="text-2xl my-4 text-center">Unshift() method</h3>
  {Unshifted}
</div>
<div>
<h3 className="text-2xl my-4 text-center">Reserve() method</h3>
  {Revered }
</div>

<div>
<h3 className="text-2xl my-4 text-center">Sorted() method</h3>
  {sorted }
</div>
<div>
<h3 className="text-2xl my-4 text-center">Filled() method</h3>
  {Filled}
</div>
         
         <div>
         <h3 className="text-2xl my-4 text-center">Indexof() method</h3>
        {indexed}
         </div>
         <div>
         <h3 className="text-2xl my-4 text-center">findIndex() method</h3>
         {Aged}
         </div>
         <div>
         <h3 className="text-2xl my-4 text-center">find() method</h3>
           {ajj}
         </div>
         <div>
         <h3 className="text-2xl my-4 text-center">Join() method</h3>
           {joinedtext}
         </div>
         <div>
         <h3 className="text-2xl my-4 text-center">includes() method</h3>
       {arrIncluded }
         </div>

         <div>
         <h3 className="text-2xl my-4 text-center">Reduce() method</h3>
           {Reduced}
         </div>
         <div>
         <h3 className="text-2xl my-4 text-center">ForEach() method</h3>
           {foreached}
         </div>
         <div>
         <h3 className="text-2xl my-4 text-center">Every() method</h3>
           {Everyfun}
         </div>
            </div>
            </div>
        );  
    }  
}  
export default Contact;


  function MenuBlog(props) {  

// list loop
    const titlebar = (  
      <ol>  
        {props.data.map((show) =>  
          <li key={show.id}>  
            {show.title} 
        </li>  
        )}  
      </ol>  
    );  


    const content = props.data.map((show) =>  
      <div key={show.id}>  
        <h3>{show.title}: {show.content}</h3>      
      </div>  
    );  


    return (  
      <div>  
        {titlebar}  
        <hr />  
        {content}  
      </div>  
    );  
  }  

//   Data use As a Api
  const data = [  
    {id: 1, title: 'First', content: 'Welcome !!'},  
    {id: 2, title: 'Second', content: 'It is the best ReactJS!!'},  
    {id: 3, title: 'Third', content: 'Here, you can learn all the ReactJS!!'}  
  ];  


  // Map()
  const myArray = ['index0', 'index1', 'index2'];

const myList = myArray.map((item) => <p>{item}</p>)


// concat
const arr1 = ["Child1", "Child2"];
const arr2 = ["Child3", "Child4", "Child5"];
const arr3 = ["Child6"];

const childs = arr1.concat(arr2, arr3); 
 
  // filter
  const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// slice
const index = ["index0", "index1", "index2", "index3", "index4"];
const citrus = index.slice(1, 3);

// Push
const pushed = ["index0", "index1", "index2", "index3"];
pushed.push("index4", "index5");


// Unshift
const Unshifted = ["index0", "index1", "index2", "index3"];
Unshifted.unshift("index4", "index5");

// reverse
const Revered = ["index1", "index2", "index3", "index4"];
Revered.reverse();

// sort
const sorted = ["index1", "index2", "index3", "index4"];
sorted.sort();

// fill
const Filled = ["index1", "index2", "index3", "index4"];
Filled.fill("index5", 2, 4);

// an array index {
// indexof() => Based on value // method returns -1 if the value is not found.
const indexoff = ["index0", "index1", "index2", "index3"];
let indexed = indexoff.indexOf("index2");

// findIndex => Best on Test Condition
const height = [3, 10, 18, 20];
let Aged= height.findIndex(checkAge);

function checkAge(agz) {
  return agz > 18;
}

// }



// find => // an array element and Best on Test Condition
const agezz = [3, 10, 18, 20];

let ajj=agezz.find(checkAges)
function checkAges(agg) {
  return agg> 18;
}


// Join => Based on a separate string (A new string)

const joined = ["index0", "index1", "index2", "index3"];
let joinedtext = joined.join(" or ");

// Includes

const Included = ["index0", "index1", "index2", "index3"];
 let arrIncluded = Included.includes("index1",1);


// reduce
const numberz = [175, 50, 25];

let Reduced = numberz.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

// Foreach => based on a loop array does not create a new array just loop it
let text = "";
const Eached = ["index0", "index1", "index2", "index3"];
 let foreached = Eached.forEach(myFunction);

 function myFunction(item, index) {

  text += index + ": " + item + "<br>"; 
}

// every
const everyy = [32, 33, 16, 40];

let Everyfun= everyy.every(checkAgx)

function checkAgx(aad) {
  return aad > 18;
}

// Ternary Operator

// Syntax: condition ? <expression if true> : <expression if false></expression>
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}