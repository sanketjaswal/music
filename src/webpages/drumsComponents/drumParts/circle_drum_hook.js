import React from "react";
import "./circle_drum_hook.css";

export const CircleDrumHook = ({ id }) => {
  return (
    <div className="ch_container" id={id}>
      <div className="ch_top_circle"></div>
      <div className="ch_rectangle"></div>
    </div>
  );
};
