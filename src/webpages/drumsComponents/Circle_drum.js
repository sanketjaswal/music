import React from "react";
import { CircleDrumHook } from "./drumParts/circle_drum_hook";
import { CircleDrumStand } from "./DrumStands/CircleDrumStand/Circle_Drum_Stand";
import "./Circle_drum.css";

export const CircleDrum = ({ click }) => {
  return (
    <div className="d_container" id="Kick" onClick={(e) => click(e)}>
      <audio
        controls
        className="drum_audio"
        src={`https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Kick.mp3`}
      ></audio>
      <div className="md_stand_bottom_bar_holder"></div>
      <CircleDrumStand id="cd_stand_right" />
      <CircleDrumStand id="cd_stand_left" />
      <div className="cd_steel_ring">
        <div id="cd_base">
          <CircleDrumHook id="cd_hook_1" />
          <CircleDrumHook id="cd_hook_2" />
          <CircleDrumHook id="cd_hook_3" />
          <CircleDrumHook id="cd_hook_4" />
          <CircleDrumHook id="cd_hook_5" />
          <CircleDrumHook id="cd_hook_6" />
          <h1>Taal</h1>
        </div>
      </div>
    </div>
  );
};
