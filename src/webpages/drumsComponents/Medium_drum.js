import React from "react";
import { DrumHookUp } from "./drumParts/Drum_Hook_up";
import { DrumHookDown } from "./drumParts/Drum_Hook_down";
import { MediumDrumStand } from "./DrumStands/MediumDrumStand/Medium_drum_stand";
import "./Medium_drum.css";

export const MediumDrum = ({ click, type }) => {
  return (
    <div className="d_container" id={type} onClick={(e) => click(e)}>
      <audio
        controls
        className="drum_audio"
        src={`https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/${type}.mp3`}
      ></audio>
      <div className="d_base" id="md_base">
        <div className="d_Steel_bar d_sb_1" id="md_steel_bar"></div>
        <div className="d_hooks_container" id="md_hooks_cont1">
          <DrumHookUp />
          <DrumHookUp />
          <DrumHookUp />
          <DrumHookUp />
        </div>
        <div className="d_hooks_container" id="md_hooks_cont2">
          <DrumHookDown />
          <DrumHookDown />
          <DrumHookDown />
          <DrumHookDown />
        </div>
        <div className="d_Steel_bar d_sb_2" id="md_steel_bar"></div>
        <MediumDrumStand id={type} />
      </div>
    </div>
  );
};
