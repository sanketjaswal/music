import React from "react";
import "./Logo_music.css";

export const LogoMusic = ({ click, pageChanger }) => {
  return (
    <div
      className="music_logo_container"
      onClick={() => {
        pageChanger("/");
        click();
      }}
    >
      <div className="music_logo_base">
        <div className="top_bar"></div>
        <div className="logo_bottom">
          <div className="bars_handler">
            <div className="v_bar1"></div>
            <div className="circle c1"></div>
          </div>
          <div className="bars_handler bh2">
            <div className="v_bar2"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
