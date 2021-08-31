import React from "react";
import "./TabSoundController.css";

export const TabSoundController = ({ tabSoundChange, Sounds }) => {
  return (
    <div className="sound_control_container">
      <div className="sound_control_holder">
        <div className="sound_cont_top_shelf">
          <div className="sc_top_shelf_light"></div>
          <div className="sc_top_shelf_screen">sine</div>
        </div>
        <div className="sound_cont_bottom_shelf">
          <div
            className={`controller_holder ${Sounds[0]}`}
            onClick={() => {
              tabSoundChange(Sounds[0]);
            }}
          >
            <div className="control_lever" id="lever_on"></div>
          </div>
          <div
            className={`controller_holder ${Sounds[1]}`}
            onClick={() => {
              tabSoundChange(Sounds[1]);
            }}
          >
            <div className="control_lever"></div>
          </div>
          <div
            className={`controller_holder ${Sounds[2]}`}
            onClick={() => {
              tabSoundChange(Sounds[2]);
            }}
          >
            <div className="control_lever"></div>
          </div>
          <div
            className={`controller_holder ${Sounds[3]}`}
            onClick={() => {
              tabSoundChange(Sounds[3]);
            }}
          >
            <div className="control_lever"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
