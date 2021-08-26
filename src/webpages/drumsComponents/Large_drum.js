import React from "react";
import { DrumHookUp } from "./drumParts/Drum_Hook_up";
import { DrumHookDown } from "./drumParts/Drum_Hook_down";
import { LargeDrumStand } from "./DrumStands/LargeDrumStand/Large_drum_stand";
import "./Large_drum.css";

export const LargeDrum = ({ click }) => {
  return (
    <div className="d_container" id="Floor-Tom" onClick={(e) => click(e)}>
      <audio
        controls
        class="drum_audio"
        src={`https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Floor-Tom.mp3`}
      ></audio>

      <div className="d_base" id="ld_base">
        <div className="d_Steel_bar d_sb_1" id="ld_steel_bar"></div>
        <div className="d_hooks_container" id="d_hooks_cont1">
          <DrumHookUp />
          <DrumHookUp />
          <DrumHookUp />
          <DrumHookUp />
        </div>
        <div className="d_hooks_container" id="d_hooks_cont2">
          <DrumHookDown />
          <DrumHookDown />
          <DrumHookDown />
          <DrumHookDown />
        </div>
        <div className="d_Steel_bar d_sb_2" id="ld_steel_bar"></div>
        <LargeDrumStand id="ld_stand_left" />
        <LargeDrumStand id="ld_stand_mid" />
        <LargeDrumStand id="ld_stand_right" />
      </div>
    </div>
  );
};
