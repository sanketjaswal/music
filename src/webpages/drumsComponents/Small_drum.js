import React from "react";
import { DrumHookMid } from "./drumParts/Drum_Hook_mid";
import { SmallsdrumStand } from "./DrumStands/SmallDrumStand/Small_drum_stand";
import "./Small_drum.css";

export const SmallDrum = ({ click }) => {
  return (
    <div className="d_container" id="Snare" onClick={(e) => click(e)}>
      <audio
        controls
        class="drum_audio"
        src={`https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Snare.mp3`}
      ></audio>
      <div className="d_base" id="sd_base">
        <div className="d_Steel_bar d_sb_1" id="sd_steel_bar"></div>
        <div className="d_hooks_container" id="d_hooks_cont_mid">
          <DrumHookMid />
          <DrumHookMid />
          <DrumHookMid />
          <DrumHookMid />
        </div>
        <div className="d_Steel_bar d_sb_2" id="sd_steel_bar"></div>
      </div>
      <SmallsdrumStand />
    </div>
  );
};
