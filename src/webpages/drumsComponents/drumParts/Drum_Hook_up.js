import React from "react";
import "./Drum_Hook.css";

export const DrumHookUp = ({ id }) => {
  return (
    <div className="dh_container" id={id}>
      <div className="dh_hook"></div>
      <div className="dh_ball"></div>
    </div>
  );
};
