import React from "react";
import "./surrounding.css";

export const Surrounding = () => {
  return (
    <>
      <div className="disk_texture d1">
        <div className="center_disk"></div>
      </div>
      <div className="disk_texture d3">
        <div className="center_disk"></div>
      </div>
      <div className="disk_texture d2">
        <div className="center_disk"></div>
      </div>
      <div className="disk_texture d4">
        <div className="center_disk">
          <div className="disk_text">
            <h3> Sanket Jaswal</h3>
            <div className="link_container">
              <a href="https://github.com/sanketjaswal">
                <span className="github icon"></span>
              </a>
              <a href="https://www.linkedin.com/in/sanket-jaswal-451718169/">
                <span className="linkenIn icon"></span>
              </a>
              <a href="https://codepen.io/sanketjaswal">
                <span className="codepen icon"></span>
              </a>
              <a href="">
                <span className="twitter icon"></span>
              </a>
              <a href="https://www.instagram.com/accounts/login/">
                <span className="instagram icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
