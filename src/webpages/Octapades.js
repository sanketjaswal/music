import { React, useEffect } from "react";
import "./Octapades.css";
import { Tab } from "./OctapadesComponents/Tab";
import { OctapadesSpeakers } from "./OctapadesComponents/OctapadesSpeakers";
import { TabSoundController } from "./OctapadesComponents/TabSoundController";
// import { TabSoundConvertor } from "./OctapadesComponents/TabSoundConvertor";

export const Octapades = () => {
  useEffect(() => {
    tabAudioPlayer();
  });

  const Sounds = ["sine", "square", "triangle", "sawtooth"];

  const tabs = ["F", "G", "H", "J", "V", "B", "N", "M"];
  const freqArray = [261.6, 293.7, 329.6, 349.2, 392.0, 440.0, 493.9, 523.5];

  let context = new AudioContext();
  let note = context.createOscillator();
  let gn = context.createGain();
  note.type = "sine";

  const tabSoundChange = (node) => {
    note.type = node;
    soundColorChange(node);
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

  const soundColorChange = (node) => {
    document.getElementsByClassName("sc_top_shelf_screen")[0].innerHTML = node;
    if (node === Sounds[0]) {
      document.documentElement.style.setProperty(
        "--light_indicator_color",
        "rgb(255, 101, 126)"
      );
    } else if (node === Sounds[1]) {
      document.documentElement.style.setProperty(
        "--light_indicator_color",
        "rgb(33, 189, 33)"
      );
    } else if (node === Sounds[2]) {
      document.documentElement.style.setProperty(
        "--light_indicator_color",
        "gold"
      );
    } else if (node === Sounds[3]) {
      document.documentElement.style.setProperty(
        "--light_indicator_color",
        "rgb(33, 189, 181)"
      );
    }

    for (var i = 0; i < Sounds.length; i++) {
      if (i !== Sounds.indexOf(node)) {
        document
          .getElementsByClassName(Sounds[i])[0]
          .firstChild.removeAttribute("id", "lever_on");
        document.getElementsByClassName(Sounds[i])[0].style.backgroundColor =
          "grey";
      } else if (i === Sounds.indexOf(node)) {
        document
          .getElementsByClassName(Sounds[i])[0]
          .firstChild.setAttribute("id", "lever_on");
        document.getElementsByClassName(Sounds[i])[0].style.backgroundColor =
          "var(--light_indicator_color)";
      }
      console.log(document.getElementsByClassName(Sounds[i])[0]);
    }
  };

  return (
    <div className="Octapades_Page_body">
      <div className="Octapades_container">
        <div className="speakers_container">
          <OctapadesSpeakers clas="left_speaker" />
          <OctapadesSpeakers clas="right_speaker" />
        </div>
        <div className="Octapades">
          <div className="Octapades_top_shelf">
            <div className="Octapades_top_tabs_holder">
              <Tab
                noteUp={noteUp}
                noteDown={noteDown}
                clas="top_shelf_tabs"
                tab={tabs[0]}
              />
            </div>
            <TabSoundController
              tabSoundChange={tabSoundChange}
              Sounds={Sounds}
            />
            <div className="Octapades_top_tabs_holder">
              <Tab
                noteUp={noteUp}
                noteDown={noteDown}
                clas="top_shelf_tabs"
                tab={tabs[1]}
              />
            </div>
          </div>
          <div className="Octapades_mid_shelf">
            <div className="Octapades_mid_tabs_holder">
              <Tab
                noteUp={noteUp}
                noteDown={noteDown}
                clas="mid_shelf_tabs"
                tab={tabs[2]}
              />
            </div>
            <div className="Octapades_mid_tabs_holder">
              <Tab
                noteUp={noteUp}
                noteDown={noteDown}
                clas="mid_shelf_tabs"
                tab={tabs[3]}
              />
            </div>
          </div>
          <div className="Octapades_bottom_shelf">
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
