import React ,{ useContext , useState} from "react";

const AppContext=useContext();

const AppProvider = ({children})=>{
 const [isOpen, setIsOpen] = useState(false);

 const openContext = () => {
    setIsOpen(true);
  };
return(
    <AppContext.Provider
      value={{ openContext }}>
    </AppContext.Provider>)
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider };