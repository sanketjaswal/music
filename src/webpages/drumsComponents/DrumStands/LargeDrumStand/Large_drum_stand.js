import React from "react";
import "./Large_drum_stand.css";

export const LargeDrumStand = ({ id }) => {
  return (
    <div className="ld_stand_conatiner" id={id + "_container"}>
      <div className="ld_Stand_holder"></div>
      <div className="ld_stand_lower" id={id}>
        <div className="ld_Stand_stick"></div>
        <div className="ld_Stand_ball"></div>
      </div>
    </div>
  );
};
