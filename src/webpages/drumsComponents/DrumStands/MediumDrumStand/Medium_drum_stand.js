import React from "react";
import "./Medium_drum_stand.css";

export const MediumDrumStand = ({ id }) => {
  return (
    <div className="md_stand_conatiner" id={id + "_container"}>
      <div className="md_stand_drum_holder">
        <div className="md_stand_bar" id={id + "_drum_holder"}>
          <div className="md_stand_elbow_holder" id={id + "_elbow_holder"}>
            <div className="md_stand_elbow"></div>
            <div className="md_stand_bottom_bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
