import React, { StrictMode } from "react";
import { render } from 'react-dom';
import { createStore } from "redux";
import App from './App';
import { createRoot } from 'react-dom/client';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("current state", store.getState());
});

store.dispatch({
  type: "INCREMENT",
  payload: 1
});

store.dispatch({
  type: "INCREMENT",
  payload: 5
});

store.dispatch({
  type: "DECREMENT",
  payload: 2
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
  <App/>
  </StrictMode>,
);
