import React from "react";
import "./Logo_xylophone.css";

export const LogoXylophone = ({ click, pageChanger }) => {
  return (
    <div
      className="logo_Xylophone_container"
      onClick={() => {
        pageChanger("Xylophone");
        click();
      }}
    >
      <div className="logo_xylo_bars_holder">
        <div className="logo_xylo_bars logo_xylo_1">
          <div className="logo_xylo_Screws"></div>
          <div className="logo_xylo_Screws"></div>
        </div>
        <div className="logo_xylo_bars logo_xylo_2">
          <div className="logo_xylo_Screws"></div>
          <div className="logo_xylo_Screws"></div>
        </div>
        <div className="logo_xylo_bars logo_xylo_3">
          <div className="logo_xylo_Screws"></div>
          <div className="logo_xylo_Screws"></div>
        </div>
        <div className="logo_xylo_bars logo_xylo_4">
          <div className="logo_xylo_Screws"></div>
          <div className="logo_xylo_Screws"></div>
        </div>
        <div className="logo_xylo_bars logo_xylo_5">
          <div className="logo_xylo_Screws"></div>
          <div className="logo_xylo_Screws"></div>
        </div>
        <div className="logo_xylo_bars logo_xylo_6">
          <div className="logo_xylo_Screws"></div>
          <div className="logo_xylo_Screws"></div>
        </div>
      </div>
    </div>
  );
};
