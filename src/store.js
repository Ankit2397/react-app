// ** Using createstore

// import {createStore} from 'redux';
// const store = createStore(rootReducer ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import rootReducer from "./Reducer/index";

// ** Using toolkit in redux

import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
  reducer: rootReducer,
})
export default store; 