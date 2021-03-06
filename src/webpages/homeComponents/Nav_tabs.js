import React from "react";
import "./Nav_tabs.css";

export const NavTabs = ({ navs, navRotator }) => {
  return (
    <div>
      <nav className="tabs_holding_circle">
        <ul>
          <li>
            <a href="/">{navs[0]}</a>
          </li>
          <li>
            <a href="/">{navs[1]}</a>
          </li>
          <li>
            <a href="/">{navs[2]}</a>
          </li>
          <li>
            <a href="/">{navs[3]}</a>
          </li>
          <li>
            <a href="/">{navs[4]}</a>
          </li>
        </ul>
      </nav>
      <div className="navs_hider"></div>
      <div className="playing_stick_container"></div>

      <div className="make_visible_div">
        <div className="arrows" id="up_btn" onClick={(e) => navRotator(e)}>
          ^
        </div>
        <div className="arrows" id="down_btn" onClick={(e) => navRotator(e)}>
          ^
        </div>
      </div>
    </div>
  );
};
