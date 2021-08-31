import { React, useEffect } from "react";
import "./AudioCubes.css";
import { Tab } from "./AudioCubesComponents/Tab";
import { AudioCubeSpeakers } from "./AudioCubesComponents/AudioCubeSpeakers";
import { TabSoundController } from "./AudioCubesComponents/TabSoundController";
// import { TabSoundConvertor } from "./AudioCubesComponents/TabSoundConvertor";

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
    activeKey = event.key;
    noteDown(activeKey);
  });

  window.addEventListener("keyup", (event) => {
    noteUp(event.key);
  });

  return (
    <div className="audioCubes_Page_body">
      <div className="audioCubes_container">
        <div className="speakers_container">
          <AudioCubeSpeakers clas="left_speaker" />
          <AudioCubeSpeakers clas="right_speaker" />
        </div>
        <div className="audioCubes">
          <div className="audiocubes_top_shelf">
            <div className="audio_top_tabs_holder">
              <Tab
                noteUp={noteUp}
                noteDown={noteDown}
                clas="top_shelf_tabs"
                tab={tabs[0]}
              />
            </div>
            <TabSoundController />
            <div className="audio_top_tabs_holder">
              <Tab
                noteUp={noteUp}
                noteDown={noteDown}
                clas="top_shelf_tabs"
                tab={tabs[1]}
              />
            </div>
          </div>
          <div className="audiocubes_mid_shelf">
            <div className="audio_mid_tabs_holder">
              <Tab
                noteUp={noteUp}
                noteDown={noteDown}
                clas="mid_shelf_tabs"
                tab={tabs[2]}
              />
            </div>
            <div className="audio_mid_tabs_holder">
              <Tab
                noteUp={noteUp}
                noteDown={noteDown}
                clas="mid_shelf_tabs"
                tab={tabs[3]}
              />
            </div>
          </div>
          <div className="audiocubes_bottom_shelf">
            <Tab
              noteUp={noteUp}
              noteDown={noteDown}
              clas="bottom_shelf_big_tabs"
              tab={tabs[4]}
            />
            <Tab
              noteUp={noteUp}
              noteDown={noteDown}
              clas="bottom_shelf_small_tabs"
              tab={tabs[5]}
            />
            <Tab
              noteUp={noteUp}
              noteDown={noteDown}
              clas="bottom_shelf_small_tabs"
              tab={tabs[6]}
            />
            <Tab
              noteUp={noteUp}
              noteDown={noteDown}
              clas="bottom_shelf_big_tabs"
              tab={tabs[7]}
            />
          </div>
        </div>
      </div>
      {/* <TabSoundConvertor tabSoundChange={tabSoundChange} /> */}
    </div>
  );
};
