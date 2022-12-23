// The React app bundled their files using tools like Webpack or Browserfy. Bundling is a process which takes multiple files and merges them into a single file, which is called a bundle.

// App.js

// import { add } from './math.js';  
  
// console.log(add(16, 26)); // 42  
// math.js

// export function add(a, b) {  
//   return a + b;  
// }  

function Add(a, b) {  
    return a + b;  
  }  
    
  console.log(Add(16, 26)); // 42  

//   The code splitting improves:

// The performance of the app
// The impact on memory
// The downloaded Kilobytes (or Megabytes) size

// **** React Portals ****

// sometimes we want to insert a child component into a different location in the DOM. It means React does not want to create a new div. We can do this by creating React portal.

// render() {  
//  return ReactDOM.createPortal(  
//    this.props.children,  
//    myNode,  
//  );  
// }  

// It uses React version 16 and its official API for creating portals.
// It has a fallback for React version 15.
// It transports its children component into a new React portal which is appended by default to document.body.
// It can also target user specified DOM element.
// It supports server-side rendering
// It supports returning arrays (no wrapper div's needed)
// It uses <Portal /> and <PortalWithState /> so there is no compromise between flexibility and convenience.
// It doesn't produce any DOM mess.
// It has no dependencies, minimalistic.

// When to use?
// The common use-cases of React portal include:

// Modals
// Tooltips
// Floating menus
// Widgets


// **** React Optimizing Compiler ****
// It's a compiler that automatically generates the equivalent of 
// useMemo and useCallback calls to minimize the cost of re-rendering,
//  while retaining React's programming model. 

// Use the Production Build

// **** Need of React Router ****
// React Router plays an important role to display multiple views 
// in a single page application. Without React Router,

// **** react-router *****
// react-router: It provides the core routing components and functions for the React Router applications.
// react-router-native: It is used for mobile applications.
// react-router-dom: It is used for web applications design.

// **** Route ****
// It is used to define and render component based on the specified path. 
// It will accept components and render to define what should be rendered.

// import React from 'react';  
// import ReactDOM from 'react-dom';  
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
// import './index.css';  
// import App from './App';  
// import About from './about'  
// import Contact from './contact'  
  
// const routing = (  
//   <Router>  
//     <div>  
//       <h1>React Router Example</h1>  
//       <Route path="/" component={App} />  
//       <Route path="/about" component={About} />  
//       <Route path="/contact" component={Contact} />  
//     </div>  
//   </Router>  
// )  