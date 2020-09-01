import React, { useState, createContext } from "react";

export const AppsContext = createContext();

export const AppsContextProvider = (props) => {
  const [apps, setApps] = useState([]);

  const addApps = (app) => {
    setApps([...apps, app]);
  };
  return (
    <AppsContext.Provider value={{ apps, setApps, addApps }}>
      {props.children}
    </AppsContext.Provider>
  );
};
