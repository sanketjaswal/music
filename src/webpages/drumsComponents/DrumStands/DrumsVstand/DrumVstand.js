import React from "react";
import "./DrumVstand.css";

export const DrumVstand = () => {
  return (
    <div className="V_stand_container">
      <div className="V_stand_elbow"></div>
      <div className="V_stand_lower" id="v_stand_left_bar">
        <div className="V_Stand_stick"></div>
        <div className="V_Stand_ball"></div>
      </div>
      <div className="V_stand_lower" id="v_stand_right_bar">
        <div className="V_Stand_stick"></div>
        <div className="V_Stand_ball"></div>
      </div>
    </div>
  );
};
