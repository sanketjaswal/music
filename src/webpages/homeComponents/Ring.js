import React from "react";
import { LogoMusic } from "./Logo_music";
import { LogoXylophone } from "./Logo_xylophone";
import { LogoPiano } from "./Logo_piano";
import { LogoDrums } from "./Logo_Drums";
import { LogoAudioCubes } from "./Logo_audioCubes";
import "./Ring.css";

export const Ring = ({ click, pageChanger }) => {
  return (
    <div className="outer_circle ">
      <div className="inner_circle">
        <div className="disk_top">
          <h1 className="Music_text">Taal</h1>
          <div className="disk_center"></div>
        </div>
        <div className="logos_container">
          <LogoPiano click={click} pageChanger={pageChanger} />
          <LogoXylophone click={click} pageChanger={pageChanger} />
          <LogoMusic click={click} pageChanger={pageChanger} />
          <LogoDrums click={click} pageChanger={pageChanger} />
          <LogoAudioCubes click={click} pageChanger={pageChanger} />
        </div>
      </div>
    </div>
  );
};
