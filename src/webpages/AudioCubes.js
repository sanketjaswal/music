import { React, useEffect } from "react";
import "./AudioCubes.css";
import { TabSoundConvertor } from "./AudioCubesComponents/TabSoundConvertor";
import { Tab } from "./AudioCubesComponents/Tab";

export const AudioCubes = () => {
  useEffect(() => {
    tabAudioPlayer();
  });

  const tabs = ["F", "G", "H", "J", "V", "B", "N", "M"];
  const freqArray = [261.6, 293.7, 329.6, 349.2, 392.0, 440.0, 493.9, 523.5];

  let context = new AudioContext();
  let note = context.createOscillator();
  let gn = context.createGain();
  note.type = "sine";

  const tabSoundChange = (node) => {
    console.log(node);
    note.type = node;
  };

  const tabAudioPlayer = () => {
    note.connect(gn);
    note.start(0);
  };

  const noteDown = (element) => {
    element = element.toUpperCase();
    if (tabs.includes(element)) {
      note.frequency.value = freqArray[tabs.indexOf(element)];
      gn.connect(context.destination);
      gn.gain.exponentialRampToValueAtTime(1, context.currentTime + 0.01);
    }
  };

  const noteUp = (element) => {
    element = element.toUpperCase();
    if (tabs.includes(element)) {
      gn.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.01);
    }
  };

  let activeKey = "";

  window.addEventListener("keydown", (event) => {
    console.log(event);
    activeKey = event.key;
    noteDown(activeKey);
  });

  window.addEventListener("keyup", (event) => {
    noteUp(event.key);
  });

  return (
    <div className="audioCubes_Page_body">
      <div className="audioCubes_container">
        <div className="audioCubes">
          <Tab noteUp={noteUp} noteDown={noteDown} tab={tabs[0]} />
          <Tab noteUp={noteUp} noteDown={noteDown} tab={tabs[1]} />
          <Tab noteUp={noteUp} noteDown={noteDown} tab={tabs[2]} />
          <Tab noteUp={noteUp} noteDown={noteDown} tab={tabs[3]} />
          <Tab noteUp={noteUp} noteDown={noteDown} tab={tabs[4]} />
          <Tab noteUp={noteUp} noteDown={noteDown} tab={tabs[5]} />
          <Tab noteUp={noteUp} noteDown={noteDown} tab={tabs[6]} />
          <Tab noteUp={noteUp} noteDown={noteDown} tab={tabs[7]} />
        </div>
        <TabSoundConvertor tabSoundChange={tabSoundChange} />
      </div>
    </div>
  );
};
