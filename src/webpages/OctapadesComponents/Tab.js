import React from "react";
import "./Tab.css";

export const Tab = ({ noteDown, tab, noteUp, clas }) => {
  return (
    <div
      className={`tab ${clas}`}
      id={tab + "_tab"}
      onMouseDown={() => {
        noteDown(tab);
      }}
      onMouseUp={() => {
        noteUp(tab);
      }}
      ontouchstart={() => {
        noteDown(tab);
      }}
      ontouchend={() => {
        noteUp(tab);
      }}
    >
      <h1 className="tabText">{tab}</h1>
    </div>
  );
};
