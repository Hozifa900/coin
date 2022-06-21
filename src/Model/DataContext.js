import React from "react";
import { createContext, useState } from "react";
import App from "../App";
import Mode from "../Data/Mode";
import Mobile from "../Data/Mobile";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [mode, setMode] = useState(Mode.light);
  const [mobile, setMobile] = useState(Mobile.desktop);

  return (
    <DataContext.Provider value={[mode, setMode, mobile, setMobile]}>
      <App />
    </DataContext.Provider>
  );
};
