import React from "react";
import "./Logo_piano.css";
import { Link } from "react-router-dom";

export const LogoPiano = ({ click }) => {
  return (
    <Link to="/piano">
      <div className="logo_piano_container" onClick={() => click()}>
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
    </Link>
  );
};
