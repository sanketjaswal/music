import React from "react";
import "./TabSoundController.css";

export const TabSoundController = () => {
  return (
    <div className="sound_control_container">
      <div className="sound_control_holder">
        <div className="sound_cont_top_shelf">
          <div className="sc_top_shelf_light"></div>
          <div className="sc_top_shelf_screen">Sine</div>
        </div>
        <div className="sound_cont_bottom_shelf">
          <div className="controller_holder"></div>
          <div className="controller_holder"></div>
          <div className="controller_holder"></div>
          <div className="controller_holder"></div>
        </div>
      </div>
    </div>
  );
};
