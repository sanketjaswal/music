import React from "react";
import "./Logo_audioCubes.css";

export const LogoAudioCubes = ({ click, pageChanger }) => {
  return (
    <div
      className="logo_AudioCubes_container"
      onClick={() => {
        pageChanger("AudioCubes");
        click();
      }}
    >
      <div className="logo_audioCubes_holder">
        <div className="logo_audioCubes sl"></div>
        <div className="logo_audioCubes sl"></div>
        <div className="logo_audioCubes sl"></div>
        <div className="logo_audioCubes ll"></div>
        <div className="logo_audioCubes ll"></div>
      </div>
    </div>
  );
};
