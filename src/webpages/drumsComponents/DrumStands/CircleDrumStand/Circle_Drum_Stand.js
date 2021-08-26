import React from "react";
import "./Circle_Drum_Stand.css";

export const CircleDrumStand = ({ id }) => {
  return (
    <div className="cd_stand_conatiner" id={id}>
      <div className="cd_Stand_holder"></div>
      <div className="cd_stand_lower">
        <div className="cd_Stand_stick"></div>
        <div className="cd_Stand_ball"></div>
      </div>
    </div>
  );
};
