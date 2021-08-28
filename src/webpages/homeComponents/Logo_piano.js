import React from "react";
import "./Logo_piano.css";

export const LogoPiano = ({ click, pageChanger }) => {
  return (
    <div
      className="logo_Piano_container"
      onClick={() => {
        pageChanger("Piano");
        click();
      }}
    >
      <div className="logo_piano_base">
        <div className="logo_piano_white_key first_logo_piano_key">
          <div className="logo_piano_black_key"></div>
        </div>
        <div className="logo_piano_white_key">
          <div className="logo_piano_black_key"></div>
        </div>
        <div className="logo_piano_white_key"></div>
        <div className="logo_piano_white_key">
          <div className="logo_piano_black_key"></div>
        </div>
        <div className="logo_piano_white_key">
          <div className="logo_piano_black_key"></div>
        </div>
        <div className="logo_piano_white_key">
          <div className="logo_piano_black_key"></div>
        </div>
        <div className="logo_piano_white_key"></div>
        <div className="logo_piano_white_key">
          <div className="logo_piano_black_key"></div>
        </div>
        <div className="logo_piano_white_key">
          <div className="logo_piano_black_key"></div>
        </div>
        <div className="logo_piano_white_key last_logo_piano_key"></div>
      </div>
    </div>
  );
};
