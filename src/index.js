import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { StrictMode } from "react";
import { Middleware } from 'webpack-dev-server';



  

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render ( <App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// Types of Middleware are

// database middleware, 
// application server middleware, 
// message-oriented middleware, 
// web middleware,
//  and transaction-processing monitors.


reportWebVitals();
