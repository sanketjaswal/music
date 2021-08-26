import React from "react";
import "./Logo_audioCubes.css";
import { Link } from "react-router-dom";

export const LogoAudioCubes = ({ click }) => {
  return (
    <Link to="/AudioCubes">
      <div className="logo_audioCubes_container" onClick={() => click()}>
        <div className=""></div>
      </div>
    </Link>
  );
};
