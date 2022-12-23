import React, { Component } from 'react';  
import { cloneDeepWithoutLoc, importDefaultSpecifier, importAttribute } from '@babel/types';
import ReactDOMServer from 'react-dom/server';
import ForceUpdate from "./force.js"
import FindDom from "./find.js"
import Condition from "./Condition.js"
import Timepicker from "./timepicker.js"


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
    {/* This method allows us to update the component manually. */}
    <ForceUpdate/> 
</div>
<div>
{/* For DOM manipulation, you need to use ReactDOM.findDOMNode() method. 
This method allows us to find or access the underlying DOM node. */}
    <FindDom/>
</div>
<div>
    <Condition />
</div>
<div>
    <Timepicker/>
</div>
            </div>
            </div>
        );  
    }  
}  
export default Contact;


// ***** Fragments *****
// To solve this problem, React introduced Fragments from the 16.2 and above version. 
// Fragments allow you to group a list of children without adding extra nodes to the DOM.
// It makes the execution of code faster as compared to the div tag.
// It takes less memory.

// Syntax
// <React.Fragment>  
//       <h2> child1 </h2>   
//     <p> child2 </p>   
// </React.Fragment> 


// ***** React Flux Concept ******
// It is a kind of architecture that complements React as view and follows the concept of Unidirectional Data Flow model. 
// It is useful when the project has dynamic data, and we need to keep the data updated in an effective manner.


// **** Unit Testing in React *****
// Unit testing is a method of testing that tests the individual software unit in theprocess of isolation. 
// Check the output of a function for any given input.

// It means verifying that the component renders for any specific accessory to react components.

// It exercises your code.
// It prevents the regressions.
// Faster feedback in the development.

// **** BrowserRouter in React ****
// React Router is a standard library for routing in React. It enables navigation between views from 
// different components in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.