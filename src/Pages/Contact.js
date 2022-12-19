import React, { Component } from 'react';  
import { cloneDeepWithoutLoc } from '@babel/types';
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

<BlurExample/>
            </div>

            </div>
        );  
    }  
}  
export default Contact;

// ******* Programmatically managing focus ******


// function CustomTextInput(props) {
//   return (
//     <div>
//       <input ref={props.inputRef} />
//     </div>
//   );
// }

// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputElement = React.createRef();
//   }
//   render() {
//     return (
//       <CustomTextInput inputRef={this.inputElement} />
//     );
//   }
// }

// // Now you can set focus when required.
// this.inputElement.current.focus();


class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  // We close the popover on the next tick by using setTimeout.
  // This is necessary because we need to first check if
  // another child of the element has received focus as
  // the blur event fires prior to the new focus event.
  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  // If a child receives focus, do not close the popover.
  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    // React assists us by bubbling the blur and
    // focus events to the parent.
    return (
      <div onBlur={this.onBlurHandler}
           onFocus={this.onFocusHandler}>
        <button onClick={this.onClickHandler}
                aria-haspopup="true"
                aria-expanded={this.state.isOpen}
              className="mt-4 ml-2 bg-blue-100 py-2 px-3 text-center">
          Select an option
        </button>
        {this.state.isOpen && (
          <ul className="bg-red-200 py-2 w-[180px] ml-2 cursor-pointer">
            <li className="hover:bg-blue-100 pl-2" >Option 1</li>
            <li className="hover:bg-blue-100 pl-2" >Option 2</li>
            <li className="hover:bg-blue-100 pl-2" >Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

// Code-Splitting


// 1) Bundling  =>   Bundling is the process of following imported files and merging them into a single file


// Example
// App:

// // app.js
// import { add } from './math.js';

// console.log(add(16, 26)); // 42
// // math.js
// export function add(a, b) {
//   return a + b;
// }
// Bundle:

// function add(a, b) {
//   return a + b;
// }

// console.log(add(16, 26)); // 42




// **** React.lazy() *****

// The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.


// import React, { Suspense } from 'react';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

// function MyComponent() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <section>
//           <OtherComponent />
//           <AnotherComponent />
//         </section>
//       </Suspense>
//     </div>
//   );
// }



//  ***** Context  *******

// Context provides a way to pass data through the component tree without 
// having to pass props down manually at every level.


// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}


//API

// Creates a Context object. When React renders a component that subscribes to this 
// Context object it will read the current context value from the closest matching Provider above it in the tree.

//Context.Provider

//<MyContext.Provider value={/* some value */}>



// Forwarding Refs


// Ref forwarding is a technique for automatically passing a ref through a 
// component to one of its children. This is typically not necessary for most 
// components in the application. However, it can be useful for some kinds of components, 
// especially in reusable component libraries. The most common scenarios are described below.

// Webpack v4+ will minify your code by default in production mode.

// **** Optimizing Performance ****

// If you’re using Create React App, both Object.assign and the object spread syntax are available by default.

//  function updateColorMap(colormap) {
//   return Object.assign({}, colormap, {right: 'blue'});
// }


// function updateColorMap(colormap) {
//   return {...colormap, right: 'blue'};
// }

//  ***** Fragment *****
// A common pattern in React is for a component to 
// return multiple elements. Fragments let you group 
// a list of children without adding extra nodes to the DOM

function Glossary(props) {
  return (
    <dl>
      
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

// ***** higher-order component *****

// Concretely, a higher-order component is a 
// function that takes a component and returns a new component.

// .forEach()

// This iterates over every element in an array with the same code, but does not change or mutate the array, and it returns undefined.

// .map()

// This method transforms an array by applying a function to all of its elements, and then building a new array from the returned values.

// .reduce()

// This method executes a provided function for each value of the array (from left to right).

// .filter()


// **** jsx in Depth *****

// You can also use the self-closing form of the tag if there are no children. So:

// <div className="sidebar" />


// Using Dot Notation for JSX Type

// function BlueDatePicker() {
//   return <MyComponents.DatePicker color="blue" />;
// }

// User-Defined Components Must Be Capitalized

// **** Refs and the DOM ****
// Refs provide a way to access DOM nodes or React elements created in the render method.

// When to Use Refs
// There are a few good use cases for refs:

// Managing focus, text selection, or media playback.
// Triggering imperative animations.
// Integrating with third-party DOM libraries.
// Avoid using refs for anything that can be done declaratively.


// **** Don’t Overuse Refs ****


// Creating Refs

// Refs are created using React.createRef()


// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//   }
//   render() {
//     return <div ref={this.myRef} />;
//   }
// }


// **** Refs and Function Components ****
// By default, you may not use the ref attribute on function components because they don’t have instances:

// function MyFunctionComponent() {
//   return <input />;
// }

// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();
//   }
//   render() {
//     // This will *not* work!
//     return (
//       <MyFunctionComponent ref={this.textInput} />
//     );
//   }
// }