import { objectTypeSpreadProperty, functionExpression } from "@babel/types";
import { promised } from "q";

// ReactJS is an open-source JavaScript library used to build the user interface for Web Applications. 
// It is responsible only for the view layer of the application. 
// It provides developers to compose complex UIs from a small and isolated piece of code called "components.


// Available Scripts

// npm start

// npm test

// npm run build

// npm run eject

// Then to analyze the bundle run the production build then run the analyze script.

// npm run build
// npm run analyze
                                                                            



// the presentational components are concerned with the look. 

const Users = props =>
      (<ul>  
         {props.users.map(user =>
            (<li>{itr}</li>    ))
         }
      </ul>)
// container components are concerned with making things work.
// container component
// classUsersContainerextendsReact.Component{constructor()
//     {
//      this.state = {  
//         itr: []   
//      }
//    }
//   componentDidMount() {  
//      axios.get('/users').then(itr=>this.setState({ users: itr}))   
//      )  }
//  render() {
//    return<Usersusers={this.state.itr} /> 
//    }}


// #Block Level Scope

{                             
    var a=10;
}

// #Function Level Scope

function func(){
    let a=10;
}
// #Global Level Scope

const a= 10;
function func(){

}

// JSON is Unlike XML Because
// JSON doesn't use end tag
// JSON is shorter
// JSON is quicker to read and write
// JSON can use arrays

// XML is much more difficult to parse than JSON.
// JSON is parsed into a ready-to-use JavaScript object.

// JSON Example
// {"employees":[
//   { "firstName":"John", "lastName":"Doe" },
//   { "firstName":"Anna", "lastName":"Smith" },
//   { "firstName":"Peter", "lastName":"Jones" }
// ]}

// XML Example
// <employees>
//   <employee>
//     <firstName>John</firstName> <lastName>Doe</lastName>
//   </employee>
//   <employee>
//     <firstName>Anna</firstName> <lastName>Smith</lastName>
//   </employee>
//   <employee>
//     <firstName>Peter</firstName> <lastName>Jones</lastName>
//   </employee>
// </employees>


// # Unidirectional data flow

// Unidirectional data flow is a technique that is mainly found in functional reactive programming. 
// It is also known as one-way data flow, which means the data has one, and only one way to be transferred to 
// other parts of the application. 

// Toast Notifications are popup messages that are added so as to display a message to a user. 
// It can be a success message, warning message, or custom message. 
// Toast Notification is also called Toastify Notifications. 
// This all toast notification comes under-react-toastify module so to use them we need to import this module.



// Now, ReactJS has provided us a Pure Component. If we extend a class with Pure Component, 
// there is no need for shouldComponentUpdate() Lifecycle Method. 
// ReactJS Pure Component Class compares current state and props with new props and 
// states to decide whether the React component should re-render itself or  Not.
// import React from ‘react’;
  
// export default class Test extends React.PureComponent{
//    render(){
//       return <h1>Welcome to GeeksforGeeks</h1>;
//    }
// }

// The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.

// Window Methods
// Some other methods:

// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window



// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished


// "I Promise a Result!"

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// function printAll(){
//     printString("A")
//   #promises  .then(() => {
//       return printString("B")
//     })
//  #promises   .then(() => {
//       return printString("C")
//     })
//   }
//   printAll()


// A Promise is a JavaScript object that links producing code and consuming code

// function printAll(){
//     printString("A", () => {
//       printString("B", () => {
//         printString("C", () => {})
//       })
//     })
//   }
//   printAll()


// await and async


// async function printAll(){
//     await printString("A")
//     await printString("B")
//     await printString("C")
//   }
//   printAll()

// async function return a promise
// and await is used in async function to wait for resole a promise

// Nested routes enables you to have multiple components render on the same page with route parity. 
// This is useful for app experiences where you want the user to be able to "drill down" into content 
// and not lose their way, such as in forums or blogs.