
import React, { createContext, useState } from 'react';


const ContextAPI = createContext();

// Context provider component
export const ContextProvider = ({ children }) => {
  const [ExpPolicies, setExpPolicies] = useState([]);
  const [GlobalUserName, setGlobalUserName] = useState("");


  console.log('ContextProvider initialized', { ExpPolicies, setExpPolicies, GlobalUserName, setGlobalUserName });

  return (
    <ContextAPI.Provider value={{ ExpPolicies, SetExpPolicies: setExpPolicies, GlobalUserName, setGlobalUserName }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextAPI;