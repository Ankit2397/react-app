import React, { Component } from 'react';  
import { cloneDeepWithoutLoc } from '@babel/types';
import ReactDOMServer from 'react-dom/server';

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

            </div>

            </div>
        );  
    }  
}  
export default Contact;


//  ****** Strict Mode ****

// StrictMode is a tool for highlighting potential problems in an application. Like Fragment, 
// StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

// import React from 'react';

// function ExampleApplication() {
//   return (
//     <div>
//       <Header />
//       <React.StrictMode>
//         <div>
//           <ComponentOne />
//           <ComponentTwo />
//         </div>
//       </React.StrictMode>
//       <Footer />
//     </div>
//   );
// }

// **** strict mode checks will not be run against the Header and Footer components. **** 

// Note:
// Strict mode checks are run in development mode only; they do not impact the production build.

// StrictMode currently helps with:

// Identifying components with unsafe lifecycles
// Warning about legacy string ref API usage
// Warning about deprecated findDOMNode usage
// Detecting unexpected side effects
// Detecting legacy context API
// Ensuring reusable state


// **** Typechecking With PropTypes *****
// import React, { useState } from 'react';
// import props from 'prop-types';

// const Example=()=> {
// return(
// 	<h1>{props.data}</h1>
// 	);
// 	}
// 	function propsExample()
// 	{	
// 	const [change, setChange] = useState(true);
// 		return (
// 		<div>
// 		<button onClick = {() => setChange(!change)}>
// 			Click Here!
// 		</button>
// 		{change?
// 			<Example data="Welcome to GeeksforGeeks"/>:
// 			<Example data="A Computer Science Portal for Geeks"/>}
// 		</div>
// 		);
// 	}

// export default Example;



// we recommend using controlled components to implement forms. 
// In a controlled component, form data is handled by a React component. 
// The alternative is uncontrolled components, where form data is handled by the DOM itself.

//  **** The Uncontrolled *****
// Uncontrolled inputs are like traditional HTML form inputs:

// class Form extends Component {
//   handleSubmitClick = () => {
//     const name = this._name.value;
//     // do something with `name`
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" ref={(input) => (this._name = input)} />
//         <button onClick={this.handleSubmitClick}>Sign up</button>
//       </div>
//     );
//   }
// }


// *** The Controlled ***
// A controlled input accepts its current value as a prop, as well as a callback to change that value. 
// You could say it's a more "React way" of approaching this (which doesn't mean you should always use it).

// <input value={someValue} onChange={handleChange} />



// class Form extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//     };
//   }

//   handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" value={this.state.name} onChange={this.handleNameChange} />
//       </div>
//     );
//   }
// }


// Element	 ****
// <input type="text" />	
// <input type="checkbox" />	
// <input type="radio" />
// <textarea />
// <select />

// Value property ****
// value="string"
// checked={boolean}
// checked={boolean}
// value="string"	
// value="option value"

// Change callback	New value in the callback ****
// onChange	event.target.value
// onChange	event.target.checked
// onChange	event.target.checked
// onChange	event.target.value
// onChange	event.target.value

// **** Web Components *****
// Web Components provide a generic and reusable UI component model for the Web
// One common confusion is that Web Components use “class” instead of “className”.

// To access the imperative APIs of a Web Component, you will need to use a ref to interact with the DOM node directly
// function BrickFlipbox() {
//   return (
//     <brick-flipbox class="demo">
//       <div>front</div>
//       <div>back</div>
//     </brick-flipbox>
//   );
// }
//   function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>toggle alert</button>

//       <x-alert hidden={show} status="success" closable oncloseChange={() => setShow(!show)}>
//         This is a Web Component in React
//       </x-alert>
//     </div>
//   );
// }

//  ***** ReactDOMServer *****
// The ReactDOMServer object enables you to render components to static markup. Typically, it’s used on a Node server:

// // ES modules
// import ReactDOMServer from 'react-dom/server';
// // CommonJS
// var ReactDOMServer = require('react-dom/server');

// In the browser:

// var React = require('react');
// var ReactDOM = require('react-dom');
// class Blog extends React.Component
// {
// render()
// {
// return <div>EduCBA Trainings</div>;
// }
// }
// ReactDOM.render(<Blog />, node);
// On the server:

// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
// class Blog extends React.Component {
// render() {
// return <div>EduCBA Trainings</div>;
// }
// }
// ReactDOMServer.renderToString(<Blog />);