import React from "react";
import { XylophoneBars } from "./xylophoneComponents/xylophone_bars";
import { XyloPlaySticks } from "./xylophoneComponents/xylo_play_sticks";
import { XyloSurroundings } from "./xylophoneComponents/xylo_surroundings";
import "./Xylophone.css";

export const Xylophone = () => {
  let xyloSoundNames = [
    "1-DO",
    "2-RE",
    "3-MI",
    "4-FA",
    "5-SOL",
    "6-LA",
    "7-SI",
    "8-DO",
  ];

  const xyloBarSoundPlayer = (evt) => {
    evt.currentTarget.lastChild.currentTime = 0;
    evt.currentTarget.lastChild.play();
  };

  return (
    <div className="xylophone_page_body">
      <XyloSurroundings player={xyloBarSoundPlayer} />
      <XyloPlaySticks clas="stick2" />
      <XyloPlaySticks clas="stick1" />
      <div className="xylophone_container">
        <div className="xylophone_base">
          <XylophoneBars
            songName={xyloSoundNames[0]}
            player={xyloBarSoundPlayer}
          />
          <XylophoneBars
            songName={xyloSoundNames[1]}
            player={xyloBarSoundPlayer}
          />
          <XylophoneBars
            songName={xyloSoundNames[2]}
            player={xyloBarSoundPlayer}
          />
          <XylophoneBars
            songName={xyloSoundNames[3]}
            player={xyloBarSoundPlayer}
          />
          <XylophoneBars
            songName={xyloSoundNames[4]}
            player={xyloBarSoundPlayer}
          />
          <XylophoneBars
            songName={xyloSoundNames[5]}
            player={xyloBarSoundPlayer}
          />
          <XylophoneBars
            songName={xyloSoundNames[6]}
            player={xyloBarSoundPlayer}
          />
          <XylophoneBars
            songName={xyloSoundNames[7]}
            player={xyloBarSoundPlayer}
          />
        </div>
      </div>
    </div>
  );
};
