import React from "react";
import "./xylophone_bars.css";

export const XylophoneBars = ({ songName, player }) => {
  let name = songName.replace(/[^a-z]+/gi, "");
  let numbr = songName.match(/\d/g)[0];
  return (
    <div
      className={`xylophone_bars xylophone_${numbr}`}
      onClick={(e) => player(e)}
    >
      <div className="xylophone_Screws"></div>
      <h4>{name}</h4>
      <div className="xylophone_Screws"></div>
      <audio
        controls
        id="xylo_audio"
        src={`https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/${songName}.mp3`}
      ></audio>
    </div>
  );
};
