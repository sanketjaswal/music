import React from "react";
import "./Play_stick.css";

export const PlayStick = () => {
  return (
    <div className="base_rotator">
      <div className="stick_holder">
        <div className="base_stick">
          <div className="base_black_part">
            <div className="small_rotator">
              <div className="second_black_part">
                <div className="side_bar"></div>
                <div className="second_main_part"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
