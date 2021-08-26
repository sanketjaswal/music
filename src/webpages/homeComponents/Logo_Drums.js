import React from "react";
import "./Logo_Drums.css";
import { Link } from "react-router-dom";

export const LogoDrums = ({ click }) => {
  return (
    <Link to="/Drums">
      <div className="logo_drums_container" onClick={() => click()}>
        <div className="logo_drum_1">
          <div className="logo_drum_1_base">
            <h5>Drums</h5>
            <div className="logo_drum_1_hook" id="logo_d1h_1"></div>
            <div className="logo_drum_1_hook" id="logo_d1h_2"></div>
            <div className="logo_drum_1_hook" id="logo_d1h_3"></div>
            <div className="logo_drum_1_hook" id="logo_d1h_4"></div>
            <div className="logo_drum_1_hook" id="logo_d1h_5"></div>
            <div className="logo_drum_1_hook" id="logo_d1h_6"></div>
          </div>
        </div>
        <div className="logo_drum_2">
          <div className="logo_drum_2_face" id="logo_d2_1"></div>
          <div className="logo_drum_2_face" id="logo_d2_2"></div>
          <div className="logo_drum_2_hook_container">
            <div className="logo_drum_2_hook"></div>
            <div className="logo_drum_2_hook"></div>
            <div className="logo_drum_2_hook"></div>
            <div className="logo_drum_2_hook"></div>
          </div>
          <div className="logo_drum_2_hook_container">
            <div className="logo_drum_2_hook"></div>
            <div className="logo_drum_2_hook"></div>
            <div className="logo_drum_2_hook"></div>
            <div className="logo_drum_2_hook"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};
