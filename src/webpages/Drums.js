import React from "react";
import { MediumDrum } from "./drumsComponents/Medium_drum";
import { SmallDrum } from "./drumsComponents/Small_drum";
import { LargeDrum } from "./drumsComponents/Large_drum";
import { CircleDrum } from "./drumsComponents/Circle_drum";
import "./Drums.css";

export const Drums = () => {
  const drumClickEvent = (evt) => {
    // console.log(evt.currentTarget.firstChild);
    evt.currentTarget.firstChild.currentTime = 0;
    evt.currentTarget.firstChild.play();
  };

  return (
    <div className="drums_Page_body">
      <div className="drums_container">
        <LargeDrum click={drumClickEvent} />
        <MediumDrum click={drumClickEvent} type="Big-Rack-Tom" />
        <MediumDrum click={drumClickEvent} type="Small-Rack-Tom" />
        <SmallDrum click={drumClickEvent} />
        <CircleDrum click={drumClickEvent} />
      </div>
    </div>
  );
};
