import React from "react";
import "./Logo_Octapades.css";

export const LogoOctapades = ({ click, pageChanger }) => {
  return (
    <div
      className="logo_Octapades_container"
      onClick={() => {
        pageChanger("Octapades");
        click();
      }}
    >
      <div className="logo_Octapades_holder">
        <div className="logo_Octapades sl"></div>
        <div className="logo_Octapades sl"></div>
        <div className="logo_Octapades sl"></div>
        <div className="logo_Octapades ll"></div>
        <div className="logo_Octapades ll"></div>
      </div>
    </div>
  );
};
