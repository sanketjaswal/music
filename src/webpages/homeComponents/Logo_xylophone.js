import React from "react";
import "./Logo_xylophone.css";
import { Link } from "react-router-dom";

export const LogoXylophone = ({ click }) => {
  return (
    <Link to="/Xylophone">
      <div className="logo_xylo_container" onClick={() => click()}>
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
    </Link>
  );
};
