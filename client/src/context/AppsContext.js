import React, { useState, createContext } from "react";

export const AppsContext = createContext();

export const AppsContextProvider = (props) => {
  const [apps, setApps] = useState([]);

  return (
    <AppsContext.Provider value={{ apps, setApps }}>
      {props.children}
    </AppsContext.Provider>
  );
};
