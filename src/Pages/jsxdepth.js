// Using Dot Notation for JSX Type
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

// JavaScript Expressions as Props
{/* <MyComponent foo={1 + 2 + 3 + 4} />

function NumberDescriber(props) {
    let description;
    if (props.number % 2 == 0) {
      description = <strong>even</strong>;
    } else {
      description = <i>odd</i>;
    }
    return <div>{props.number} is an {description} number</div>;
  } */}


//   Props Default to “True”
// If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:

// <MyTextBox autocomplete />

// <MyTextBox autocomplete={true} />


// **** Spread Attributes ***
// If you already have props as an object, and you want to pass it in JSX, you can use ... as a “spread” syntax to pass the whole props object. These two components are equivalent:

// function App1() {
//   return <Greeting firstName="Ben" lastName="Hector" />;
// }

// function App2() {
//   const props = {firstName: 'Ben', lastName: 'Hector'};
//   return <Greeting {...props} />;
// }

// JSX Children
 
// <MyContainer>
//   <MyFirstComponent />
//   <MySecondComponent />
// </MyContainer>