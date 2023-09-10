import { createContext, useReducer } from "react";
import {ADD, reducer, initValue} from './reducer'
export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [stateValue, dispatch] = useReducer(reducer, initValue);
  return (
    <GlobalContext.Provider value={{ stateValue, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider


