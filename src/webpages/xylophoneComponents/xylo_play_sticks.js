import React from "react";
import "./xylo_play_sticks.css";

export const XyloPlaySticks = (clas) => {
  return (
    <div className={`xylo_stick_container ${clas.clas}`}>
      <div className="xylo_stick_ball_container">
        <div className="xylo_stick_ball"></div>
      </div>
      <div className="xylo_stick_wood_container">
        <div className="xylo_stick_wood"></div>
      </div>
    </div>
  );
};
