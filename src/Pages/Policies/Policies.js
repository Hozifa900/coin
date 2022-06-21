import React from "react";
import { useState, useContext } from "react";
import { DataContext } from "../../Model/DataContext";
import "./Policies.css";

export default function Policies() {
  const [mode, setMode] = useContext(DataContext);
  const background = {
    backgroundColor: mode.color,
    color: mode.text,
  };
  return (
    <div className="policies" style={background}>
      The Policies section
    </div>
  );
}
