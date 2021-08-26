import React from "react";
import "./Tab.css";

export const Tab = ({ noteDown, tab, noteUp }) => {
  return (
    <div
      className="tab"
      id={tab + "_tab"}
      onMouseDown={() => {
        noteDown(tab);
      }}
      onMouseUp={() => {
        noteUp(tab);
      }}
    >
      <h1 className="tabText">{tab}</h1>
    </div>
  );
};
