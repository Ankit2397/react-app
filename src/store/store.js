import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import reducer from './ReducerSlice'
import { applyMiddleware } from "redux";
import loggerMiddleware from '../loggerMiddleware'
const middleware = applyMiddleware(loggerMiddleware);
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        reducer:reducer,
        middleware
    },
});

export default store;
