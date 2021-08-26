import React from "react";
import "./Drum_Hook.css";

export const DrumHookMid = ({ id }) => {
  return (
    <div className="dh_container" id={id}>
      <div className="dh_hook dh_hook_mid"></div>
      <div className="dh_ball"></div>
      <div className="dh_hook dh_hook_mid"></div>
    </div>
  );
};
