
// ReactJS is an open-source JavaScript library used to build the user interface for Web Applications. 
// It is responsible only for the view layer of the application. 
// It provides developers to compose complex UIs from a small and isolated piece of code called "components.


// **** React Portals ****
// Before React 16.0 version, it is very tricky to render the child component outside of its parent component hierarchy. 
// If we do this, it breaks the convention where a component needs to render as a new element and follow a parent-child 
// hierarchy.In React, the parent component always wants to go where its child component goes. That's why React portal 
// concept comes in.
// ReactDOM.createPortal(child, container)  


// React Redux is the official UI bindings for react Application. 
// It is kept up-to-date with any API changes to ensure that your React components behave as expected.
// It encourages good 'React' architecture.
// It implements many performance optimizations internally, which allows to components re-render only when it actually needs.

// **** The components of Redux architecture are explained below. ****

// #STORE: A Store is a place where the entire state of your application lists. 
// It manages the status of the application and has a dispatch(action) function. 
// It is like a brain responsible for all moving parts in Redux.

// #ACTION: Action is sent or dispatched from the view which are payloads that can be read by Reducers.
//  It is a pure object created to store the information of the user's event. 
//  It includes information such as type of action, time of occurrence, location of occurrence, 
//  its coordinates, and which state it aims to change.

// #REDUCER: Reducer read the payloads from the actions and then updates the store via the state accordingly.
// It is a pure function to return a new state from the initial state.

// #Redux Installation
// Requirements: React Redux requires React 16.8.3 or later version.

// To use React Redux with React application, you need to install the below command.

// $ npm install redux react-redux --save  



