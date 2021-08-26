import React from "react";
import "./xylo_surroundings.css";
import { Link } from "react-router-dom";

export const XyloSurroundings = ({ player }) => {
  return (
    <Link to="/">
      <div className="xylo_home_btn_container">
        <div className="xylo_home_bars"></div>
        <div className="xylo_home_bars"></div>
        <div className="xylo_home_btn" onClick={(e) => player(e)}>
          <div className="xylo_home_screws">
            <div className="xylo_screw_mid"></div>
          </div>
          <p>HOME</p>
          <div className="xylo_home_screws"></div>

          <audio
            controls
            id="xylo_audio"
            src={
              "https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/1-DO.mp3"
            }
          ></audio>
        </div>
      </div>
    </Link>
  );
};
