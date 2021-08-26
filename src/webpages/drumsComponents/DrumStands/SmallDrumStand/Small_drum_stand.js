import React from "react";
import { DrumVstand } from "../DrumsVstand/DrumVstand";
import "./Small_drum_stand.css";

export const SmallsdrumStand = () => {
  return (
    <div className="sd_stand_conatiner">
      <div className="sd_stand_top_container">
        <div className="sd_stand_left_hold">
          <div className="sd_stand_mid_bars" id="sd_mid_bar_left"></div>
          <div className="sd_stand_ball"></div>
          <div className="sd_stand_left_holder"></div>
        </div>
        <div className="sd_stand_right_hold">
          <div className="sd_stand_mid_bars" id="sd_mid_bar_right"></div>
          <div className="sd_stand_ball"></div>
          <div className="sd_stand_right_holder"></div>
        </div>
        <div className="sd_stand_mid_bars" id="sd_mid_bar_mid">
          <div className="sd_stand_base_bar">
            <DrumVstand />
          </div>
          <div className="sd_stand_bar_combiner"></div>
        </div>
        <div className="sd_stand_elbow_ball"></div>
      </div>
    </div>
  );
};
