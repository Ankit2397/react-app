import { createContext, useContext, useEffect, useReducer } from "react";
import {useProductContext} from './Productcontext';
import reducer from '../reducer/filterReducer'

const FilterContext = createContext();
const initialState ={
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value: "lowest",

}
export const FilterContextProvider = ({ children }) => {
    const { products }=useProductContext();
    console.log(products)
    const [state , dispatch] =useReducer(reducer ,initialState)


  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" }),
    console.log("Grid Products")
  };

  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" }),
    console.log("list Products")
  };
// sort function
const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  // to sort the product
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value]);

    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
    }, [products]);
return (
<FilterContext.Provider value={{...state , setGridView ,setListView , sorting}}>

    {children}
</FilterContext.Provider>
)
}
export const useFilterContext = () => {
    return useContext(FilterContext);
  };
  
      